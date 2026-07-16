import SectionHeader from './SectionHeader'
import { profile, languages } from '../data/resumeData'

export default function Languages() {
  return (
    <section id="Languages" className="py-24 px-6 border-b border-line">
      <div className="max-w-6xl mx-auto  gap-12">
        <div>
          <SectionHeader fig="FIG. 06" title="LANGUAGES" />
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
