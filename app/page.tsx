import {
  ArrowRight,
  GraduationCap,
  ShieldCheck,
} from "lucide-react"
import { designPrinciples, implementations, literatureFrame } from "@/lib/implementations"
import { ImplementationButtons } from "@/components/implementation-buttons"
import { MiniWorkflowDiagram, ProgramMap } from "@/components/workflow-diagram"

const overviewMetrics = [
  { value: "4", label: "course builds", detail: "From local pilot to Summer PROSE." },
  { value: "52+", label: "documented bots", detail: "Local topic tutors plus PilotGenAI builds." },
  { value: "4", label: "workflow models", detail: "Local, homework, study, and PROSE designs." },
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
              A public overview of Dr. Dania Zantout's Math1000A/B course AI work: local tutors, homework-scaffold bots,
              an IRB delayed-access study, and the Summer PROSE prep-and-autopsy cycle.
            </p>
            <ImplementationButtons className="hero-implementation-buttons" label="Open an implementation" />
          </div>
          <ProgramMap />
        </div>
      </section>

      <section className="overview-band" id="overview">
        <div className="section-head">
          <p className="eyebrow">Project argument</p>
          <h2>This was never one chatbot. It was four course builds.</h2>
          <p>
            The work started with local topic tutors and kept getting more precise: homework routing, exact-version
            checks, prep receipts, post-class autopsies, release QA, and AI-free work that still shows what students
            understood on their own.
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
            The MathB literature review is cautious on purpose. It does not say AI helps or harms by default. It says
            the design matters. A course bot with sources, rules, and teacher review is a different thing from an open
            answer machine, especially when quizzes and exams still happen without AI.
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
          <p className="eyebrow">Build record</p>
          <h2>Each build changed the bot and the course workflow around it.</h2>
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
            This site gives public credit to Dr. Dania Zantout's Math1000A and Math1000B AI work at NYU Abu Dhabi.
            Implementation, analysis, and production help came from Shayan Ahmad, Lawrence Torres,
            NYU PilotGenAI/OpenWebUI collaborators, and course-team partners.
          </p>
        </div>
      </section>

      <footer className="site-footer">
        <div>
          <strong>Precalculus with Dr. Dania</strong>
          <p>Course AI design for university precalculus.</p>
        </div>
        <a href="#top">
          Back to top
          <ArrowRight size={16} aria-hidden="true" />
        </a>
      </footer>
    </main>
  )
}
