import type { Implementation } from "@/lib/implementations"
import { implementations } from "@/lib/implementations"

type DiagramRole = "teacher" | "student" | "system" | "review" | "classroom" | "research"

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

type DailyMoment = {
  time: string
  student: string
  bot: string
  teacher: string
  check: string
}

type DailyOperationsContent = {
  title: string
  note: string
  moments: DailyMoment[]
}

type BotComponent = {
  label: string
  title: string
  detail: string
  pieces: string[]
}

type ComponentMapContent = {
  title: string
  note: string
  rows: Array<{
    layer: string
    input: string
    rule: string
    output: string
  }>
}

const diagrams: Record<string, DiagramContent> = {
  "summer-2025-local-pilot": {
    kicker: "Summer 2025 daily loop",
    title: "Topic tutor mesh around the flipped class",
    note: "The pattern matters: Dr. Dania's unit files feed a local OpenWebUI/Ollama system, students prepare outside class, and internal review points to the next prompt or source revision.",
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
        role: "review",
        label: "Review",
        title: "Internal patterns",
        detail: "Use patterns and model behavior feed the next design pass.",
      },
    ],
    checks: ["31 unit bots", "Review bots for exams", "Local model layer", "5% engagement rubric"],
  },
  "spring-2026-matha-homework-scaffold": {
    kicker: "Spring 2026 homework loop",
    title: "From homework problem to mapped study path",
    note: "The route matters. A student's exact homework question is mapped to themes, PDFs, a guided attempt, and prep receipt rather than a generic answer.",
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
        label: "Bot route",
        title: "HSC prompt + PDFs",
        detail: "The bot routes to the right concept and asks for an attempt.",
      },
      {
        role: "student",
        label: "Student output",
        title: "Prep receipt",
        detail: "Student writes readiness, work shown, and next step.",
      },
      {
        role: "review",
        label: "Audit",
        title: "Theme credit",
        detail: "Internal review checks for concrete problem work, not overview prompts.",
      },
    ],
    checks: ["9 HSC bots", "Mapped study PDFs", "Anchor-concept scaffolds", "Manual HW6/HW7 audit"],
  },
  "spring-2026-mathb-delayed-access-study": {
    kicker: "Spring 2026 study design",
    title: "Delayed-access trial inside the course schedule",
    note: "This diagram keeps the randomized comparison separate from the later full-course rollout. Those two phases should not be mixed.",
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
        detail: "Only timing of course-bot access differs at first.",
      },
      {
        role: "system",
        label: "AI layer",
        title: "Course-bounded bots",
        detail: "Alignment maps, teaching notes, exact-version rules, help ladder.",
      },
      {
        role: "classroom",
        label: "Outcome",
        title: "AI-free assessments",
        detail: "Quizzes and exams stay AI-free.",
      },
      {
        role: "review",
        label: "Analysis",
        title: "Private analysis",
        detail: "Study interpretation stays in the private project archive.",
      },
    ],
    checks: ["IRB delayed-access protocol", "Exact-version rules", "AI-free quizzes/exams", "Post-rollout separated"],
  },
  "summer-2026-matha-prose": {
    kicker: "Summer 2026 class day",
    title: "Prep before class, Autopsy after class",
    note: "This is the PROSE class day: Prep sees only readiness materials; Autopsy sees the repair packet only after class; grades are entered after the cycle closes.",
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
        role: "review",
        label: "Repair work",
        title: "Receipt + portfolio",
        detail: "The bot cannot close the loop without category-level work from the student.",
      },
      {
        role: "teacher",
        label: "Teacher ops",
        title: "Daily grade + QA",
        detail: "Pre and post work are averaged after the cycle closes.",
      },
    ],
    checks: ["Knowledge separation", "Direct LA refusal", "Repair and verification modes", "Day mapping audit"],
  },
}

