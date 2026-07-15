import { useEffect, useState } from 'react'

const links = [
  { href: '#about', label: 'ABOUT' },
  { href: '#experience', label: 'EXPERIENCE' },
  { href: '#projects', label: 'PROJECTS' },
  { href: '#skills', label: 'SKILLS' },
  { href: '#education', label: 'EDUCATION' },
  { href: '#contact', label: 'CONTACT' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 border-b transition-colors ${
        scrolled ? 'bg-bg/95 border-line backdrop-blur' : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 font-mono text-sm text-ink">
          <span className="w-8 h-8 border border-lineStrong flex items-center justify-center text-signal">
            MA
          </span>
          <span className="hidden sm:inline text-inkMuted">ahmadi / front-end</span>
        </a>

        <nav className="hidden md:flex items-center gap-7 font-mono text-xs tracking-wider">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-inkMuted hover:text-signal transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden font-mono text-xs border border-lineStrong px-3 py-1.5 text-inkMuted"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
        >
          {open ? 'CLOSE' : 'MENU'}
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-bg border-t border-line px-6 py-4 flex flex-col gap-4 font-mono text-xs tracking-wider">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-inkMuted hover:text-signal transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
