import SectionHeader from './SectionHeader'
import { skillGroups } from '../data/resumeData'

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 border-b border-line">
      <div className="max-w-6xl mx-auto">
        <SectionHeader fig="FIG. 03" title="Skills" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div key={group.label} className="border border-line bg-raised p-5">
              <p className="font-mono text-[11px] tracking-[0.15em] text-signal mb-4">
                {group.label.toUpperCase()}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-xs text-ink/90 border border-lineStrong px-2.5 py-1 hover:border-trace hover:text-trace transition-colors"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
