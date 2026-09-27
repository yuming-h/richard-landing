"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { getStartedUrlFromNavigator, webAppUrl } from "@/lib/app-links"

const SCROLL_RANGE = 250
const FULL_WIDTH = 1240
const COMPACT_WIDTH = 880

export function SiteHeader() {
  const barRef = useRef<HTMLDivElement>(null)
  const pillRef = useRef<HTMLDivElement>(null)
  const [startUrl, setStartUrl] = useState(webAppUrl)

  useEffect(() => {
    setStartUrl(getStartedUrlFromNavigator())
  }, [])

  useEffect(() => {
    let frame = 0

    const apply = () => {
      frame = 0
      const progress = Math.min(1, Math.max(0, window.scrollY / SCROLL_RANGE))
      const available = window.innerWidth - 32
      const full = Math.min(FULL_WIDTH, available)
      const compact = Math.min(COMPACT_WIDTH, available)
      const width = full - progress * (full - compact)
      if (barRef.current) barRef.current.style.maxWidth = `${Math.round(width)}px`
      if (pillRef.current) pillRef.current.style.opacity = String(progress)
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(apply)
    }

    apply()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 py-3">
      <div ref={barRef} className="relative w-full max-w-[1240px]">
        <div
          ref={pillRef}
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-full border border-[var(--hairline)] bg-white opacity-0 shadow-[0_10px_40px_rgba(46,26,84,0.1)]"
        />
        <nav className="relative z-10 flex h-16 items-center justify-between px-2 lg:px-6">
          <Link href="/" className="flex min-w-0 items-center gap-2.5">
            <Image
              src="/richard-character/richard-bust.png"
              alt=""
              width={44}
              height={48}
              priority
              className="h-12! w-auto!"
            />
            <span className="whitespace-nowrap text-[16px] leading-none tracking-tight sm:text-[18px] lg:text-[22px]">
              <span className="font-bold">Richard</span>
              <span className="hidden font-normal sm:inline"> AI Notes</span>
            </span>
          </Link>
          <a
            href={startUrl}
            target={startUrl === webAppUrl ? "_blank" : undefined}
            rel={startUrl === webAppUrl ? "noopener noreferrer" : undefined}
            onClick={(event) => {
              const url = getStartedUrlFromNavigator()
              if (url === startUrl) return
              event.preventDefault()
              if (url === webAppUrl) {
                window.open(url, "_blank", "noopener,noreferrer")
              } else {
                window.location.assign(url)
              }
            }}
            className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border-2 border-[var(--hairline)] bg-white px-3.5 py-2 text-sm font-semibold text-ink shadow-[0_2px_0_var(--hairline)] transition-all duration-150 hover:-translate-y-px hover:shadow-[0_3px_0_var(--hairline)] active:translate-y-[2px] active:shadow-none sm:gap-2 sm:px-6 sm:py-2.5 sm:text-base"
          >
            Get started
            <span aria-hidden>→</span>
          </a>
        </nav>
      </div>
    </header>
  )
}