const dailyOperations: Record<string, DailyOperationsContent> = {
  "summer-2025-local-pilot": {
    title: "A student day in the local pilot",
    note: "The pilot day starts with topic choice: the student picks a bounded bot, prepares outside class, and the course team uses internal review to revise the local mesh.",
    moments: [
      {
        time: "Before class",
        student: "Chooses the unit tutor that matches the upcoming topic or a stuck prerequisite.",
        bot: "Retrieves only from that topic's notes, exercises, and local prompt instructions.",
        teacher: "Maintains unit files and decides which bots need revision.",
        check: "Course-team notes about which topic files need revision.",
      },
      {
        time: "During class",
        student: "Works through flipped-classroom problems without relying on the bot for answers.",
        bot: "Stays outside the live class activity unless review is part of that day.",
        teacher: "Uses class discussion to spot concepts that need more attention.",
        check: "Classroom observations guide the next source or prompt revision.",
      },
      {
        time: "After class",
        student: "Returns to a topic tutor or review bot to repair a gap.",
        bot: "Uses local model routing and bounded retrieval to explain, check, or review within the unit.",
        teacher: "Reads patterns across topics rather than private student histories.",
        check: "Internal platform review informs the next build.",
      },
    ],
  },
  "spring-2026-matha-homework-scaffold": {
    title: "A student day with a homework scaffold",
    note: "The MathA HSC day starts from the homework itself: a problem, screenshot, or stuck point gets routed to concepts, PDFs, attempts, and a prep receipt.",
    moments: [
      {
        time: "Homework start",
        student: "Brings one problem, image, or vague stuck point from the weekly set.",
        bot: "Names the theme, subskill, source PDF, and prerequisite anchor concept.",
        teacher: "Prepares thematic-analysis files that tell the bot what each problem is really testing.",
        check: "Course-team check: theme match, source routing, and concrete attempt.",
      },
      {
        time: "Work session",
        student: "Explains the attempt, names the block, and tries the next micro-step.",
        bot: "Uses the homework scaffold to hint, diagnose, and return the work to the student.",
        teacher: "Checks whether the bot is guiding the process rather than solving.",
        check: "Course-team check: whether the scaffold returns the work to the student.",
      },
      {
        time: "Before submission",
        student: "Records readiness, unresolved questions, and the next study action.",
        bot: "Creates a receipt only when the conversation shows problem-level work.",
        teacher: "Compares volume with quality so message count does not become the metric.",
        check: "Course-team check: concrete work rather than overview-only use.",
      },
    ],
  },
  "spring-2026-mathb-delayed-access-study": {
    title: "A student day inside the delayed-access study",
    note: "The MathB day keeps tutoring and study comparison separate. Early-access students use the course bots first; delayed-access students use ordinary resources until access expands.",
    moments: [
      {
        time: "Comparison window",
        student: "Uses either course-bot access or ordinary permitted resources, depending on randomized timing.",
        bot: "For early access, asks for the exact problem version and uses the Socratic help ladder.",
        teacher: "Keeps homework, quizzes, assessments, office hours, and materials common across groups.",
        check: "Protocol materials stay in the private project archive.",
      },
      {
        time: "Homework preparation",
        student: "Shows a checkpoint, graph, value, sign, or screenshot from the randomized problem.",
        bot: "Verifies exact-version details before computing or suggesting a method.",
        teacher: "Uses weekly alignment maps and teaching notes to keep the bot in course style.",
        check: "Internal check: alignment, issue type, and reflection behavior.",
      },
      {
        time: "Assessment",
        student: "Takes quizzes and exams without AI so independent understanding stays visible.",
        bot: "Does not participate in AI-free outcome measures.",
        teacher: "Separates randomized comparison work from later full-course rollout work.",
        check: "Public summary shows the design, not private study files.",
      },
    ],
  },
  "summer-2026-matha-prose": {
    title: "A student day in Summer PROSE",
    note: "This is the Summer PROSE class day: Prep before class, no-AI activity in class, Autopsy after class, then teacher grading and QA after the loop closes.",
    moments: [
      {
        time: "Before class",
        student: "Uses the Prep bot to preview content, repair prerequisites, and make a prep receipt.",
        bot: "Sees content PDFs and learning maps only; it cannot see learning activities or solutions.",
        teacher: "Releases the correct Prep bot and checks that it refuses activity leakage.",
        check: "Course-team check: readiness, gap, source, and next step.",
      },
      {
        time: "In class",
        student: "Completes the learning activity without AI and creates visible mathematical work.",
        bot: "Has no role during the AI-free activity.",
        teacher: "Watches for errors, emphasizes methods, and keeps the activity AI-free.",
        check: "Course-team check: paper or in-class work for later repair.",
      },
      {
        time: "After class",
        student: "Uses the Autopsy bot with category, exercise, attempt, and stuck point.",
        bot: "Sees the full repair packet: activity, solution notes, category map, lookup table, and guide.",
        teacher: "Checks that repair is category-level and not a one-click portfolio file.",
        check: "Course-team check: repair notes, verification moves, and portfolio completion.",
      },
      {
        time: "Closeout",
        student: "Leaves a prep-and-repair trail for the day.",
        bot: "Keeps the conversation available for internal grading checks.",
        teacher: "Scores the closed cycle, checks day mapping, and fixes operational mismatches.",
        check: "Course-team check: daily score, QA pass, and mapping audit.",
      },
    ],
  },
}

