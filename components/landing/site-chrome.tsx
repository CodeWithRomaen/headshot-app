import Link from "next/link"

import { brand, footerColumns, nav } from "@/lib/landing-content"
import { CtaButton, Display } from "./primitives"

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink-line bg-canvas/80 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-display text-2xl tracking-[-0.02em] text-ink"
        >
          {brand.name}
          <span className="text-ink-faint">.</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-ink-muted transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/signin"
            className="text-sm text-ink-muted transition-colors hover:text-ink"
          >
            Sign in
          </Link>
          <CtaButton
            href="/signin"
            className="hidden px-5 py-2.5 sm:inline-flex"
          >
            Get started
          </CtaButton>
        </div>
      </div>
    </header>
  )
}

function SiteFooter() {
  return (
    <footer className="border-t border-ink-line bg-canvas px-6 py-16">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid gap-12 md:grid-cols-[1.5fr_repeat(3,1fr)]">
          <div className="max-w-xs">
            <Display as="p" size="sm" className="mb-3">
              {brand.name}
              <span className="text-ink-faint">.</span>
            </Display>
            <p className="text-sm leading-relaxed text-ink-muted">
              {brand.tagline}
            </p>
          </div>

          {footerColumns.map((column) => (
            <div key={column.heading}>
              <p className="mb-4 eyebrow">{column.heading}</p>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-ink-muted transition-colors hover:text-ink"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-ink-line pt-8 text-sm text-ink-faint">
          © {new Date().getFullYear()} {brand.name}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export { SiteFooter, SiteHeader }
