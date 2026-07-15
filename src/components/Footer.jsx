import { profile } from '../data/resumeData'

export default function Footer() {
  return (
    <footer id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-xs tracking-[0.2em] text-signal mb-4">FIG. 06 — CONTACT</p>
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink max-w-2xl mb-8">
          Open to front-end roles and collaborations.
        </h2>

        <div className="flex flex-wrap gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="px-5 py-2.5 bg-signal text-bg font-mono text-xs tracking-wider hover:bg-ink transition-colors"
          >
            {profile.email}
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s/g, '')}`}
            className="px-5 py-2.5 border border-lineStrong text-ink font-mono text-xs tracking-wider hover:border-signal hover:text-signal transition-colors"
          >
            {profile.phone}
          </a>
          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 border border-lineStrong text-ink font-mono text-xs tracking-wider hover:border-signal hover:text-signal transition-colors"
          >
            LinkedIn — {profile.linkedin}
          </a>
        </div>

        <div className="mt-16 pt-8 border-t border-line flex flex-wrap justify-between gap-4 font-mono text-[11px] text-inkMuted">
          <span>© {new Date().getFullYear()} {profile.name}</span>
        </div>
      </div>
    </footer>
  )
}
