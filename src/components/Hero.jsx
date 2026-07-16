import { profile } from '../data/resumeData'

export default function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-20 px-6 border-b border-line overflow-hidden">
      <div className="max-w-6xl mx-auto  gap-12 items-start">
        <div>
          <p className="font-mono text-xs tracking-[0.2em] text-signal mb-4">
            FIG. 01 — INTRODUCTION
          </p>
          <h1 className="font-display font-bold text-5xl sm:text-6xl leading-[1.05] text-ink">
            {profile.name}
          </h1>
          <p className="mt-4 font-mono text-sm tracking-wide text-trace uppercase">
            {profile.title} · {profile.tagline} . {profile.age} years old
          </p>
          <p className="mt-6 max-w-xl text-inkMuted leading-relaxed">{profile.about}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="px-5 py-2.5 bg-signal text-bg font-mono text-xs tracking-wider hover:bg-ink transition-colors"
            >
              GET IN TOUCH
            </a>
            <a
              href="#experience"
              className="px-5 py-2.5 border border-lineStrong text-ink font-mono text-xs tracking-wider hover:border-signal hover:text-signal transition-colors"
            >
              VIEW EXPERIENCE
            </a>
          </div>
        </div> 
      </div>
    </section>
  )
}

function TitleRow({ label, value, href }) {
  return (
    <div className="border-b border-line px-4 py-3 flex justify-between gap-4">
      <span className="text-inkMuted shrink-0">{label}</span>
      {href ? (
        <a href={href} className="text-ink hover:text-signal transition-colors text-right truncate">
          {value}
        </a>
      ) : (
        <span className="text-ink text-right truncate">{value}</span>
      )}
    </div>
  )
}
