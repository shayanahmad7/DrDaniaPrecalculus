import {
  ArrowRight,
  GraduationCap,
  ShieldCheck,
} from "lucide-react"
import { designPrinciples, implementations, literatureFrame } from "@/lib/implementations"
import { ImplementationButtons } from "@/components/implementation-buttons"
import { MiniWorkflowDiagram, ProgramMap } from "@/components/workflow-diagram"

const researchAsset = (name: string) => `/images/research-assets/${name}`

const overviewMetrics = [
  { value: "4", label: "implementation waves", detail: "From local pilot to Summer PROSE." },
  { value: "52+", label: "documented companions", detail: "Local topic tutors plus PilotGenAI builds." },
  { value: "396", label: "reviewed records", detail: "Tracked literature corpus behind the study framing." },
  { value: "1", label: "IRB study", detail: "Randomized delayed-access Math1000B protocol." },
]

export default function Home() {
  return (
    <main className="site-shell">
      <header className="site-nav">
        <a className="brand-lockup" href="/" aria-label="Precalculus with Dr. Dania home">
          <span>Precalculus</span>
          <span>with Dr. Dania</span>
        </a>
        <ImplementationButtons className="site-implementation-buttons" label="Implementation pages" />
      </header>

      <section className="home-hero" id="top">
        <div className="home-hero-grid">
          <div className="home-hero-content">
            <p className="eyebrow">NYU Abu Dhabi | Math1000A/B</p>
            <h1>Precalculus with Dr. Dania</h1>
            <p>
              A public, redacted showcase of Dr. Dania Zantout's course-owned AI companion work: local tutors,
              homework-scaffold companions, an IRB delayed-access study, and the Summer PROSE prep-and-autopsy cycle.
            </p>
            <ImplementationButtons className="hero-implementation-buttons" label="Open an implementation" />
          </div>
          <ProgramMap />
        </div>
      </section>

      <section className="overview-band" id="overview">
        <div className="section-head">
          <p className="eyebrow">Project argument</p>
          <h2>The project is not one chatbot. It is a sequence of course designs.</h2>
          <p>
            Across four implementations, Dr. Dania's work moved from local content containment to governed learning
            workflows: source curation, homework routing, exact-version guardrails, prep receipts, autopsy repair,
            QA checks, and AI-free evidence of independent understanding.
          </p>
        </div>

        <div className="metric-strip" aria-label="Project scale">
          {overviewMetrics.map((metric) => (
            <div className="metric" key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
              <p>{metric.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="split-section">
        <div className="split-copy">
          <p className="eyebrow">Why this matters</p>
          <h2>Students already have AI. The hard question is who designs the learning.</h2>
          <p>
            The literature review behind the MathB study is deliberately cautious. It does not claim that AI always
            helps or always harms. It shows a design-sensitive field where guided, bounded, and course-integrated support
            looks more defensible than unrestricted access, especially when learning is measured without AI.
          </p>
        </div>
        <div className="literature-list" aria-label="Literature review framing">
          {literatureFrame.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      <section className="section-block" id="implementations">
        <div className="section-head">
          <p className="eyebrow">Implementation record</p>
          <h2>Each wave changed the AI design and the evidence design.</h2>
        </div>

        <div className="implementation-list">
          {implementations.map((implementation) => (
            <a
              className={`implementation-row accent-${implementation.accent}`}
              href={`/implementations/${implementation.slug}`}
              key={implementation.slug}
            >
              <div className="implementation-index">{implementation.index}</div>
              <MiniWorkflowDiagram implementation={implementation} />
              <div className="implementation-copy">
                <p>{`${implementation.period} | ${implementation.course}`}</p>
                <h3>{implementation.title}</h3>
                <span>{implementation.summary}</span>
              </div>
              <ArrowRight size={22} aria-hidden="true" />
            </a>
          ))}
        </div>
      </section>

      <section className="evidence-band" id="evidence">
        <div className="section-head on-dark">
          <p className="eyebrow">Evidence and safety</p>
          <h2>Public artifacts show the work without exposing the students.</h2>
          <p>
            The public layer uses process diagrams, aggregate charts, and sanitized narratives. Raw logs,
            student identifiers, consent exports, survey exports, grade books, private prompts, and assessment solutions
            stay out of the website repository.
          </p>
        </div>

        <div className="visual-pair">
          <figure>
            <img src={researchAsset("knowledge-composition.png")} alt="Aggregate knowledge composition chart" />
            <figcaption>Knowledge files became routing, teaching, reflection, and QA artifacts.</figcaption>
          </figure>
          <figure>
            <img src={researchAsset("summer26-prose-usage.png")} alt="Aggregate Summer 2026 PROSE usage chart" />
            <figcaption>Summer PROSE reporting distinguishes prep strength from post-class autopsy completion risk.</figcaption>
          </figure>
        </div>
      </section>

      <section className="section-block">
        <div className="principle-grid">
          {designPrinciples.map((principle) => (
            <article key={principle.title}>
              <ShieldCheck size={22} aria-hidden="true" />
              <h3>{principle.title}</h3>
              <p>{principle.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="credit-band" id="credit">
        <GraduationCap size={36} aria-hidden="true" />
        <div>
          <p className="eyebrow">Credit</p>
          <h2>Led by Dr. Dania Zantout.</h2>
          <p>
            This showcase gives public credit to Dr. Dania Zantout's Math1000A and Math1000B AI companion work at NYU Abu
            Dhabi. Implementation, analysis, and production support were developed with Shayan Ahmad, Lawrence Torres,
            NYU PilotGenAI/OpenWebUI collaborators, and course-team partners.
          </p>
        </div>
      </section>

      <footer className="site-footer">
        <div>
          <strong>Precalculus with Dr. Dania</strong>
          <p>Course-owned AI companion design for university mathematics.</p>
        </div>
        <a href="#top">
          Back to top
          <ArrowRight size={16} aria-hidden="true" />
        </a>
      </footer>
    </main>
  )
}