const botComponents: Record<string, BotComponent[]> = {
  "summer-2025-local-pilot": [
    {
      label: "Source bundle",
      title: "One unit, one knowledge boundary",
      detail: "The course team avoided a giant generic tutor by pairing each bot with a narrow curriculum slice.",
      pieces: ["Unit notes", "Exercises", "Review files", "Topic prompt"],
    },
    {
      label: "Model layer",
      title: "OpenWebUI plus local model routing",
      detail: "The early build tested Gemma, Phi, Qwen, and a multimodal checking route without sending student work to public AI tools.",
      pieces: ["OpenWebUI", "Ollama", "Local text models", "Image-check bot"],
    },
    {
      label: "Tutoring contract",
      title: "Explain, check, and review within scope",
      detail: "The prompt asked the bot to stay inside the topic and help with preparation rather than become a broad answer engine.",
      pieces: ["Topic scope", "Step guidance", "Answer checking", "Review help"],
    },
    {
      label: "Review loop",
      title: "Internal review guides revision",
      detail: "The pilot looked at engagement and bot behavior at the system level for internal revision.",
      pieces: ["Rubric", "Topic patterns", "Model notes", "Revision target"],
    },
  ],
  "spring-2026-matha-homework-scaffold": [
    {
      label: "Router",
      title: "Thematic analysis turns homework into concepts",
      detail: "Each weekly bot used a map from homework problem to theme, subskill, source PDF, and student action.",
      pieces: ["HW theme map", "Subskill labels", "Mapped PDFs", "Anchor concept"],
    },
    {
      label: "Interaction",
      title: "Attempt first, hint second",
      detail: "The bot had to pull the student into an attempt before giving the next scaffolded move.",
      pieces: ["Problem or screenshot", "Stuck point", "Guided attempt", "Micro-step"],
    },
    {
      label: "Receipt",
      title: "Prep receipts are part of the design",
      detail: "The bot generated a useful receipt only when the conversation showed concrete homework work.",
      pieces: ["Readiness", "Work shown", "Next step", "Unresolved question"],
    },
    {
      label: "Audit",
      title: "Quality is not the same as volume",
      detail: "Manual HW6/HW7 review separated deep problem work from overview prompts and passive platform use.",
      pieces: ["Checkpoint weeks", "Theme review", "Attempt quality", "Revision target"],
    },
  ],
  "spring-2026-mathb-delayed-access-study": [
    {
      label: "Study shell",
      title: "Randomized timing, common course conditions",
      detail: "The bot was placed inside a delayed-access protocol rather than treated as an uncontrolled add-on.",
      pieces: ["Consent", "Randomized timing", "Common homework", "AI-free outcomes"],
    },
    {
      label: "Prompt contract",
      title: "Exact-version Socratic help",
      detail: "The bot had to ask for the student's actual randomized problem details before doing the math.",
      pieces: ["Screenshot/value check", "Checkpoint ID", "Help ladder", "No answer dump"],
    },
    {
      label: "Self-check",
      title: "Rules before every response",
      detail: "Silent checks focused the model on scope, method fidelity, invented details, and answer leakage risk.",
      pieces: ["Scope check", "Method check", "Version check", "Leakage check"],
    },
    {
      label: "Analysis",
      title: "Separate the comparison from the rollout",
      detail: "The public page explains the protocol boundary and keeps study files private.",
      pieces: ["Protocol phases", "Prompt ratings", "Issue taxonomy", "Private study files"],
    },
  ],
  "summer-2026-matha-prose": [
    {
      label: "Prep bot",
      title: "Readiness without activity leakage",
      detail: "Prep knows what students need before class, but not the learning activity or solution notes.",
      pieces: ["Content PDF", "Learning map", "Prerequisite repair", "Prep receipt"],
    },
    {
      label: "Autopsy bot",
      title: "Repair after independent work",
      detail: "Autopsy receives the activity and solution-side materials only after class, when repair is legitimate.",
      pieces: ["Learning activity", "Solution notes", "Category map", "Lookup table"],
    },
    {
      label: "Gates",
      title: "The bot asks for category-level work",
      detail: "The post-class bot cannot finish the portfolio path without exercise, attempt, stuck point, and repair mode.",
      pieces: ["Category", "Exercise", "Attempt", "Repair mode"],
    },
    {
      label: "Operations",
      title: "Teacher scoring and QA close the loop",
      detail: "The build includes release checks, day mapping, and daily engagement grades.",
      pieces: ["0/0.5/1 score", "16-point QA", "Teacher review", "Day mapping"],
    },
  ],
}

