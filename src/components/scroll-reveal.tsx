"use client";

import { useEffect } from "react";

const STAGGER_MS = 90;
const BURST_GAP_MS = 220;

export function ScrollReveal() {
  useEffect(() => {
    const pending = new Set(
      document.querySelectorAll<HTMLElement>("[data-pop]"),
    );
    if (pending.size === 0) return;

    const burst = new WeakMap<Element, { at: number; count: number }>();

    const reveal = (node: HTMLElement, delay: number) => {
      node.style.setProperty("--reveal-delay", `${delay}ms`);
      node.classList.add("is-visible");
      node.addEventListener("animationend", (event) => {
        if (event.target !== node) return;
        node.classList.add("is-settled");
      });
    };

    let frame = 0;
    const scan = () => {
      frame = 0;
      const vh = window.innerHeight;
      const atEnd =
        window.scrollY + vh >= document.documentElement.scrollHeight - 8;
      const line = atEnd ? vh + 1 : vh * 0.84;
      const now = performance.now();
      const arriving: HTMLElement[] = [];

      for (const node of [...pending]) {
        const rect = node.getBoundingClientRect();
        if (rect.top < 0 && rect.bottom <= 8) {
          node.classList.add("is-visible", "is-settled");
          pending.delete(node);
          continue;
        }
        if (rect.bottom > 0 && rect.top < line) arriving.push(node);
      }

      arriving.sort((a, b) =>
        a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING
          ? -1
          : 1,
      );

      for (const node of arriving) {
        const group = node.closest("[data-reveal]") ?? node;
        const state = burst.get(group);
        const fresh = !state || now - state.at > BURST_GAP_MS;
        const count = fresh ? 0 : state.count;
        burst.set(group, { at: now, count: count + 1 });
        reveal(node, count * STAGGER_MS);
        pending.delete(node);
      }
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(scan);
    };

    const layout = new ResizeObserver(onScroll);
    layout.observe(document.documentElement);
    scan();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      layout.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
