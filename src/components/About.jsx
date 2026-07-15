import SectionHeader from './SectionHeader'
import { profile, languages } from '../data/resumeData'

export default function About() {
  return (
    <section id="about" className="py-24 px-6 border-b border-line">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-[1.4fr_1fr] gap-12">
        <div>
          <SectionHeader fig="FIG. 01A" title="About" />
          <p className="text-inkMuted leading-relaxed max-w-2xl">{profile.about}</p>
        </div>

        <div>
          <p className="font-mono text-xs tracking-[0.2em] text-signal mb-4">LANGUAGES</p>
          <ul className="space-y-3">
            {languages.map((l) => (
              <li key={l.name} className="flex items-center justify-between border-b border-line pb-3">
                <span className="text-ink font-display">{l.name}</span>
                <span className="font-mono text-xs text-inkMuted">{l.level}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
