import { CheckCircle2 } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { portfolioProjects } from '@/data/portfolio'

export function Portfolio() {
  return (
    <section id="portfolio" className="bg-paper py-20 sm:py-28">
      <Container>
        <SectionHeading
          title="Portfolio"
          description="A look at how these services come together in practice."
        />

        <div className="mt-12 grid gap-8 xl:grid-cols-2">
          {portfolioProjects.map((project) => (
            <article
              key={project.id}
              className="flex flex-col overflow-hidden rounded-xl border border-line bg-white shadow-card"
            >
              <div className="border-b border-line bg-paper p-3 sm:p-4">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  loading="lazy"
                  className="w-full rounded-lg border border-line"
                  width={1240}
                  height={800}
                />
              </div>

              <div className="flex flex-1 flex-col p-7">
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-navy-900">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-sm text-steel">{project.subtitle}</p>
                </div>

                <div className="mt-5 space-y-4">
                  <div>
                    <p className="text-sm font-medium text-navy-900">Problem</p>
                    <p className="mt-1 text-sm leading-relaxed text-steel">
                      {project.problem}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-navy-900">Solution</p>
                    <p className="mt-1 text-sm leading-relaxed text-steel">
                      {project.solution}
                    </p>
                  </div>
                </div>

                <div className="mt-5">
                  <p className="text-sm font-medium text-navy-900">Features</p>
                  <ul className="mt-2 space-y-2">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4 shrink-0 text-signal-600"
                          aria-hidden="true"
                        />
                        <span className="text-sm leading-relaxed text-ink-soft">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 rounded-lg bg-navy-50 p-4">
                  <p className="text-sm font-medium text-navy-900">
                    What this demonstrates
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-navy-800">
                    {project.outcome}
                  </p>
                </div>

                <div className="mt-5 flex flex-wrap gap-2 border-t border-line pt-5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-line bg-paper px-2.5 py-1 text-xs font-medium text-steel"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