const componentMaps: Record<string, ComponentMapContent> = {
  "summer-2025-local-pilot": {
    title: "Component map for a local topic tutor",
    note: "Each tutor is a small bounded setup: source files, scope prompt, local model route, and course-team review.",
    rows: [
      {
        layer: "Knowledge",
        input: "Topic notes and exercises",
        rule: "Retrieve only the unit bundle",
        output: "Course-aligned explanation",
      },
      {
        layer: "Prompt",
        input: "Unit tutoring instructions",
        rule: "Stay inside concept and method",
        output: "Hint, explanation, check, or review",
      },
      {
        layer: "Platform",
        input: "Student query in OpenWebUI",
        rule: "Route through local model/RAG layer",
        output: "No public AI data exposure",
      },
      {
        layer: "Review",
        input: "Internal review notes",
        rule: "Read course-level patterns",
        output: "Revision target for the next prompt/source pass",
      },
    ],
  },
  "spring-2026-matha-homework-scaffold": {
    title: "Component map for a homework scaffold bot",
    note: "The homework router does the heavy lifting: it turns one messy student stuck point into a source-backed learning move.",
    rows: [
      {
        layer: "Homework map",
        input: "Problem, theme, subskill",
        rule: "Match the student's question to the correct concept",
        output: "Theme and source route",
      },
      {
        layer: "Scaffold",
        input: "Student attempt or screenshot",
        rule: "Ask for reasoning before advancing",
        output: "Hint or micro-step",
      },
      {
        layer: "Receipt",
        input: "Readiness and work shown",
        rule: "Require concrete work before closure",
        output: "Prep receipt",
      },
      {
        layer: "Audit",
        input: "Internal checkpoint review",
        rule: "Credit problem-level engagement",
        output: "Theme-credit and revision target",
      },
    ],
  },
  "spring-2026-mathb-delayed-access-study": {
    title: "Component map for the MathB study bot",
    note: "The bot sits inside the study shell: timing, consent, exact-version prompting, and AI-free outcomes.",
    rows: [
      {
        layer: "Study shell",
        input: "Consenting pooled cohort",
        rule: "Randomize access timing",
        output: "Early vs delayed comparison",
      },
      {
        layer: "Alignment",
        input: "Homework map and teaching notes",
        rule: "Use course method and source language",
        output: "Socratic route",
      },
      {
        layer: "Guardrail",
        input: "Student's exact version",
        rule: "Check values, signs, screenshots, and scope",
        output: "Valid next step without answer dump",
      },
      {
        layer: "Analysis",
        input: "Private study files",
        rule: "Keep analysis internal and separate phases",
        output: "Study-design read",
      },
    ],
  },
  "summer-2026-matha-prose": {
    title: "Component map for a PROSE class day",
    note: "The design splits knowledge access by time: Prep cannot see repair materials; Autopsy cannot replace the in-class activity.",
    rows: [
      {
        layer: "Prep",
        input: "Content PDF and learning map",
        rule: "No learning activity or solutions",
        output: "Readiness and prep receipt",
      },
      {
        layer: "Class",
        input: "Learning activity",
        rule: "No AI during independent work",
        output: "Paper or in-class work",
      },
      {
        layer: "Autopsy",
        input: "Activity, solution notes, category map",
        rule: "Ask for category, attempt, stuck point, repair mode",
        output: "Repair portfolio work",
      },
      {
        layer: "Ops",
        input: "QA checks and day mapping",
        rule: "Score only after cycle close",
        output: "Daily grade and mapping correction",
      },
    ],
  },
}

