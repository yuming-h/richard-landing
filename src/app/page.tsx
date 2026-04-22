import Image from "next/image";
import Link from "next/link";

const iosUrl = "https://apps.apple.com/us/app/richard-ai-notes-and-study/id6752790082";
const androidUrl = "https://play.google.com/store/apps/details?id=com.yuming.richard";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-ink">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-[var(--hairline)]">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-10">
          <nav className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="h-10 w-10 rounded-full overflow-hidden bg-[var(--surface)] border border-[var(--hairline)]">
                <Image
                  src="/richard-character/richard-no-background.png"
                  alt="Richard mascot"
                  width={120}
                  height={120}
                  className="h-full w-full object-cover object-top scale-[1.2] origin-top"
                />
              </div>
              <span className="text-[22px] leading-none tracking-tight">
                Richard
              </span>
            </Link>
            <div className="hidden md:flex items-center gap-10 text-[13px] text-[var(--ink-muted)]">
              <a href="#features" className="hover:text-ink transition-colors">
                Features
              </a>
              <a href="#glimpses" className="hover:text-ink transition-colors">
                A closer look
              </a>
              <Link href="/support" className="hover:text-ink transition-colors">
                Support
              </Link>
            </div>
            <a
              href={iosUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-ink text-[var(--surface)] px-4 py-2 text-[13px] font-medium hover:opacity-90 transition-opacity"
            >
              Download
              <span aria-hidden className="text-[var(--surface)]/70">→</span>
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-10 pt-16 lg:pt-24 pb-20 lg:pb-28">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-2 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.18em] text-[var(--ink-subtle)]">
                <span className="h-px w-8 bg-[var(--ink-subtle)]/60" />
                AI study companion
              </div>

              <h1 className="mt-6 text-[44px] leading-[1.02] sm:text-[60px] md:text-[76px] lg:text-[88px] tracking-[-0.02em] text-ink">
                Meet <em className="italic text-[var(--accent-soft)]">Richard</em>.
              </h1>

              <p className="mt-8 max-w-[520px] text-[17px] leading-[1.6] text-[var(--ink-muted)]">
                Richard is your smartest tutor and study assistant. Get instant notes
                and interactive study materials to learn from.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                <a
                  href={iosUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-ink text-[var(--surface)] px-6 py-3.5 text-[14px] font-medium hover:opacity-90 transition-opacity"
                >
                  <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
                  </svg>
                  Download for iOS
                </a>
                <a
                  href={androidUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 rounded-full border border-[var(--hairline)] bg-transparent text-ink px-6 py-3.5 text-[14px] font-medium hover:bg-[var(--surface)] transition-colors"
                >
                  <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  Get it on Android
                </a>
              </div>

            </div>

            <div className="lg:col-span-5 relative">
              <div aria-hidden className="absolute inset-0 -z-10">
                <div className="absolute top-0 right-0 h-[240px] w-[240px] rounded-full bg-[var(--accent-soft)]/15 blur-3xl" />
                <div className="absolute bottom-0 left-0 h-[180px] w-[180px] rounded-full bg-[var(--hairline)]/70 blur-3xl" />
              </div>
              <div className="relative flex items-end justify-center lg:justify-end lg:-translate-x-20">
                <div className="relative z-10 w-[70%] max-w-[440px] -translate-x-8 translate-y-12">
                  <Image
                    src="/richard-character/richard-standing.png"
                    alt="Richard, the study companion mascot"
                    width={500}
                    height={680}
                    className="w-full h-auto drop-shadow-[0_20px_40px_rgba(26,26,23,0.12)]"
                  />
                </div>
                <div className="relative z-0 w-[52%] max-w-[240px] -ml-28 lg:-ml-32">
                  <Image
                    src="/screenshots/iphone-notes.png"
                    alt="Richard app showing a Photosynthesis study note"
                    width={900}
                    height={1800}
                    priority
                    className="w-full h-auto drop-shadow-[0_24px_50px_rgba(26,26,23,0.15)]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by */}
      <section className="border-t border-b border-[var(--hairline)] bg-[var(--surface)]">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-10 py-5 lg:py-6">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--ink-subtle)] text-center mb-4">
            Trusted by students at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 sm:gap-x-14 lg:gap-x-20 gap-y-3">
            {SCHOOLS.map((s) => (
              <Image
                key={s.src}
                src={s.src}
                alt={s.alt}
                width={160}
                height={48}
                className={`${s.size} w-auto object-contain opacity-60 hover:opacity-90 transition-opacity grayscale`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-b border-[var(--hairline)]">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-10 py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.18em] text-[var(--ink-subtle)]">
                <span className="h-px w-8 bg-[var(--ink-subtle)]/60" />
                Capabilities
              </div>
              <h2 className="mt-5 text-[40px] sm:text-[52px] lg:text-[60px] leading-[1.05] tracking-[-0.015em]">
                The quiet power of a
                <br />
                <em className="italic text-[var(--accent-soft)]">well-kept</em> notebook.
              </h2>
              <p className="mt-6 max-w-md text-[16px] leading-[1.65] text-[var(--ink-muted)]">
                Six tools, one companion. Composed to help you move from
                listening, to understanding, to remembering.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="grid sm:grid-cols-2 border-t border-[var(--hairline)]">
                {FEATURES.map((f, i) => (
                  <div
                    key={f.title}
                    className={[
                      "p-8 lg:p-10 border-b border-[var(--hairline)]",
                      // right border on left column items (even indexes) on sm+
                      i % 2 === 0 ? "sm:border-r border-[var(--hairline)]" : "",
                    ].join(" ")}
                  >
                    <span className="text-[13px] italic text-[var(--ink-subtle)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-3 text-[24px] leading-snug tracking-tight">
                      {f.title}
                    </h3>
                    <p className="mt-3 text-[14.5px] leading-[1.6] text-[var(--ink-muted)]">
                      {f.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots / A closer look */}
      <section id="glimpses" className="bg-[var(--surface)]">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-10 py-20 lg:py-28">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <div className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.18em] text-[var(--ink-subtle)]">
                <span className="h-px w-8 bg-[var(--ink-subtle)]/60" />
                A closer look
              </div>
              <h2 className="mt-5 text-[40px] sm:text-[52px] leading-[1.05] tracking-[-0.015em] max-w-xl">
                Considered, not cluttered.
              </h2>
            </div>
            <p className="max-w-sm text-[15px] leading-[1.6] text-[var(--ink-muted)]">
              Every surface has been trimmed to its essentials. Study material
              belongs at the center — the interface stays out of the way.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
            {GLIMPSES.map((g, i) => (
              <figure
                key={g.src}
                className={[
                  "group",
                  i === 1 ? "md:translate-y-6" : "",
                ].join(" ")}
              >
                <div className="relative overflow-hidden rounded-[28px] bg-background border border-[var(--hairline)]">
                  <Image
                    src={g.src}
                    alt={g.caption}
                    width={600}
                    height={1300}
                    className="w-full h-auto"
                  />
                </div>
                <figcaption className="mt-4 flex items-baseline gap-3">
                  <span className="italic text-[13px] text-[var(--ink-subtle)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[14px] text-[var(--ink-muted)]">
                    {g.caption}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[var(--hairline)]">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-10 py-24 lg:py-32">
          <div className="relative rounded-[32px] bg-ink text-[var(--surface)] px-8 sm:px-14 py-16 sm:py-20 overflow-hidden">
            <div aria-hidden className="absolute inset-0 -z-0">
              <div className="absolute -top-20 -right-20 h-[380px] w-[380px] rounded-full bg-[var(--accent-soft)]/25 blur-3xl" />
              <div className="absolute -bottom-24 -left-10 h-[300px] w-[300px] rounded-full bg-[var(--surface)]/10 blur-3xl" />
            </div>
            <div className="relative max-w-2xl">
              <div className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.18em] text-[var(--surface)]/60">
                <span className="h-px w-8 bg-[var(--surface)]/40" />
                Begin
              </div>
              <h2 className="mt-5 text-[40px] sm:text-[56px] leading-[1.05] tracking-[-0.015em]">
                Study the <em className="italic">smart</em> way.
              </h2>
              <p className="mt-5 text-[16px] leading-[1.6] text-[var(--surface)]/75 max-w-lg">
                Preparing for exams, learning a new skill, or exploring a topic
                you love — Richard keeps company with the way you think.
              </p>
              <div className="mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href={iosUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[var(--surface)] text-ink px-6 py-3.5 text-[14px] font-medium hover:opacity-90 transition-opacity"
                >
                  <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
                  </svg>
                  Download for iOS
                </a>
                <a
                  href={androidUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 rounded-full border border-[var(--surface)]/25 text-[var(--surface)] px-6 py-3.5 text-[14px] font-medium hover:bg-[var(--surface)]/10 transition-colors"
                >
                  <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  Get it on Android
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--hairline)]">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-10 py-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-center gap-2.5">
              <Image
                src="/richard-character/richard-no-background.png"
                alt="Richard mascot"
                width={24}
                height={24}
                className="rounded-full"
              />
              <span className="text-[18px] leading-none">Richard</span>
              <span className="text-[12px] text-[var(--ink-subtle)] ml-3">
                © 2025
              </span>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-2 text-[13px] text-[var(--ink-muted)]">
              <Link href="/privacy" className="hover:text-ink transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-ink transition-colors">
                Terms
              </Link>
              <Link href="/support" className="hover:text-ink transition-colors">
                Support
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

const FEATURES = [
  {
    title: "Lectures, listened for you.",
    body: "Upload audio and Richard transcribes, highlights the turning points, and hands you the essentials.",
  },
  {
    title: "YouTube, distilled.",
    body: "Paste any link. Get structured notes you can revisit without scrubbing timelines.",
  },
  {
    title: "PDFs, patiently read.",
    body: "Textbooks and articles surface their ideas — not just their pages.",
  },
  {
    title: "Summaries, written in plain.",
    body: "Complex material explained in a tone that respects your time.",
  },
  {
    title: "A notebook that keeps itself.",
    body: "Your materials remain searchable, organized, quietly in order.",
  },
  {
    title: "Flashcards that remember for you.",
    body: "Quizzes and cards generated straight from your content — ready when you are.",
  },
] as const;

const GLIMPSES = [
  {
    src: "/screenshots/Simulator Screenshot - iPhone 16 Pro - 2025-09-24 at 19.24.36.png",
    caption: "The library — your materials, composed.",
  },
  {
    src: "/screenshots/Simulator Screenshot - iPhone 16 Pro - 2025-09-24 at 20.00.15.png",
    caption: "A note, arranged for reading.",
  },
  {
    src: "/screenshots/Simulator Screenshot - iPhone 16 Pro - 2025-09-24 at 20.25.43.png",
    caption: "Practice that keeps you honest.",
  },
] as const;

const SCHOOLS = [
  { src: "/school-logos/harvard.webp", alt: "Harvard University", size: "h-9 lg:h-11" },
  { src: "/school-logos/Yale-Logo.webp", alt: "Yale University", size: "h-9 lg:h-11" },
  { src: "/school-logos/mit.webp", alt: "Massachusetts Institute of Technology", size: "h-6 lg:h-7" },
  { src: "/school-logos/sanford.webp", alt: "Stanford University", size: "h-12 lg:h-14" },
  { src: "/school-logos/university-of-chicago.webp", alt: "University of Chicago", size: "h-12 lg:h-14" },
] as const;
