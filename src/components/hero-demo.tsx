"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import "./hero-demo.css";

const CHAPTERS = [
  {
    id: "sources",
    duration: 4800,
  },
  {
    id: "notes",
    duration: 4600,
  },
  {
    id: "podcast",
    duration: 5000,
  },
  {
    id: "quiz",
    duration: 4400,
  },
  {
    id: "cards",
    duration: 4600,
  },
] as const;
const LOOP_MS = CHAPTERS.reduce(
  (total, chapter) => total + chapter.duration,
  0,
);
const SOURCES = [
  {
    icon: "document",
    title: "Photosynthesis.pdf",
  },
  {
    icon: "audio",
    title: "Biology lecture",
  },
  {
    icon: "notes",
    title: "My class notes",
  },
] as const;
const ANSWERS = ["Mitochondria", "Chloroplasts", "Nucleus", "Ribosomes"];
const WAVE_HEIGHTS = [
  14, 24, 18, 36, 28, 44, 32, 20, 40, 52, 30, 46, 26, 36, 50, 22, 42, 30, 18,
  38, 26, 16,
];
type IconName =
  | "document"
  | "audio"
  | "notes"
  | "spark"
  | "arrow"
  | "check"
  | "cards"
  | "leaf";

function chapterAt(time: number) {
  let start = 0;
  for (let index = 0; index < CHAPTERS.length; index += 1) {
    const chapter = CHAPTERS[index];
    if (time < start + chapter.duration)
      return { index, elapsed: time - start };
    start += chapter.duration;
  }
  return { index: 0, elapsed: 0 };
}

