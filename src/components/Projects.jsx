import SectionHeader from './SectionHeader'
import { projects } from '../data/resumeData'

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 border-b border-line">
      <div className="max-w-6xl mx-auto">
        <SectionHeader fig="FIG. 04" title="Projects" />

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <article
              key={p.name}
              className="group border border-line bg-raised p-6 hover:border-trace/60 transition-colors"
            >
              <div className="flex items-start justify-between gap-4 mb-2">
                <p className="font-mono text-[11px] text-inkMuted">
                  {String(i + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                </p>
                <span className="font-mono text-[11px] text-signal">{p.date}</span>
              </div>

              <h3 className="font-display font-bold text-xl text-ink mb-1">{p.name}</h3>
              <p className="font-mono text-[11px] text-inkMuted mb-4">
                {p.role} · {p.company}
              </p>

              <p className="text-inkMuted text-sm leading-relaxed mb-5">{p.description}</p>

              <div className="flex justify-between">
                <div className='flex flex-wrap gap-2'>
                  {p.stack.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-[10px] tracking-wide text-trace border border-trace/30 px-2 py-0.5"
                  >
                    {s}
                  </span>
                ))}
                </div>
                  {p.link && <a className='text-trace border px-2 border-trace hover:bg-trace hover:text-black ' href={p.link}>view</a>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
