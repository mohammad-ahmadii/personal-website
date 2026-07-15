import SectionHeader from './SectionHeader'
import { education } from '../data/resumeData'

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 border-b border-line">
      <div className="max-w-6xl mx-auto">
        <SectionHeader fig="FIG. 05" title="Education" />

        <div className="divide-y divide-line border-t border-b border-line">
          {education.map((e) => (
            <div
              key={e.degree}
              className="py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
            >
              <div>
                <p className="font-display font-semibold text-ink">{e.degree}</p>
                <p className="text-inkMuted text-sm">{e.school}</p>
              </div>
              <div className="font-mono text-xs text-inkMuted flex gap-4 shrink-0">
                <span>{e.date}</span>
                <span className="text-signal">{e.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
