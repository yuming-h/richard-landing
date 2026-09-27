import { androidUrl, iosUrl, webAppUrl } from "@/lib/app-links";

type Variant = "light" | "dark";

const buttonClass =
  "inline-flex min-h-14 w-full items-center justify-center gap-2.5 rounded-full px-6 text-base font-semibold lg:min-h-0 lg:w-auto lg:py-3.5 lg:text-[15px]";

export function DownloadButtons({ variant }: { variant: Variant }) {
  const iosClass =
    variant === "light"
      ? "bg-ink text-[var(--surface)] hover:opacity-90"
      : "bg-[var(--surface)] text-ink hover:opacity-90";
  const androidClass = "bg-white text-ink hover:opacity-90";
  const webClass =
    variant === "light"
      ? "bg-[#7848C0] text-white hover:opacity-90"
      : "border border-[var(--surface)]/60 text-[var(--surface)] hover:bg-[var(--surface)] hover:text-ink";

  return (
    <div className="mx-auto flex w-full max-w-sm flex-col items-stretch gap-3 sm:max-w-md sm:gap-4 lg:mx-0 lg:w-auto lg:max-w-none lg:items-center">
      <div className="flex w-full flex-col gap-3 sm:gap-4 lg:w-auto lg:flex-row">
        <a
          href={iosUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`${buttonClass} ${iosClass} transition-opacity`}
        >
          <AppleIcon />
          Download for iOS
        </a>
        <a
          href={androidUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`${buttonClass} ${androidClass} transition-opacity`}
        >
          <AndroidIcon />
          Get it on Android
        </a>
      </div>
      <a
        href={webAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${buttonClass} ${webClass} ${
          variant === "light" ? "transition-opacity" : "transition-colors"
        }`}
      >
        <MonitorIcon />
        Continue on web
      </a>
    </div>
  );
}

function AppleIcon() {
  return (
    <svg className="size-5 shrink-0 lg:size-[18px]" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
    </svg>
  );
}

function AndroidIcon() {
  return (
    <svg className="size-5 shrink-0 lg:size-[18px]" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
    </svg>
  );
}

function MonitorIcon() {
  return (
    <svg
      className="size-5 shrink-0 lg:size-[18px]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8" />
      <path d="M12 17v4" />
    </svg>
  );
}