export function HeroDemo() {
  const rootRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const runningRef = useRef(true);
  const [running, setRunning] = useState(true);
  const [time, setTime] = useState(0);
  const { index, elapsed } = chapterAt(time);
  const chapter = CHAPTERS[index];
  const sourceCount = Math.min(3, Math.floor(elapsed / 430));
  const assembling = elapsed >= 1500;
  const ready = elapsed >= 3200;
  const quizAnswered = elapsed >= 1800;
  const cardRevealed = elapsed >= 2000;

  useEffect(() => {
    const frame = frameRef.current;
    const stage = stageRef.current;
    if (!frame || !stage) return;
    const observer = new ResizeObserver(([entry]) => {
      stage.style.transform = `scale(${Math.min(entry.contentRect.width / 600, entry.contentRect.height / 500)})`;
    });
    observer.observe(frame);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let inView = true;
    const update = () => {
      const visible = inView && !document.hidden;
      runningRef.current = visible;
      setRunning(visible);
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        update();
      },
      { threshold: 0.15 },
    );
    if (rootRef.current) observer.observe(rootRef.current);
    document.addEventListener("visibilitychange", update);
    update();
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", update);
    };
  }, []);

  useEffect(() => {
    if (running) return;
    const animations = (
      rootRef.current?.getAnimations({ subtree: true }) ?? []
    ).filter((animation) => animation.playState === "running");
    animations.forEach((animation) => animation.pause());
    return () => animations.forEach((animation) => animation.play());
  }, [running]);

  useEffect(() => {
    let frame = 0;
    let clock = 0;
    let previous = performance.now();
    let lastPaint = previous;
    const tick = (now: number) => {
      // Only visible playback advances the story. Publish at 12fps; CSS handles
      // the smooth transitions and waveform without rerendering every frame.
      if (runningRef.current)
        clock = (clock + Math.min(now - previous, 100)) % LOOP_MS;
      previous = now;
      if (runningRef.current && now - lastPaint >= 80) {
        setTime(clock);
        lastPaint = now;
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div
      ref={rootRef}
      className="hero-demo"
      data-paused={!running}
      data-chapter={chapter.id}
      role="img"
      aria-label="Animated preview of Richard turning study materials into notes, a podcast, a quiz, and flashcards."
    >
      <div className="hero-demo-panel">
        <div ref={frameRef} className="hero-demo-frame">
          <div className="rd-stage-center">
            <div ref={stageRef} className="hero-demo-stage">
              <div
                className="rd-page"
                data-scene="sources"
                data-active={chapter.id === "sources"}
                aria-hidden={chapter.id !== "sources"}
              >
                <div className="rd-source-list">
                  <h3>Your study materials</h3>
                  {SOURCES.map((source, sourceIndex) => (
                    <div
                      key={source.title}
                      className="rd-source"
                      data-visible={
                        chapter.id === "sources" && sourceCount > sourceIndex
                      }
                    >
                      <span className="rd-source-icon">
                        <Icon name={source.icon} />
                      </span>
                      <span>{source.title}</span>
                      <span className="rd-source-check" data-visible={ready}>
                        <Icon name="check" />
                      </span>
                    </div>
                  ))}
                  <div className="rd-generation" data-visible={assembling}>
                    <span>
                      <Icon name={ready ? "check" : "spark"} />
                      {ready ? "Ready to learn" : "Creating your study kit…"}
                    </span>
                    <div className="rd-generation-track">
                      <i
                        style={{
                          transform: `scaleX(${Math.min(1, Math.max(0, (elapsed - 1500) / 1700))})`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="rd-page"
                data-scene="notes"
                data-active={chapter.id === "notes"}
                aria-hidden={chapter.id !== "notes"}
              >
                <div className="rd-card rd-notes">
                  <span className="rd-label">Notes</span>
                  <h3>How plants capture light</h3>
                  <ul>
                    {[
                      ["Chlorophyll", " absorbs energy from sunlight."],
                      ["Chloroplasts", " turn CO₂ and water into glucose."],
                      ["Oxygen", " is released along the way."],
                    ].map(([highlight, body], lineIndex) => (
                      <li
                        key={highlight}
                        className="rd-note-line"
                        data-visible={
                          chapter.id === "notes" &&
                          elapsed > 350 + lineIndex * 600
                        }
                      >
                        <span className="rd-bullet" />
                        <span>
                          <mark data-drawn={elapsed > 750 + lineIndex * 600}>
                            {highlight}
                          </mark>
                          {body}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div
                className="rd-page"
                data-scene="podcast"
                data-active={chapter.id === "podcast"}
                aria-hidden={chapter.id !== "podcast"}
              >
                <div className="rd-card rd-player">
                  <span className="rd-label">Podcast</span>
                  <h3>Photosynthesis, explained</h3>
                  <div
                    className="rd-wave"
                    data-playing={chapter.id === "podcast"}
                  >
                    {WAVE_HEIGHTS.map((height, bar) => (
                      <span
                        key={bar}
                        style={{
                          height,
                          animationDelay: `${bar * -0.17}s`,
                          animationDuration: `${0.65 + (bar % 5) * 0.16}s`,
                        }}
                      />
                    ))}
                  </div>
                  <div className="rd-player-bottom">
                    <span>
                      <i /> Now playing
                    </span>
                    <span>
                      0:0{Math.min(4, Math.floor(elapsed / 1000))}
                      <span className="rd-player-duration"> / 3:06</span>
                    </span>
                  </div>
                </div>
              </div>

              <div
                className="rd-page"
                data-scene="quiz"
                data-active={chapter.id === "quiz"}
                aria-hidden={chapter.id !== "quiz"}
              >
                <div className="rd-card rd-quiz">
                  <span className="rd-label">Quiz</span>
                  <h3>Where does photosynthesis happen?</h3>
                  <div className="rd-answers">
                    {ANSWERS.map((answer, choice) => (
                      <div
                        key={answer}
                        className="rd-answer"
                        data-selected={quizAnswered && choice === 1}
                      >
                        <span className="rd-answer-dot" />
                        {answer}
                        {quizAnswered && choice === 1 && <Icon name="check" />}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div
                className="rd-page"
                data-scene="cards"
                data-active={chapter.id === "cards"}
                aria-hidden={chapter.id !== "cards"}
              >
                <div className="rd-card rd-recall" data-revealed={cardRevealed}>
                  <span className="rd-label">Flashcard</span>
                  <h3>What do plants release during photosynthesis?</h3>
                  <div className="rd-card-answer">
                    <span>Oxygen.</span>
                    <Icon name="check" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon({ name }: { name: IconName }) {
  const paths: Record<IconName, ReactNode> = {
    document: (
      <>
        <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
        <path d="M14 3v6h6M8 13h8M8 17h5" />
      </>
    ),
    audio: (
      <>
        <path d="M12 3a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3Z" />
        <path d="M5 10v2a7 7 0 0 0 14 0v-2M12 19v3M8 22h8" />
      </>
    ),
    notes: (
      <>
        <path d="M4 4h16v16H4zM8 8h8M8 12h8M8 16h4" />
      </>
    ),
    spark: (
      <>
        <path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3ZM20 2v4M18 4h4" />
      </>
    ),
    arrow: (
      <>
        <path d="M4 12h16m-6-6 6 6-6 6" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    cards: (
      <>
        <rect x="7" y="3" width="14" height="17" rx="2" />
        <path d="m4 7-2 1 4 14 13-3M11 8h6M11 12h4" />
      </>
    ),
    leaf: (
      <>
        <path d="M20 3C7 2 2 8 5 16c8 5 15-1 15-13ZM4 21l10-11" />
      </>
    ),
  };
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {paths[name]}
    </svg>
  );
}
