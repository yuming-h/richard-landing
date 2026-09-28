"use client";

import { useEffect, useRef, useState } from "react";

const TESTIMONIALS = [
  {
    title: "ok wait",
    quote:
      "Missed like three lectures and just dumped the recordings in. The notes were actually usable?? Crammed off them the night before and didn't fully bomb.",
    highlight: "didn't fully bomb",
    author: "Mia R.",
  },
  {
    title: "he will not stop talking",
    quote:
      "My prof talks way too fast and then goes off topic for like 20 minutes. I never know what I'm supposed to write down. This skipped the random stories and kept the test stuff.",
    highlight: "skipped the random stories",
    author: "Jaylen",
  },
  {
    title: "flashcards in bed",
    quote:
      "I never make flashcards because it takes forever. Uploaded the slides, did the deck in bed, and missed a couple I 100% would've blanked on.",
    highlight: "did the deck in bed",
    author: "Priya",
  },
  {
    title: "youtube never sticks",
    quote:
      "I watch a 40 min video, feel like I get it, and remember nothing the next day. Threw it in and the quiz made it obvious I was just zoning out.",
    highlight: "I was just zoning out",
    author: "Chris L.",
  },
  {
    title: "80 pages. no.",
    quote:
      "Prof dropped an 80 page pdf at 11pm. I was not reading that. The summary was short enough that I finished it on the bus, which is crazy.",
    highlight: "I was not reading that",
    author: "Elena V.",
  },
  {
    title: "midterm was tomorrow",
    quote:
      "Orgo in the morning and I had not started. Notes plus those practice questions carried me. Walked out feeling mid but I passed so whatever.",
    highlight: "I passed so whatever",
    author: "Noah",
  },
  {
    title: "sent it to the gc",
    quote:
      "Everyone had different notes and none of them made sense. We dumped the lecture in once and just passed the deck around. Beats four people arguing about whose notes are right.",
    highlight: "passed the deck around",
    author: "Diego",
  },
  {
    title: "on the walk over",
    quote:
      "Turned a chapter into the podcast and listened on the way to campus. I retained more than I do from highlighting, which is honestly embarrassing.",
    highlight: "honestly embarrassing",
    author: "Owen T.",
  },
  {
    title: "i cannot focus in class",
    quote:
      "I zone out constantly. Recording the lecture and reading the notes later is basically the only reason I know what happened in bio.",
    highlight: "what happened in bio",
    author: "Aisha",
  },
  {
    title: "texted it like a friend",
    quote:
      "When I'm stuck I just ask in the chat the way I'd text someone. It explains it without that textbook voice. I still double check tho.",
    highlight: "without that textbook voice",
    author: "Taylor M.",
  },
  {
    title: "thought it'd be wrong",
    quote:
      "I assumed it was gonna sound smart and mess up the details. First lecture came back pretty much right, even the stuff he scribbled on the board.",
    highlight: "pretty much right",
    author: "Riley",
  },
  {
    title: "the quiz humbled me",
    quote:
      "It asked stuff I would've sworn I knew and I got them wrong. Annoying. Also the only reason I didn't miss those on the actual quiz.",
    highlight: "I would've sworn I knew",
    author: "Sam K.",
  },
] as const;

function Quote({ text, highlight }: { text: string; highlight: string }) {
  const index = text.indexOf(highlight);
  if (index === -1) return <>“{text}”</>;

  return (
    <>
      “{text.slice(0, index)}
      <span className="rounded-sm bg-[#d8c6f3] px-1 font-medium text-ink">
        {highlight}
      </span>
      {text.slice(index + highlight.length)}”
    </>
  );
}

const LAST_PAGE = TESTIMONIALS.length - 1;

function pageFromScroll(el: HTMLElement) {
  const max = el.scrollWidth - el.clientWidth;
  if (max <= 1) return 0;
  return Math.min(LAST_PAGE, Math.max(0, Math.round((el.scrollLeft / max) * LAST_PAGE)));
}

function dotWidth(distance: number) {
  if (distance === 0) return "w-5";
  if (distance === 1) return "w-2";
  return "w-1";
}

