import SectionHeader from './SectionHeader'
import { experience } from '../data/resumeData'

export default function Timeline() {
  return (
    <section id="experience" className="py-24 px-6 border-b border-line">
      <div className="max-w-6xl mx-auto">
        <SectionHeader fig="FIG. 02" title="Experience" />

        <div className="relative pl-8 sm:pl-12">
          {/* main trunk trace */}
          <div className="absolute left-[7px] sm:left-[11px] top-2 bottom-2 w-px bg-trace/40" />

          <ol className="space-y-16">
            {experience.map((job) => (
              <li key={job.id} className="relative">
                {/* node pin */}
                <span className="absolute -left-8 sm:-left-12 top-1.5 w-4 h-4 rounded-full border-2 border-trace bg-bg" />
                <span className="absolute -left-[27px] sm:-left-[43px] top-[13px] w-[18px] sm:w-[30px] h-px bg-trace/40" />

                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                  <h3 className="font-display font-bold text-xl text-ink">{job.role}</h3>
                  <span className="text-inkMuted">—</span>
                  {job.companyUrl ? (
                    <a
                      href={job.companyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-trace hover:text-signal transition-colors"
                    >
                      {job.company}
                    </a>
                  ) : (
                    <span className="text-trace">{job.company}</span>
                  )}
                </div>

                <div className="font-mono text-xs text-inkMuted flex flex-wrap gap-x-4 gap-y-1 mb-4">
                  <span>{job.date}</span>
                  <span className="text-signal">{job.duration}</span>
                  <span>{job.location}</span>
                </div>

                <p className="text-inkMuted text-sm mb-4 max-w-2xl">{job.blurb}</p>

                <ul className="space-y-2 mb-6 max-w-2xl">
                  {job.points.map((pt, i) => (
                    <li key={i} className="flex gap-3 text-ink/90 text-sm leading-relaxed">
                      <span className="text-trace font-mono shrink-0">›</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                {/* branch traces to sub-projects */}
                {job.projects?.length > 0 && (
                  <div className="space-y-4">
                    {job.projects.map((p) => (
                      <div key={p.name} className="relative pl-6 border-l border-line">
                        <span className="absolute -left-1 top-2 w-2 h-2 rounded-full bg-signal" />
                        <div className="bg-raised border border-line px-4 py-3">
                          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                            <span className="font-display font-semibold text-ink text-sm">
                              {p.name}
                            </span>
                            <span className="font-mono text-[11px] text-inkMuted">{p.date}</span>
                          </div>
                          <p className="text-inkMuted text-sm mt-1">{p.description}</p>
                          <div className="flex flex-wrap gap-2 mt-3">
                            {p.stack.map((s) => (
                              <span
                                key={s}
                                className="font-mono text-[10px] tracking-wide text-trace border border-trace/30 px-2 py-0.5"
                              >
                                {s}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
