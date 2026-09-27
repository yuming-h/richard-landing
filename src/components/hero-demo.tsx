"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import Image from "next/image";
import "./hero-demo.css";

const FILES = [
  {
    id: "docx",
    label: "Biology notes.txt",
    kind: "doc",
    tint: "border-sky-200 bg-sky-50/85",
  },
  {
    id: "pdf",
    label: "Lecture 1 Slides.pdf",
    kind: "pdf",
    tint: "border-rose-200 bg-rose-50/85",
  },
  {
    id: "youtube",
    label: "Introduction to Photosynthesis",
    kind: "video",
    tint: "border-red-200 bg-red-50/85",
  },
  {
    id: "mic",
    label: "Lecture Recording",
    kind: "mic",
    tint: "border-violet-200 bg-violet-50/85",
  },
] as const;

const ROW_Y = [-96, -32, 32, 96];
const LIFT_X = [-36, -12, 12, 36];
const LIFT_R = [-8, -3, 3, 8];
const QUIZ_CHOICES = ["Mitochondria", "Chloroplast", "Nucleus", "Ribosome"];
const CORRECT_CHOICE = 1;
const BLANK_ANSWER = "chlorophyll";
const PODCAST_SECONDS = 186;
const WAVE_HEIGHTS = [
  12, 22, 16, 30, 38, 24, 42, 28, 18, 34, 46, 30, 20, 38, 26, 44, 32, 18, 28,
  40, 22, 34, 16, 26,
];
const SCENES = [
  "Your notes, organized",
  "Listen and learn",
  "Put it to the test",
  "Make it stick",
  "A little recall goes a long way",
];
const NOTES = [
  "Happens inside the chloroplast",
  "Chlorophyll absorbs sunlight",
  "Carbon dioxide becomes glucose",
  "Oxygen is released as a byproduct",
];

type IconPose = "rest" | "lift" | "fall";
type FileKind = (typeof FILES)[number]["kind"];

type Demo = {
  scene: "generate" | "learn";
  iconPose: IconPose;
  zoneScale: number;
  zoneFast: boolean;
  dropOpacity: number;
  filesShown: boolean;
  filesGone: boolean;
  buttonShown: boolean;
  pressed: boolean;
  showProgress: boolean;
  progress: number;
  snap: boolean;
  learnIndex: number;
  podcast: number;
  podcastPlaying: boolean;
  notesShown: number;
  picked: number | null;
  revealed: boolean;
  pressingChoice: number | null;
  typed: string;
  blankDone: boolean;
  flipped: boolean;
};

type Cursor = {
  x: number;
  y: number;
  show: boolean;
  pressed: boolean;
  snap: boolean;
};

const INITIAL: Demo = {
  scene: "generate",
  iconPose: "rest",
  zoneScale: 1,
  zoneFast: false,
  dropOpacity: 1,
  filesShown: false,
  filesGone: false,
  buttonShown: false,
  pressed: false,
  showProgress: false,
  progress: 0,
  snap: false,
  learnIndex: 0,
  podcast: 0,
  podcastPlaying: false,
  notesShown: 0,
  picked: null,
  revealed: false,
  pressingChoice: null,
  typed: "",
  blankDone: false,
  flipped: false,
};

const CURSOR_START: Cursor = {
  x: 520,
  y: 430,
  show: false,
  pressed: false,
  snap: true,
};
const CURSOR_SIZE = 20;
const CURSOR_VIEWBOX = 24;
// Tip of the arrow path, used as the click hotspot.
const CURSOR_TIP_X = 5.5;
const CURSOR_TIP_Y = 2.85;
const CURSOR_HOTSPOT_X = (CURSOR_TIP_X / CURSOR_VIEWBOX) * CURSOR_SIZE;
const CURSOR_HOTSPOT_Y = (CURSOR_TIP_Y / CURSOR_VIEWBOX) * CURSOR_SIZE;

class Cancelled extends Error {
  constructor() {
    super("cancelled");
    this.name = "Cancelled";
  }
}

function clock(totalSeconds: number) {
  const seconds = Math.max(0, Math.round(totalSeconds));
  return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
}

function iconTransform(index: number, pose: IconPose) {
  if (pose === "lift") {
    return `translateX(${LIFT_X[index]}px) rotate(${LIFT_R[index]}deg) scale(1.15)`;
  }
  if (pose === "fall") return "translateX(0px) rotate(0deg) scale(0)";
  return "translateX(0px) rotate(0deg) scale(1)";
}