export function Testimonials() {
  const scrollerRef = useRef<HTMLUListElement>(null);
  const drag = useRef({
    pointerId: -1,
    startX: 0,
    startScroll: 0,
    moved: false,
  });
  const [page, setPage] = useState(0);
  const pageRef = useRef(0);
  const targetRef = useRef<number | null>(null);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const sync = (event?: Event) => {
      const actual = pageFromScroll(el);
      const settled = event?.type === "scrollend" || actual === targetRef.current;
      if (targetRef.current !== null && !settled) return;
      targetRef.current = null;
      pageRef.current = actual;
      setPage(actual);
    };
    sync();
    el.addEventListener("scroll", sync, { passive: true });
    el.addEventListener("scrollend", sync);
    window.addEventListener("resize", sync);
    return () => {
      el.removeEventListener("scroll", sync);
      el.removeEventListener("scrollend", sync);
      window.removeEventListener("resize", sync);
    };
  }, []);

  const scrollToPage = (index: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const next = Math.min(LAST_PAGE, Math.max(0, index));
    targetRef.current = next;
    pageRef.current = next;
    setPage(next);
    const max = el.scrollWidth - el.clientWidth;
    el.scrollTo({
      left: LAST_PAGE === 0 ? 0 : (next / LAST_PAGE) * max,
      behavior: "smooth",
    });
  };

  return (
    <section id="testimonials" data-reveal className="scroll-mt-28 pb-8 lg:pb-10">
      <div data-pop className="mx-auto max-w-[1240px] px-6 lg:px-10">
        <h2 className="text-center text-4xl font-bold leading-tight tracking-[-0.02em] text-ink sm:text-5xl">
          What our users are saying.
        </h2>
        <p className="mt-3 text-center text-[17px] leading-6 text-[var(--ink-muted)]">
          4.8★ on the Play Store · 4.8★ on the App Store
        </p>
      </div>

      <ul
          ref={scrollerRef}
          aria-label="User testimonials"
          data-pop
          className="testimonials-scroller mt-12 flex cursor-grab gap-5 overflow-x-auto px-6 py-2 active:cursor-grabbing lg:mt-14 lg:px-10"
          onPointerDown={(event) => {
            targetRef.current = null;
            if (event.pointerType === "touch") return;
            const el = scrollerRef.current;
            if (!el) return;
            drag.current = {
              pointerId: event.pointerId,
              startX: event.clientX,
              startScroll: el.scrollLeft,
              moved: false,
            };
            el.setPointerCapture(event.pointerId);
          }}
          onPointerMove={(event) => {
            const el = scrollerRef.current;
            const state = drag.current;
            if (!el || state.pointerId !== event.pointerId) return;
            const delta = event.clientX - state.startX;
            if (Math.abs(delta) > 4) state.moved = true;
            el.scrollLeft = state.startScroll - delta;
          }}
          onPointerUp={(event) => {
            const el = scrollerRef.current;
            if (!el || drag.current.pointerId !== event.pointerId) return;
            drag.current.pointerId = -1;
            if (el.hasPointerCapture(event.pointerId)) {
              el.releasePointerCapture(event.pointerId);
            }
          }}
          onPointerCancel={() => {
            drag.current.pointerId = -1;
          }}
          onClickCapture={(event) => {
            if (!drag.current.moved) return;
            event.preventDefault();
            event.stopPropagation();
            drag.current.moved = false;
          }}
        >
          {TESTIMONIALS.map((item) => (
            <li
              key={`${item.author}-${item.title}`}
              className="w-[min(20rem,78vw)] shrink-0"
            >
              <article className="flex h-full flex-col gap-3 rounded-xl border border-[var(--hairline)] bg-white p-6 shadow-sm">
                <h3 className="text-base font-semibold text-ink">{item.title}</h3>
                <p className="flex-1 text-sm font-light leading-relaxed text-[var(--ink-muted)]">
                  <Quote text={item.quote} highlight={item.highlight} />
                </p>
                <p className="text-xs text-[var(--ink-muted)]">— {item.author}</p>
              </article>
            </li>
          ))}
      </ul>

      <div
        data-pop
        className="mx-auto mt-6 flex max-w-[1240px] items-center justify-between gap-4 px-6 lg:px-10"
      >
        <div
          className="flex items-center gap-1.5"
          role="progressbar"
          aria-valuemin={1}
          aria-valuemax={TESTIMONIALS.length}
          aria-valuenow={page + 1}
          aria-label="Testimonial position"
        >
          {TESTIMONIALS.map((item, index) => (
            <span
              key={`${item.author}-${item.title}`}
              className={`h-1.5 rounded-full bg-[var(--ink-muted)] transition-all duration-300 ${dotWidth(Math.abs(index - page))}`}
            />
          ))}
        </div>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            aria-label="Previous testimonials"
            disabled={page === 0}
            onClick={() => scrollToPage(pageRef.current - 1)}
            className="inline-flex size-9 items-center justify-center rounded-full border border-[var(--hairline)] bg-white text-ink shadow-[0_2px_0_0_var(--hairline)] transition hover:bg-[var(--surface-sunken)] active:translate-y-0.5 active:shadow-none disabled:pointer-events-none disabled:opacity-30"
          >
            <Chevron direction="left" />
          </button>
          <button
            type="button"
            aria-label="Next testimonials"
            disabled={page === LAST_PAGE}
            onClick={() => scrollToPage(pageRef.current + 1)}
            className="inline-flex size-9 items-center justify-center rounded-full border border-[var(--hairline)] bg-white text-ink shadow-[0_2px_0_0_var(--hairline)] transition hover:bg-[var(--surface-sunken)] active:translate-y-0.5 active:shadow-none disabled:pointer-events-none disabled:opacity-30"
          >
            <Chevron direction="right" />
          </button>
        </div>
      </div>
    </section>
  );
}

function Chevron({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className="size-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {direction === "left" ? <path d="m15 18-6-6 6-6" /> : <path d="m9 18 6-6-6-6" />}
    </svg>
  );
}
