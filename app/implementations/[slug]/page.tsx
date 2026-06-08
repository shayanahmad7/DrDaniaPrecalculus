import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, CheckCircle2, FileText, ShieldCheck } from "lucide-react"
import { getImplementation, implementations } from "@/lib/implementations"
import { ImplementationButtons } from "@/components/implementation-buttons"
import { BotAnatomyDiagram, ComponentMapDiagram, DailyOperationsDiagram, WorkflowDiagram } from "@/components/workflow-diagram"

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return implementations.map((implementation) => ({ slug: implementation.slug }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const implementation = getImplementation(slug)

  if (!implementation) {
    return {
      title: "Implementation not found | Precalculus with Dr. Dania",
    }
  }

  return {
    title: `${implementation.title} | Precalculus with Dr. Dania`,
    description: implementation.summary,
  }
}

export default async function ImplementationPage({ params }: PageProps) {
  const { slug } = await params
  const implementation = getImplementation(slug)

  if (!implementation) {
    notFound()
  }

  const currentIndex = implementations.findIndex((item) => item.slug === implementation.slug)
  const previous = implementations[(currentIndex - 1 + implementations.length) % implementations.length]
  const next = implementations[(currentIndex + 1) % implementations.length]

  return (
    <main className={`site-shell implementation-page accent-${implementation.accent}`}>
      <header className="site-nav detail-nav">
        <a className="brand-lockup" href="/" aria-label="Precalculus with Dr. Dania home">
          <span>Precalculus</span>
          <span>with Dr. Dania</span>
        </a>
        <ImplementationButtons className="site-implementation-buttons" label="Implementation pages" />
      </header>

      <section className="detail-hero">
        <div className="detail-hero-copy">
          <a className="back-link" href="/">
            <ArrowLeft size={17} aria-hidden="true" />
            Overview
          </a>
          <p className="eyebrow">{`${implementation.period} | ${implementation.course}`}</p>
          <h1>{implementation.title}</h1>
          <p>{implementation.subtitle}</p>
        </div>
        <WorkflowDiagram implementation={implementation} />
      </section>

      <section className="detail-section diagram-section" id="daily-workflow">
        <div className="detail-section-head">
          <p className="eyebrow">Student day</p>
          <h2>How a student moves through this version.</h2>
        </div>
        <DailyOperationsDiagram implementation={implementation} />
      </section>

      <section className="detail-intro">
        <div>
          <p className="eyebrow">Core question</p>
          <h2>{implementation.coreQuestion}</h2>
        </div>
        <p>{implementation.summary}</p>
      </section>

      <section className="detail-metrics" aria-label={`${implementation.title} metrics`}>
        {implementation.metrics.map((metric) => (
          <div className="metric" key={metric.label}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
            <p>{metric.detail}</p>
          </div>
        ))}
      </section>

      <section className="detail-section diagram-section" id="bot-design">
        <div className="detail-section-head">
          <p className="eyebrow">Bot design</p>
          <h2>What went into the bot.</h2>
        </div>
        <BotAnatomyDiagram implementation={implementation} />
        <ComponentMapDiagram implementation={implementation} />
      </section>

      <section className="detail-section">
        <div className="detail-section-head">
          <p className="eyebrow">Motivation</p>
          <h2>Why this version existed.</h2>
        </div>
        <div className="prose-columns">
          {implementation.motivation.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="detail-section two-column" id="ai-design">
        <div className="detail-section-head sticky-head">
          <p className="eyebrow">AI design</p>
          <h2>What the bot was told to do.</h2>
        </div>
        <div className="detail-list">
          {implementation.aiDesign.map((item) => (
            <article key={item}>
              <CheckCircle2 size={20} aria-hidden="true" />
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="workflow-band">
        <div className="detail-section-head">
          <p className="eyebrow">Workflow</p>
          <h2>How course material became student work.</h2>
        </div>
        <ol className="workflow-rail">
          {implementation.workflow.map((step, index) => (
            <li key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{step}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="detail-section two-column" id="study-design">
        <div className="detail-section-head sticky-head">
          <p className="eyebrow">Study and operations design</p>
          <h2>How the course team read the evidence.</h2>
        </div>
        <div className="detail-list">
          {implementation.studyDesign.map((item) => (
            <article key={item}>
              <FileText size={20} aria-hidden="true" />
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="evidence-detail" id="evidence">
        <div className="detail-section-head on-dark">
          <p className="eyebrow">Evidence read</p>
          <h2>What the documents let us say publicly.</h2>
        </div>
        <div className="evidence-columns">
          {implementation.evidence.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      <section className="detail-section two-column">
        <div className="detail-section-head sticky-head">
          <p className="eyebrow">Lessons</p>
          <h2>What carried into the next build.</h2>
        </div>
        <div className="lesson-list">
          {implementation.lessons.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      <section className="source-band">
        <div className="source-copy">
          <ShieldCheck size={24} aria-hidden="true" />
          <div>
            <p className="eyebrow">Source families reviewed</p>
            <h2>Public-safe notes only.</h2>
            <p>
              These are the source families behind the page. Raw rosters, chat transcripts, consent exports, survey
              exports, grade workbooks, admin URLs, access tokens, private prompts, and assessment solutions are not in
              the public site or repository.
            </p>
          </div>
        </div>
        <div className="source-list">
          {implementation.sourceFamilies.map((source) => (
            <span key={source}>{source}</span>
          ))}
        </div>
      </section>

      <nav className="detail-pager" aria-label="Other implementations">
        <a href={`/implementations/${previous.slug}`}>
          <ArrowLeft size={18} aria-hidden="true" />
          <span>{previous.shortTitle}</span>
        </a>
        <a href={`/implementations/${next.slug}`}>
          <span>{next.shortTitle}</span>
          <ArrowRight size={18} aria-hidden="true" />
        </a>
      </nav>
    </main>
  )
}
