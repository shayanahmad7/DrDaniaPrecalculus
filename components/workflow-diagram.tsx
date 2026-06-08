import type { Implementation } from "@/lib/implementations"
import { implementations } from "@/lib/implementations"

type DiagramRole = "teacher" | "student" | "system" | "evidence" | "classroom" | "research"

type DiagramStep = {
  role: DiagramRole
  label: string
  title: string
  detail: string
}

type DiagramContent = {
  kicker: string
  title: string
  note: string
  steps: DiagramStep[]
  checks: string[]
}

const diagrams: Record<string, DiagramContent> = {
  "summer-2025-local-pilot": {
    kicker: "Summer 2025 daily loop",
    title: "Topic tutor mesh around the flipped class",
    note: "The meaningful visual is the containment pattern: Dr. Dania's unit files feed a local OpenWebUI/Ollama system, students prepare outside class, and aggregate logs guide the next prompt/source revision.",
    steps: [
      {
        role: "teacher",
        label: "Teacher build",
        title: "Unit notes + exercises",
        detail: "Dr. Dania's materials are split by precalculus topic.",
      },
      {
        role: "system",
        label: "Local system",
        title: "OpenWebUI + Ollama",
        detail: "Each unit receives a bounded prompt and knowledge bundle.",
      },
      {
        role: "student",
        label: "Student prep",
        title: "Choose a topic tutor",
        detail: "Student asks for prep, stuck-point repair, or review help.",
      },
      {
        role: "classroom",
        label: "Class time",
        title: "Paper-based work",
        detail: "Class focuses on collaborative problem solving and discussion.",
      },
      {
        role: "evidence",
        label: "Evidence",
        title: "Aggregate logs",
        detail: "Use patterns and model behavior feed the next design pass.",
      },
    ],
    checks: ["31 unit companions", "Review bots for exams", "Local model layer", "5% engagement rubric"],
  },
  "spring-2026-matha-homework-scaffold": {
    kicker: "Spring 2026 homework loop",
    title: "From homework problem to mapped study path",
    note: "The key diagram is routing. A student's exact homework question is mapped to themes, PDFs, a guided attempt, and prep-receipt evidence rather than a generic answer.",
    steps: [
      {
        role: "teacher",
        label: "Teacher map",
        title: "Thematic analysis",
        detail: "Homework is decomposed into topics, subskills, and source PDFs.",
      },
      {
        role: "student",
        label: "Student entry",
        title: "Problem or screenshot",
        detail: "The student brings one concrete stuck point or study goal.",
      },
      {
        role: "system",
        label: "Companion route",
        title: "HSC prompt + PDFs",
        detail: "The bot routes to the right concept and asks for an attempt.",
      },
      {
        role: "student",
        label: "Student output",
        title: "Prep receipt",
        detail: "Student records readiness, evidence, and next step.",
      },
      {
        role: "evidence",
        label: "Audit",
        title: "Theme credit",
        detail: "Logs are read for concrete problem work, not overview prompts.",
      },
    ],
    checks: ["9 HSC companions", "Mapped study PDFs", "Anchor-concept scaffolds", "Manual HW6/HW7 audit"],
  },
  "spring-2026-mathb-delayed-access-study": {
    kicker: "Spring 2026 study design",
    title: "Delayed-access trial inside the course rhythm",
    note: "This diagram separates the randomized comparison from the later full-course rollout. That matters because the evidence streams mean different things.",
    steps: [
      {
        role: "research",
        label: "Consent",
        title: "Pooled cohort",
        detail: "Consenting students are randomized across coordinated sections.",
      },
      {
        role: "research",
        label: "Timing",
        title: "Early vs delayed access",
        detail: "Only timing of structured companion access differs at first.",
      },
      {
        role: "system",
        label: "AI layer",
        title: "Course-bounded HSC bots",
        detail: "Alignment maps, teaching notes, exact-version rules, help ladder.",
      },
      {
        role: "classroom",
        label: "Outcome",
        title: "AI-free assessments",
        detail: "Quizzes and exams remain independent evidence of learning.",
      },
      {
        role: "evidence",
        label: "Analysis",
        title: "De-identified exports",
        detail: "Usage, receipts, surveys, and course records are analyzed safely.",
      },
    ],
    checks: ["IRB delayed-access protocol", "Exact-version guardrails", "AI-free quizzes/exams", "Post-rollout separated"],
  },
  "summer-2026-matha-prose": {
    kicker: "Summer 2026 class day",
    title: "Prep before class, Autopsy after class",
    note: "The daily diagram is the heart of PROSE: Prep sees only readiness materials; Autopsy sees the repair packet only after class; grades are entered after the full cycle closes.",
    steps: [
      {
        role: "student",
        label: "Before class",
        title: "Prep bot",
        detail: "Content + learning map only; no learning activity or solutions.",
      },
      {
        role: "classroom",
        label: "In class",
        title: "No-AI activity",
        detail: "Students complete the learning activity on paper/in class.",
      },
      {
        role: "student",
        label: "After class",
        title: "Autopsy bot",
        detail: "Repair uses LA, solution notes, category map, and guide.",
      },
      {
        role: "evidence",
        label: "Evidence",
        title: "Receipt + portfolio",
        detail: "The bot cannot close the loop without category-level work.",
      },
      {
        role: "teacher",
        label: "Teacher ops",
        title: "Daily grade + QA",
        detail: "Pre and post evidence are averaged after the cycle closes.",
      },
    ],
    checks: ["Knowledge separation", "Direct LA refusal", "Repair and verification modes", "Day mapping audit"],
  },
}