function rowMotion(index: number, demo: Demo): CSSProperties {
  const shown = demo.filesShown && !demo.filesGone;
  return {
    opacity: shown ? 1 : 0,
    transform: `translateY(${shown ? ROW_Y[index] : 0}px) scale(${shown ? 1 : 0.95})`,
    transition: demo.snap
      ? "none"
      : demo.filesGone
        ? "opacity 160ms ease, transform 160ms ease"
        : `opacity 360ms ease ${index * 40}ms, transform 360ms cubic-bezier(.4,0,.2,1) ${index * 40}ms`,
  };
}

export function HeroDemo() {
  const rootRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [demo, setDemo] = useState<Demo>(INITIAL);
  const [cursor, setCursor] = useState<Cursor>(CURSOR_START);
  const [shift, setShift] = useState(0);
  const cursorRef = useRef(cursor);
  const [isVisible, setIsVisible] = useState(true);
  const running = isVisible;
  const runningRef = useRef(running);

  useEffect(() => {
    runningRef.current = running;
    if (running) return;
    const animations = (
      rootRef.current?.getAnimations({ subtree: true }) ?? []
    ).filter((animation) => animation.playState === "running");
    animations.forEach((animation) => animation.pause());
    return () => animations.forEach((animation) => animation.play());
  }, [running]);

  useEffect(() => {
    const frame = frameRef.current;
    const stage = stageRef.current;
    if (!frame || !stage) return;
    // A numeric scale also works in browsers without CSS length division.
    const resize = new ResizeObserver(([entry]) => {
      stage.style.transform = `scale(${Math.min(entry.contentRect.width / 600, entry.contentRect.height / 500)})`;
    });
    resize.observe(frame);
    return () => resize.disconnect();
  }, []);

  useEffect(() => {
    let inView = true;
    const updateVisibility = () => setIsVisible(inView && !document.hidden);
    const observer = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        updateVisibility();
      },
      { threshold: 0.15 },
    );
    if (rootRef.current) observer.observe(rootRef.current);
    document.addEventListener("visibilitychange", updateVisibility);
    updateVisibility();
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", updateVisibility);
    };
  }, []);

  useEffect(() => {
    const root = scrollerRef.current;
    const card = cardRefs.current[demo.learnIndex];
    if (!root || !card) return;
    const y = -(card.offsetTop - root.clientHeight / 2 + card.offsetHeight / 2);
    setShift(y);
  }, [demo.learnIndex]);

  useEffect(() => {
    const token = { cancelled: false };
    const pending = new Set<() => void>();

    // Count only time spent playing, so every scene resumes where it paused.
    function wait(ms: number) {
      return new Promise<void>((resolve, reject) => {
        if (token.cancelled) {
          reject(new Cancelled());
          return;
        }
        let remaining = ms;
        let previous = performance.now();
        let frame = 0;
        const cancel = () => {
          window.cancelAnimationFrame(frame);
          pending.delete(cancel);
          reject(new Cancelled());
        };
        const tick = (now: number) => {
          if (token.cancelled) return cancel();
          if (runningRef.current) remaining -= Math.min(now - previous, 64);
          previous = now;
          if (remaining <= 0) {
            pending.delete(cancel);
            resolve();
          } else {
            frame = window.requestAnimationFrame(tick);
          }
        };
        pending.add(cancel);
        frame = window.requestAnimationFrame(tick);
      });
    }

    function update(fn: (current: Demo) => Demo) {
      if (!token.cancelled) setDemo(fn);
    }

    function moveCursor(partial: Partial<Cursor>) {
      if (token.cancelled) return;
      const next = { ...cursorRef.current, ...partial };
      cursorRef.current = next;
      setCursor(next);
    }

    function pointOf(el: HTMLElement) {
      const stage = stageRef.current;
      if (!stage) return { x: 0, y: 0 };
      const target = el.getBoundingClientRect();
      const origin = stage.getBoundingClientRect();
      const scale = origin.width / stage.offsetWidth || 1;
      return {
        x:
          (target.left - origin.left + target.width / 2) / scale -
          CURSOR_HOTSPOT_X,
        y:
          (target.top - origin.top + target.height / 2) / scale -
          CURSOR_HOTSPOT_Y,
      };
    }

    function find(selector: string) {
      const el = stageRef.current?.querySelector(selector);
      return el instanceof HTMLElement ? el : null;
    }

    async function approachAndClick(el: HTMLElement, onDown?: () => void) {
      const point = pointOf(el);
      moveCursor({
        x: point.x + 110,
        y: point.y + 64,
        show: false,
        pressed: false,
        snap: true,
      });
      await wait(40);
      moveCursor({ show: true, snap: false });
      await wait(50);
      moveCursor({ x: point.x, y: point.y });
      await wait(620);
      moveCursor({ pressed: true });
      onDown?.();
      await wait(110);
      moveCursor({ pressed: false });
      await wait(140);
    }

    async function hideCursor() {
      moveCursor({ show: false, pressed: false });
      await wait(180);
    }

    async function playGenerate() {
      update((current) => ({
        ...INITIAL,
        scene: current.scene,
        learnIndex: current.learnIndex,
        podcast: current.podcast,
        podcastPlaying: false,
        notesShown: current.notesShown,
        picked: current.picked,
        revealed: current.revealed,
        typed: current.typed,
        blankDone: current.blankDone,
        flipped: current.flipped,
        snap: true,
      }));
      await wait(50);
      update((current) => ({ ...current, snap: false, scene: "generate" }));
      await wait(650);

      update((current) => ({ ...current, iconPose: "lift" }));
      await wait(400);
      update((current) => ({
        ...current,
        iconPose: "fall",
        zoneScale: 1.06,
        zoneFast: false,
      }));
      await wait(560);
      update((current) => ({ ...current, zoneScale: 1.03, zoneFast: true }));
      await wait(120);
      update((current) => ({ ...current, zoneScale: 1 }));
      await wait(160);

      update((current) => ({
        ...current,
        dropOpacity: 0,
        filesShown: true,
        buttonShown: true,
      }));
      await wait(720);

      const button = find("[data-aim='generate']");
      if (button) {
        const point = pointOf(button);
        moveCursor({
          x: point.x + 170,
          y: point.y + 70,
          show: false,
          pressed: false,
          snap: true,
        });
        await wait(40);
        moveCursor({ show: true, snap: false });
        await wait(60);
        moveCursor({ x: point.x, y: point.y });
        await wait(640);
        moveCursor({ pressed: true });
        update((current) => ({ ...current, pressed: true }));
        await wait(280);
        moveCursor({ pressed: false });
        update((current) => ({ ...current, pressed: false }));
        await wait(120);
        moveCursor({
          x: point.x + 90,
          y: point.y - 48,
          show: false,
          pressed: false,
        });
      }

      await wait(200);
      update((current) => ({
        ...current,
        filesGone: true,
        buttonShown: false,
        showProgress: true,
        progress: 0,
      }));
      await wait(50);
      update((current) => ({ ...current, progress: 100 }));
      await wait(1450);
    }

    async function playLearn() {
      update((current) => ({
        ...current,
        learnIndex: 0,
        podcast: 0,
        podcastPlaying: false,
        notesShown: 0,
        picked: null,
        revealed: false,
        pressingChoice: null,
        typed: "",
        blankDone: false,
        flipped: false,
        snap: true,
      }));
      await wait(50);
      update((current) => ({ ...current, snap: false, scene: "learn" }));
      await wait(520);
      for (let line = 1; line <= NOTES.length; line += 1) {
        update((current) => ({ ...current, notesShown: line }));
        await wait(330);
      }
      await wait(1000);

      update((current) => ({ ...current, learnIndex: 1 }));
      await wait(920);
      const play = find("[data-aim='play']");
      if (play)
        await approachAndClick(play, () => {
          update((current) => ({ ...current, podcastPlaying: true }));
        });
      await hideCursor();
      for (let step = 1; step <= 40; step += 1) {
        update((current) => ({
          ...current,
          podcast: step / 10 / PODCAST_SECONDS,
        }));
        await wait(100);
      }
      update((current) => ({ ...current, podcastPlaying: false }));
      await wait(280);

      update((current) => ({ ...current, learnIndex: 2 }));
      await wait(920);
      const choice = find("[data-aim='choice-1']");
      if (choice) {
        await approachAndClick(choice, () => {
          update((current) => ({ ...current, pressingChoice: CORRECT_CHOICE }));
        });
      }
      update((current) => ({
        ...current,
        pressingChoice: null,
        picked: CORRECT_CHOICE,
      }));
      await wait(160);
      update((current) => ({ ...current, revealed: true }));
      await wait(1000);
      await hideCursor();

      update((current) => ({ ...current, learnIndex: 3 }));
      await wait(920);
      const blank = find("[data-aim='blank']");
      if (blank) await approachAndClick(blank);
      await hideCursor();
      for (let step = 1; step <= BLANK_ANSWER.length; step += 1) {
        const typed = BLANK_ANSWER.slice(0, step);
        update((current) => ({ ...current, typed }));
        await wait(48);
      }
      update((current) => ({ ...current, blankDone: true }));
      await wait(720);

      update((current) => ({ ...current, learnIndex: 4 }));
      await wait(920);
      const card = find("[data-aim='flashcard']");
      if (card) await approachAndClick(card);
      update((current) => ({ ...current, flipped: true }));
      await hideCursor();
      await wait(2000);
    }

    async function loop() {
      setCursor(CURSOR_START);
      cursorRef.current = CURSOR_START;

      while (!token.cancelled) {
        await playGenerate();
        await playLearn();
      }
    }

    loop().catch((error: unknown) => {
      if (!(error instanceof Cancelled)) throw error;
    });

    return () => {
      token.cancelled = true;
      pending.forEach((cancel) => cancel());
    };
  }, []);

  const iconEase = demo.snap
    ? "none"
    : "transform 360ms cubic-bezier(.22,1,.36,1), opacity 280ms ease";
  const rowY =
    demo.iconPose === "lift" ? -36 : demo.iconPose === "fall" ? 168 : 0;

  return (
    <div
      ref={rootRef}
      className="hero-demo relative mx-auto w-full min-w-0 lg:ml-auto lg:w-full"
      data-paused={!running}
      role="group"
      aria-label="Richard product demo"
    >
      <div className="hero-demo-panel relative flex aspect-[6/5] flex-col overflow-hidden rounded-2xl border border-[#ded7e8] bg-[#fcfbfe] shadow-[0_24px_70px_rgba(65,38,94,0.13)]">
        <div className="min-h-0 flex-1 p-2.5 sm:p-3">
          <div
            ref={frameRef}
            className="hero-demo-frame relative h-full w-full overflow-hidden rounded-lg bg-white"
            role="img"
            aria-label="A sample lecture becomes organized notes, a playing podcast, a correctly answered quiz, and a flipping flashcard."
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                ref={stageRef}
                className="hero-demo-stage relative h-[500px] w-[600px] shrink-0"
              >
                <div
                  className="absolute inset-0"
                  style={{
                    opacity: demo.scene === "generate" ? 1 : 0,
                    transform:
                      demo.scene === "generate"
                        ? "translateY(0)"
                        : "translateY(-18px)",
                    transition: demo.snap
                      ? "none"
                      : "opacity 400ms ease, transform 500ms ease",
                  }}
                >
                  <div
                    className="absolute inset-0 flex items-center justify-center px-8"
                    style={{
                      opacity: demo.dropOpacity,
                      transition: demo.snap ? "none" : "opacity 300ms ease",
                    }}
                  >
                    <div className="relative w-full max-w-[30rem]">
                      <div
                        className="absolute bottom-full left-1/2 z-20 mb-4 flex items-start justify-center gap-4"
                        style={{
                          transform: `translateX(-50%) translateY(${rowY}px)`,
                          transition: iconEase,
                        }}
                      >
                        {FILES.map((file, index) => (
                          <div
                            key={file.id}
                            className={`flex h-16 w-16 items-center justify-center rounded-2xl border border-white/80 shadow-[0_10px_24px_rgba(15,23,42,0.08)] ${file.tint}`}
                            style={{
                              transform: iconTransform(index, demo.iconPose),
                              opacity: demo.iconPose === "fall" ? 0 : 1,
                              transition: demo.snap
                                ? "none"
                                : `transform 360ms cubic-bezier(.22,1,.36,1) ${index * 65}ms, opacity 280ms ease ${index * 65}ms`,
                            }}
                          >
                            <Glyph kind={file.kind} className="h-8 w-8" />
                          </div>
                        ))}
                      </div>
                      <div
                        className="w-full"
                        style={{
                          transform: `scale(${demo.zoneScale})`,
                          transition: demo.snap
                            ? "none"
                            : `transform ${demo.zoneFast ? 100 : 360}ms ease-out`,
                        }}
                      >
                        <div className="flex h-[248px] w-full flex-col items-center justify-center gap-3 rounded-[28px] border-2 border-dashed border-[#dbdbda] bg-[#f9f9f9] shadow-sm">
                          <UploadIcon />
                          <div className="flex flex-col items-center gap-1">
                            <span className="text-lg font-semibold text-[#252525]">
                              Drop files here
                            </span>
                            <span className="text-sm text-[#888888]">
                              PDFs, videos, and recordings
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center px-8">
                    <div className="flex w-full max-w-[30rem] flex-col items-center gap-6">
                      <div className="relative h-[248px] w-full">
                        {FILES.map((file, index) => (
                          <div
                            key={file.id}
                            className="absolute inset-x-0 top-1/2 z-20 mt-[-28px] grid h-14 grid-cols-[auto_1fr] items-center gap-3 rounded-xl border border-[#dbdbda] bg-white px-4 shadow-sm"
                            style={rowMotion(index, demo)}
                          >
                            <Glyph kind={file.kind} className="h-6 w-6" />
                            <span className="truncate text-sm font-medium text-[#252525]">
                              {file.label}
                            </span>
                          </div>
                        ))}
                        <div
                          className="pointer-events-none absolute inset-x-0 top-1/2 z-40 flex -translate-y-1/2 flex-col items-center gap-3 px-6"
                          style={{
                            opacity: demo.showProgress ? 1 : 0,
                            transition: demo.snap
                              ? "none"
                              : "opacity 300ms ease",
                          }}
                        >
                          <div className="flex items-center gap-2">
                            <SparklesIcon />
                            <span className="text-sm font-semibold text-[#252525]">
                              Generating study materials...
                            </span>
                          </div>
                          <div className="w-full rounded-full bg-[#dbdbda] p-px">
                            <div
                              className="h-3.5 rounded-full border-x border-t border-b-[3px] border-[#b89be8] bg-[#d9c4ff]"
                              style={{
                                width: `${demo.progress}%`,
                                transition: demo.snap
                                  ? "none"
                                  : "width 1.2s linear",
                              }}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="w-full" style={buttonOpacity(demo)}>
                        <div
                          className="relative mt-0.5 w-full"
                          data-aim="generate"
                        >
                          <div
                            className={`relative z-20 flex w-full items-center justify-center rounded-2xl border border-[#2E1A54] bg-[#7848C0] px-6 py-3 text-lg font-semibold text-[#FAF7F0] shadow-[inset_0_0.8px_1.5px_rgba(253,252,252,0.3)] transition-transform duration-100 ${
                              demo.pressed
                                ? "translate-y-0"
                                : "-translate-y-0.5"
                            }`}
                          >
                            Generate study materials
                          </div>
                          <div className="absolute inset-0 z-10 rounded-2xl border border-[#2E1A54] bg-[#2E1A54]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  ref={scrollerRef}
                  className="absolute inset-0 overflow-hidden"
                  style={{
                    opacity: demo.scene === "learn" ? 1 : 0,
                    transition: demo.snap ? "none" : "opacity 400ms ease",
                    maskImage:
                      "linear-gradient(to bottom, transparent 0%, black 14%, black 86%, transparent 100%)",
                    WebkitMaskImage:
                      "linear-gradient(to bottom, transparent 0%, black 14%, black 86%, transparent 100%)",
                  }}
                >
                  <div
                    className="flex w-full flex-col gap-6 px-8"
                    style={{
                      transform: `translateY(${shift}px)`,
                      transition: demo.snap
                        ? "none"
                        : "transform 850ms cubic-bezier(.22,1,.36,1)",
                    }}
                  >
                    <div className="h-[220px] shrink-0" />
                    <DemoCard
                      active={demo.learnIndex === 0}
                      cardRef={(node) => {
                        cardRefs.current[0] = node;
                      }}
                    >
                      <Eyebrow>Notes</Eyebrow>
                      <h4 className="text-[17px] font-bold text-[#252525]">
                        How plants capture light
                      </h4>
                      <ul className="mt-3 space-y-2">
                        {NOTES.map((note, index) => (
                          <li
                            key={note}
                            className="flex gap-2 text-sm leading-relaxed text-[#6e6578]"
                            style={{
                              opacity: demo.notesShown > index ? 1 : 0,
                              transform:
                                demo.notesShown > index
                                  ? "translateY(0)"
                                  : "translateY(10px)",
                              transition: demo.snap
                                ? "none"
                                : "opacity 350ms ease, transform 350ms ease",
                            }}
                          >
                            <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#7848C0]" />
                            <span>{note}</span>
                          </li>
                        ))}
                      </ul>
                    </DemoCard>

                    <DemoCard
                      active={demo.learnIndex === 1}
                      cardRef={(node) => {
                        cardRefs.current[1] = node;
                      }}
                    >
                      <Eyebrow>Podcast</Eyebrow>
                      <div className="mb-5 flex items-center gap-4">
                        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-[#1a1a17]">
                          <Image
                            src="/logo.png"
                            alt=""
                            width={64}
                            height={64}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="truncate font-bold text-[#252525]">
                            Photosynthesis, explained
                          </h4>
                          <p className="mt-1 text-xs text-[#888888]">Richard</p>
                        </div>
                        <div
                          data-aim="play"
                          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#7848C0] text-white"
                        >
                          {demo.podcastPlaying ? <PauseIcon /> : <PlayIcon />}
                        </div>
                      </div>
                      <div
                        className="hero-demo-wave mb-4 flex h-12 items-center justify-center gap-1.5"
                        data-playing={demo.podcastPlaying}
                      >
                        {WAVE_HEIGHTS.map((height, index) => (
                          <span
                            key={index}
                            className="w-2.5 rounded-full bg-[#aa84de]"
                            style={{
                              height,
                              animationDelay: `${index * -0.13}s`,
                              animationDuration: `${0.65 + (index % 5) * 0.14}s`,
                            }}
                          />
                        ))}
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-[#dbdbda]">
                        <div
                          className="h-full rounded-full bg-[#7848C0]"
                          style={{
                            width: `${demo.podcast * 100}%`,
                            transition: demo.snap
                              ? "none"
                              : "width 100ms linear",
                          }}
                        />
                      </div>
                      <div className="mt-2 flex justify-between font-mono text-xs text-[#888888] tabular-nums">
                        <span>{clock(PODCAST_SECONDS * demo.podcast)}</span>
                        <span>{clock(PODCAST_SECONDS)}</span>
                      </div>
                    </DemoCard>

                    <DemoCard
                      active={demo.learnIndex === 2}
                      cardRef={(node) => {
                        cardRefs.current[2] = node;
                      }}
                    >
                      <Eyebrow>Quiz</Eyebrow>
                      <h4 className="mb-4 text-[17px] font-bold leading-snug text-[#252525]">
                        Where does photosynthesis happen?
                      </h4>
                      <div className="flex flex-col gap-2.5">
                        {QUIZ_CHOICES.map((choice, index) => {
                          const correct =
                            demo.revealed && index === CORRECT_CHOICE;
                          const selected = demo.picked === index;
                          const pressing = demo.pressingChoice === index;
                          return (
                            <div
                              key={choice}
                              data-aim={`choice-${index}`}
                              className="relative mt-0.5"
                            >
                              <div
                                className={`relative z-20 flex h-10 w-full items-center rounded-xl border px-4 text-sm font-medium transition-transform duration-100 ${
                                  pressing
                                    ? "translate-y-0"
                                    : "-translate-y-0.5"
                                } ${
                                  correct
                                    ? "border-[#7fbf7e] bg-[#afdfae] text-[#1a1a17]"
                                    : selected
                                      ? "border-[#dbdbda] bg-[#f2f2f2] text-[#252525]"
                                      : "border-[#dbdbda] bg-white text-[#252525]"
                                }`}
                              >
                                <span>{choice}</span>
                                {correct ? <CheckIcon /> : null}
                              </div>
                              <div
                                className={`absolute inset-0 rounded-xl ${
                                  correct ? "bg-[#92d290]" : "bg-[#dbdbda]"
                                }`}
                              />
                            </div>
                          );
                        })}
                      </div>
                      <div
                        className="mt-3 flex items-center gap-2 text-xs font-medium text-[#3f7d3e]"
                        style={{
                          opacity: demo.revealed ? 1 : 0,
                          transform: demo.revealed
                            ? "translateY(0)"
                            : "translateY(5px)",
                          transition:
                            "opacity 250ms ease, transform 250ms ease",
                        }}
                      >
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#e5f5e4]">
                          ✓
                        </span>
                        You got it! Chloroplasts capture sunlight.
                      </div>
                    </DemoCard>

                    <DemoCard
                      active={demo.learnIndex === 3}
                      cardRef={(node) => {
                        cardRefs.current[3] = node;
                      }}
                    >
                      <Eyebrow>Check in</Eyebrow>
                      <p className="text-[17px] font-semibold leading-relaxed text-[#252525]">
                        The light-catching pigment is{" "}
                        <span
                          data-aim="blank"
                          className={`mx-1 inline-block min-w-[8.5rem] border-b-2 px-1 text-center ${
                            demo.blankDone
                              ? "border-[#7fbf7e] text-[#3f7d3e]"
                              : "border-dashed border-[#dbdbda] text-[#7848C0]"
                          }`}
                        >
                          {demo.typed || "\u00a0"}
                          {demo.learnIndex === 3 && !demo.blankDone ? (
                            <span className="ml-px inline-block animate-pulse text-[#7848C0]">
                              |
                            </span>
                          ) : null}
                        </span>
                        .
                      </p>
                    </DemoCard>

                    <DemoCard
                      active={demo.learnIndex === 4}
                      cardRef={(node) => {
                        cardRefs.current[4] = node;
                      }}
                    >
                      <div className="hero-demo-flashcard" data-aim="flashcard">
                        <div
                          className="hero-demo-flashcard-inner"
                          data-flipped={demo.flipped}
                        >
                          <div className="hero-demo-flashcard-face">
                            <Eyebrow>Flashcard · 1 of 12</Eyebrow>
                            <p className="text-[20px] font-bold leading-snug text-[#252525]">
                              What do plants give off during photosynthesis?
                            </p>
                            <p className="mt-5 text-xs text-[#888888]">
                              Tap to flip ↻
                            </p>
                          </div>
                          <div className="hero-demo-flashcard-face hero-demo-flashcard-back">
                            <Eyebrow>That&apos;s right</Eyebrow>
                            <p className="text-[36px] font-bold text-[#7848C0]">
                              Oxygen
                            </p>
                            <p className="mt-2 text-sm leading-relaxed text-[#6e6578]">
                              A little sunlight. A breath of fresh air.
                            </p>
                          </div>
                        </div>
                      </div>
                    </DemoCard>
                    <div className="h-[220px] shrink-0" />
                  </div>
                </div>

                <div
                  aria-hidden
                  className="pointer-events-none absolute left-0 top-0 z-50"
                  style={{
                    transform: `translate(${cursor.x}px, ${cursor.y}px)`,
                    opacity: cursor.show ? 1 : 0,
                    transition: cursor.snap
                      ? "none"
                      : "transform 600ms cubic-bezier(.22,1,.36,1), opacity 150ms linear",
                  }}
                >
                  <div
                    style={{
                      transform: `scale(${cursor.pressed ? 0.84 : 1}) rotate(${cursor.pressed ? -12 : 0}deg)`,
                      transformOrigin: `${(CURSOR_TIP_X / CURSOR_VIEWBOX) * 100}% ${(CURSOR_TIP_Y / CURSOR_VIEWBOX) * 100}%`,
                      transition: "transform 100ms ease-out",
                    }}
                  >
                    <CursorIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex min-h-12 shrink-0 items-center justify-between gap-2 border-t border-[#eee9f4] px-4 py-2.5 sm:px-5">
          <p className="flex min-w-0 items-center gap-2 text-[11px] font-medium text-[#81718f]">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#a584cf]" />
            <span className="truncate">
              {demo.scene === "generate"
                ? "Drop it in. We’ll take it from here."
                : SCENES[demo.learnIndex]}
            </span>
          </p>
          <div className="flex shrink-0 gap-1.5" aria-hidden>
            {[0, 1, 2, 3, 4, 5].map((step) => (
              <span
                key={step}
                className="h-1 w-1 rounded-full transition-colors duration-500"
                style={{
                  backgroundColor:
                    step ===
                    (demo.scene === "generate" ? 0 : demo.learnIndex + 1)
                      ? "#7848c0"
                      : "#e1d9eb",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function buttonOpacity(demo: Demo): CSSProperties {
  const shown = demo.buttonShown && !demo.filesGone;
  return {
    opacity: shown ? 1 : 0,
    transition: demo.snap
      ? "none"
      : shown
        ? "opacity 240ms ease 120ms"
        : "opacity 160ms ease",
  };
}

function Eyebrow({ children }: { children: string }) {
  return (
    <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8a6bb9]">
      {children}
    </p>
  );
}

function DemoCard({
  active,
  cardRef,
  children,
}: {
  active: boolean;
  cardRef: (node: HTMLDivElement | null) => void;
  children: ReactNode;
}) {
  return (
    <div
      ref={cardRef}
      className={`origin-center rounded-2xl border border-[#e7e7e6] bg-white p-6 shadow-[0_2px_0_#dbdbda] transition-all duration-500 ${
        active ? "scale-100 opacity-100" : "scale-95 opacity-40"
      }`}
    >
      {children}
    </div>
  );
}

function Glyph({ kind, className }: { kind: FileKind; className?: string }) {
  const cls = className ?? "h-6 w-6";
  if (kind === "doc") {
    return (
      <svg viewBox="0 0 32 32" className={cls} aria-hidden>
        <rect x="6" y="3" width="20" height="26" rx="3" fill="#2F6FED" />
        <path d="M18 3.5h.2L26 11H19a1 1 0 0 1-1-1V3.5z" fill="#9CC0FF" />
        <path
          d="M11 16.5h10M11 20.5h10M11 24.5h6"
          stroke="white"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (kind === "pdf") {
    return (
      <svg viewBox="0 0 32 32" className={cls} aria-hidden>
        <rect x="6" y="3" width="20" height="26" rx="3" fill="#E11D48" />
        <path d="M18 3.5h.2L26 11H19a1 1 0 0 1-1-1V3.5z" fill="#FDA4AF" />
        <text
          x="16"
          y="22"
          textAnchor="middle"
          fontSize="7"
          fontWeight="700"
          fill="white"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
        >
          PDF
        </text>
      </svg>
    );
  }
  if (kind === "video") {
    return (
      <svg viewBox="0 0 32 32" className={cls} aria-hidden>
        <rect x="3" y="7" width="26" height="18" rx="5" fill="#FF3B30" />
        <path d="M13.5 12.2v7.6l6.4-3.8-6.4-3.8z" fill="white" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 32 32" className={cls} aria-hidden>
      <rect x="11" y="4" width="10" height="15" rx="5" fill="#7C5CBF" />
      <path
        d="M8.5 15.5a7.5 7.5 0 0 0 15 0"
        fill="none"
        stroke="#7C5CBF"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M16 23v4M12 27h8"
        fill="none"
        stroke="#7C5CBF"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function UploadIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-10 w-10 text-[#888888]"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  );
}

function SparklesIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5 text-[#7848C0]"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M9.9 15.5A2 2 0 0 0 8.5 14.1L2.4 12.5a.5.5 0 0 1 0-1L8.5 9.9A2 2 0 0 0 9.9 8.5l1.6-6.1a.5.5 0 0 1 1 0l1.6 6.1a2 2 0 0 0 1.4 1.4l6.1 1.6a.5.5 0 0 1 0 1l-6.1 1.6a2 2 0 0 0-1.4 1.4l-1.6 6.1a.5.5 0 0 1-1 0z" />
      <path d="M20 3v4M22 5h-4M4 17v2M5 18H3" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="ml-0.5 h-4 w-4" aria-hidden>
      <path d="M8 5.5v13l11-6.5-11-6.5z" fill="currentColor" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="ml-auto h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function CursorIcon() {
  return (
    <svg
      viewBox={`0 0 ${CURSOR_VIEWBOX} ${CURSOR_VIEWBOX}`}
      width={CURSOR_SIZE}
      height={CURSOR_SIZE}
      className="drop-shadow-sm"
      aria-hidden
    >
      <path
        d="M5.5 3.2v17.6c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87a.5.5 0 0 0 .35-.85L6.35 2.85a.5.5 0 0 0-.85.35Z"
        fill="white"
        stroke="#252525"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="currentColor"
      aria-hidden
    >
      <rect x="6" y="5" width="4" height="14" rx="1" />
      <rect x="14" y="5" width="4" height="14" rx="1" />
    </svg>
  );
}
