import Image from "next/image";
import Link from "next/link";
import { DownloadButtons } from "@/components/download-buttons";
import { HeroDemo } from "@/components/hero-demo";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SiteHeader } from "@/components/site-header";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <div className="landing-canvas min-h-screen text-ink">
      <SiteHeader />
      <ScrollReveal />

      {/* Hero */}
      <section className="relative flex min-h-svh flex-col overflow-hidden">
        <div className="mx-auto flex w-full min-w-0 max-w-[1480px] flex-1 items-center px-6 pt-24 pb-4 lg:px-10 lg:pt-28">
          <div className="grid w-full min-w-0 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] lg:gap-10">
            <div className="mx-auto w-full min-w-0 max-w-[640px] text-center lg:mx-0 lg:max-w-none lg:text-left">
              <h1 className="hero-pop text-balance text-[2.65rem] font-bold leading-[1.05] tracking-[-0.02em] text-ink sm:text-[3.35rem] lg:text-[4.35rem]">
                Richard will tutor you on{" "}
                <span className="text-[#7848C0]">anything.</span>
              </h1>

              <p
                className="hero-pop mx-auto mt-6 max-w-[36rem] text-xl leading-[1.5] text-[var(--ink-muted)] sm:text-[1.45rem] lg:mx-0"
                style={{ animationDelay: "90ms" }}
              >
                Drop in a lecture, YouTube video, or PDF and I&apos;ll spit out
                notes, flashcards, and quizzes in seconds.
              </p>

              <div className="hero-pop mt-8 lg:mt-6" style={{ animationDelay: "170ms" }}>
                <DownloadButtons variant="light" />
              </div>
            </div>

            <div className="hero-pop min-w-0" style={{ animationDelay: "70ms" }}>
              <HeroDemo />
            </div>
          </div>
        </div>

        <div className="hero-pop pb-8" style={{ animationDelay: "260ms" }}>
          <div className="mx-auto max-w-[1480px] px-6 lg:px-10">
          <p className="mb-5 text-center text-base font-semibold uppercase tracking-widest text-[var(--ink-muted)] sm:text-lg">
            Trusted by Learners worldwide.
          </p>
          <div
            className="relative w-full overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            }}
          >
            <div className="logo-marquee flex w-max items-center">
              {[0, 1].map((copy) => (
                <ul
                  key={copy}
                  className="flex shrink-0 items-center gap-x-12 px-6"
                  aria-hidden={copy === 1}
                >
                  {LOGOS.map((logo) => (
                    <li key={`${copy}-${logo.src}`} className="flex items-center">
                      <img
                        src={logo.src}
                        alt={copy === 0 ? logo.alt : ""}
                        style={{ height: logo.height }}
                        className="w-auto shrink-0 object-contain grayscale brightness-0 opacity-50"
                      />
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Makes learning easy */}
      <section id="features" data-reveal className="scroll-mt-28">
        <div className="mx-auto flex max-w-[920px] flex-col items-center gap-12 px-6 pt-16 pb-4 sm:pt-20 sm:pb-6 lg:gap-14 lg:px-10 lg:pt-28 lg:pb-6">
          <h2
            data-pop
            className="text-center text-4xl font-bold leading-tight tracking-[-0.02em] text-ink sm:text-5xl"
          >
            Richard makes learning <span className="text-[#7848C0]">easy</span>.
          </h2>

          <div className="flex w-full flex-col items-center gap-12 lg:w-auto lg:flex-row lg:items-center lg:justify-center lg:gap-4">
            <div className="flex w-full max-w-md flex-col gap-10 lg:w-[380px] lg:max-w-none lg:shrink-0">
              {LEARNING_POINTS.map((point) => (
                <div
                  key={point.title}
                  data-pop
                  className="border-l-[6px] pl-5"
                  style={{
                    borderLeftColor:
                      "color-mix(in srgb, var(--ink) 80%, transparent)",
                  }}
                >
                  <h3 className="text-2xl font-bold leading-tight text-ink sm:text-3xl">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-ink sm:text-lg text-balance">
                    {point.body}
                  </p>
                </div>
              ))}
            </div>

            <div
              data-pop
              className="flex w-full justify-center overflow-x-clip lg:w-[360px] lg:shrink-0 lg:-ml-10"
            >
              <div className="relative flex w-full max-w-[300px] items-end justify-center pb-4 sm:max-w-[360px] sm:pb-12">
                <div className="relative z-10 w-[62%] max-w-[210px] translate-y-1 sm:w-[70%] sm:max-w-[320px] sm:-translate-x-6 sm:translate-y-9">
                  <Image
                    src="/richard-character/richard-standing.png"
                    alt="Richard, the study companion mascot"
                    width={500}
                    height={680}
                    className="h-auto w-full drop-shadow-[0_20px_40px_rgba(26,26,23,0.12)]"
                  />
                </div>
                <div className="relative z-0 -ml-8 w-[46%] max-w-[132px] sm:-ml-20 sm:w-[52%] sm:max-w-[180px] lg:-ml-24">
                  <Image
                    src="/screenshots/iphone-notes.png"
                    alt="Richard app showing a Photosynthesis study note"
                    width={996}
                    height={2726}
                    className="h-auto w-full drop-shadow-[0_24px_50px_rgba(26,26,23,0.15)]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots / A closer look */}
      <section id="glimpses" data-reveal>
        <div className="mx-auto max-w-[1240px] px-6 pt-6 pb-20 lg:px-10 lg:pt-8 lg:pb-28">
          <div data-pop className="mx-auto mb-14 max-w-3xl text-center lg:mb-16">
            <h2 className="text-4xl font-bold leading-tight tracking-[-0.02em] text-ink sm:text-5xl">
              Take a peek inside.
            </h2>
            <p className="mx-auto mt-5 max-w-sm text-[15px] leading-[1.6] text-[var(--ink-muted)]">
              Clean, simple, and built for getting stuff done. The app stays
              out of your way so you can focus on your work.
            </p>
          </div>

          <div className="glimpses-scroller -mx-6 flex snap-x snap-mandatory items-start gap-4 overflow-x-auto px-6 py-4 sm:mx-auto sm:w-full sm:max-w-[640px] sm:justify-center sm:gap-5 sm:overflow-visible sm:px-0">
            {GLIMPSES.map((g) => (
              <div key={g.src} data-pop="scale" className="iphone">
                <span className="iphone-btn iphone-btn-silent" aria-hidden />
                <span className="iphone-btn iphone-btn-vol-up" aria-hidden />
                <span className="iphone-btn iphone-btn-vol-down" aria-hidden />
                <span className="iphone-btn iphone-btn-power" aria-hidden />
                <div className="iphone-screen">
                  <Image
                    src={g.src}
                    alt={g.caption}
                    width={1206}
                    height={2622}
                    className="block h-auto w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* CTA */}
      <section data-reveal>
        <div className="mx-auto max-w-[1240px] px-6 lg:px-10 py-24 lg:py-32">
          <div
            data-pop
            className="relative overflow-hidden rounded-[32px] bg-ink px-5 py-14 text-[var(--surface)] sm:px-14 sm:py-20"
          >
            <div aria-hidden className="absolute inset-0 -z-0">
              <div className="absolute -top-20 -right-20 h-[380px] w-[380px] rounded-full bg-[var(--accent-soft)]/25 blur-3xl" />
              <div className="absolute -bottom-24 -left-10 h-[300px] w-[300px] rounded-full bg-[var(--surface)]/10 blur-3xl" />
            </div>
            <div className="relative mx-auto flex max-w-2xl flex-col items-center text-center lg:mx-0 lg:items-start lg:text-left">
              <h2 className="text-[40px] sm:text-[56px] leading-[1.05] tracking-[-0.015em]">
                Study smarter, not harder.
              </h2>
              <p className="mt-5 max-w-lg text-[16px] leading-[1.6] text-[var(--surface)]/75">
                Cramming for finals, picking up a new skill, or just nerding
                out on a topic you love? Richard&apos;s got your back.
              </p>
              <div className="mt-9 w-full lg:w-auto">
                <DownloadButtons variant="dark" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer data-reveal className="border-t border-[var(--hairline)]">
        <div data-pop className="mx-auto max-w-[1240px] px-6 lg:px-10 py-10">
          <div className="flex flex-col items-center gap-6 text-center md:flex-row md:items-center md:justify-between md:text-left">
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
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-[13px] text-[var(--ink-muted)] md:justify-end">
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

const LEARNING_POINTS = [
  {
    title: "Upload anything",
    body: "Lectures, PDFs, YouTube videos, or your own notes — Richard understands it all.",
  },
  {
    title: "Learn it the easy way",
    body: "Notes, quizzes, flashcards, and podcasts that make studying feel effortless.",
  },
] as const;

const GLIMPSES = [
  {
    src: "/screenshots/Simulator Screenshot - iPhone 16 Pro - 2025-09-24 at 19.24.36.png",
    caption: "Your library, all in one place.",
  },
  {
    src: "/screenshots/Simulator Screenshot - iPhone 16 Pro - 2025-09-24 at 20.00.15.png",
    caption: "Notes that are actually easy to read.",
  },
  {
    src: "/screenshots/Simulator Screenshot - iPhone 16 Pro - 2025-09-24 at 20.25.43.png",
    caption: "Quizzes to test if you really know it.",
  },
] as const;

const LOGOS = [
  { src: "/logos/google.svg", alt: "Google", height: 32 },
  { src: "/logos/harvard.svg", alt: "Princeton University", height: 32 },
  { src: "/logos/goldmansachs.svg", alt: "Goldman Sachs", height: 32 },
  { src: "/logos/mit.svg", alt: "MIT", height: 28 },
  { src: "/logos/mckinsey.svg", alt: "McKinsey", height: 32 },
  { src: "/logos/yale.svg", alt: "Stanford University", height: 52 },
  { src: "/logos/deloitte.svg", alt: "Deloitte", height: 28 },
  { src: "/logos/duke.svg", alt: "Duke University", height: 36 },
  { src: "/logos/northwestern.svg", alt: "University of Oxford", height: 40 },
  { src: "/logos/utaustin.svg", alt: "The University of Texas at Austin", height: 36 },
] as const;