function getDiagram(implementation: Implementation) {
  return diagrams[implementation.slug]
}

export function ProgramMap() {
  return (
    <div className="program-map" aria-label="Project evolution diagram">
      <div className="program-map-header">
        <span>Program evolution</span>
        <strong>From content containment to process containment</strong>
      </div>
      <div className="program-map-track">
        {implementations.map((implementation) => (
          <div className={`program-map-node accent-${implementation.accent}`} key={implementation.slug}>
            <span>{implementation.index}</span>
            <strong>{implementation.shortTitle}</strong>
            <p>{implementation.period}</p>
          </div>
        ))}
      </div>
      <div className="program-map-lanes">
        <p>
          <span>Teacher layer</span>
          Course notes, teaching method, source rules, prompt revisions.
        </p>
        <p>
          <span>Student layer</span>
          Prep, attempts, repair, receipt, portfolio, AI-free assessment.
        </p>
        <p>
          <span>Evidence layer</span>
          Aggregate logs, audits, QA, de-identified analysis.
        </p>
      </div>
    </div>
  )
}

export function MiniWorkflowDiagram({ implementation }: { implementation: Implementation }) {
  const diagram = getDiagram(implementation)

  return (
    <div className={`mini-workflow accent-${implementation.accent}`} aria-label={`${implementation.title} process preview`}>
      {diagram.steps.slice(0, 4).map((step, index) => (
        <div className={`mini-workflow-step role-${step.role}`} key={`${step.label}-${step.title}`}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <strong>{step.label}</strong>
        </div>
      ))}
    </div>
  )
}

export function WorkflowDiagram({ implementation, compact = false }: { implementation: Implementation; compact?: boolean }) {
  const diagram = getDiagram(implementation)

  return (
    <div className={`workflow-diagram accent-${implementation.accent} ${compact ? "workflow-diagram-compact" : ""}`}>
      <div className="workflow-diagram-head">
        <span>{diagram.kicker}</span>
        <strong>{diagram.title}</strong>
        {!compact && <p>{diagram.note}</p>}
      </div>
      <div className="workflow-diagram-grid">
        {diagram.steps.map((step, index) => (
          <section className={`workflow-diagram-step role-${step.role}`} key={`${step.label}-${step.title}`}>
            <span className="step-number">{String(index + 1).padStart(2, "0")}</span>
            <small>{step.label}</small>
            <strong>{step.title}</strong>
            <p>{step.detail}</p>
          </section>
        ))}
      </div>
      {!compact && (
        <div className="workflow-diagram-checks" aria-label="Diagram checks">
          {diagram.checks.map((check) => (
            <span key={check}>{check}</span>
          ))}
        </div>
      )}
    </div>
  )
}