function getDiagram(implementation: Implementation) {
  return diagrams[implementation.slug]
}

function getDailyOperations(implementation: Implementation) {
  return dailyOperations[implementation.slug]
}

function getBotComponents(implementation: Implementation) {
  return botComponents[implementation.slug]
}

function getComponentMap(implementation: Implementation) {
  return componentMaps[implementation.slug]
}

export function ProgramMap() {
  return (
    <div className="program-map" aria-label="Project evolution diagram">
      <div className="program-map-header">
        <span>Build history</span>
        <strong>From topic files to class-day rules</strong>
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
          Prep, attempts, repair, receipts, portfolio work, AI-free assessment.
        </p>
        <p>
          <span>Review layer</span>
          Internal review, QA, prompt revisions, and course-team checks.
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

export function DailyOperationsDiagram({ implementation }: { implementation: Implementation }) {
  const content = getDailyOperations(implementation)

  return (
    <div className={`daily-operations accent-${implementation.accent}`} aria-label={`${implementation.title} daily operations`}>
      <div className="daily-operations-head">
        <span>Everyday workflow</span>
        <strong>{content.title}</strong>
        <p>{content.note}</p>
      </div>
      <div className="daily-lane-grid">
        <div className="lane-labels" aria-hidden="true">
          <span>Time</span>
          <span>Student action</span>
          <span>Bot behavior</span>
          <span>Teacher move</span>
          <span>Course-team check</span>
        </div>
        {content.moments.map((moment) => (
          <section className="daily-moment" key={moment.time}>
            <h3>{moment.time}</h3>
            <p>{moment.student}</p>
            <p>{moment.bot}</p>
            <p>{moment.teacher}</p>
            <p>{moment.check}</p>
          </section>
        ))}
      </div>
    </div>
  )
}

export function BotAnatomyDiagram({ implementation }: { implementation: Implementation }) {
  const components = getBotComponents(implementation)

  return (
    <div className={`bot-anatomy accent-${implementation.accent}`} aria-label={`${implementation.title} bot design anatomy`}>
      {components.map((component, index) => (
        <section className="bot-component" key={component.label}>
          <div className="bot-component-number">{String(index + 1).padStart(2, "0")}</div>
          <div>
            <span>{component.label}</span>
            <h3>{component.title}</h3>
            <p>{component.detail}</p>
            <div className="bot-component-pieces">
              {component.pieces.map((piece) => (
                <small key={piece}>{piece}</small>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}

export function ComponentMapDiagram({ implementation }: { implementation: Implementation }) {
  const content = getComponentMap(implementation)

  return (
    <div className={`component-map accent-${implementation.accent}`} aria-label={`${implementation.title} component map`}>
      <div className="component-map-head">
        <span>Bot component map</span>
        <strong>{content.title}</strong>
        <p>{content.note}</p>
      </div>
      <div className="component-map-table">
        <div className="component-map-labels" aria-hidden="true">
          <span>Layer</span>
          <span>Input</span>
          <span>Rule</span>
          <span>Output</span>
        </div>
        {content.rows.map((row) => (
          <section className="component-map-row" key={row.layer}>
            <strong>{row.layer}</strong>
            <p>{row.input}</p>
            <p>{row.rule}</p>
            <p>{row.output}</p>
          </section>
        ))}
      </div>
    </div>
  )
}
