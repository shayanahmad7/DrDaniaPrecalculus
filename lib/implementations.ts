export type Implementation = {
  slug: string
  index: string
  period: string
  course: string
  title: string
  shortTitle: string
  subtitle: string
  heroImage: string
  accent: "teal" | "ochre" | "blue" | "brick"
  summary: string
  coreQuestion: string
  motivation: string[]
  aiDesign: string[]
  studyDesign: string[]
  workflow: string[]
  evidence: string[]
  lessons: string[]
  metrics: Array<{ value: string; label: string; detail: string }>
  sourceFamilies: string[]
}

export const implementations: Implementation[] = [
  {
    slug: "summer-2025-local-pilot",
    index: "01",
    period: "Summer 2025",
    course: "Math1000A",
    title: "Local Topic Tutors",
    shortTitle: "Local Pilot",
    subtitle: "The first course-sovereign OpenWebUI and Ollama pilot.",
    heroImage: "/images/generated-workflows/summer-2025-local-pilot.png",
    accent: "teal",
    summary:
      "Dr. Dania Zantout's first AI implementation translated the Math1000A curriculum into a local mesh of topic-specific tutors. The system emphasized privacy, course ownership, and flipped-classroom support before the project moved to NYU PilotGenAI.",
    coreQuestion:
      "Can a locally hosted, instructor-curated AI tutor system support preparation without turning homework into answer retrieval?",
    motivation: [
      "The pilot responded to a practical classroom reality: students needed help between class meetings, but generic public AI tools could drift from the course, expose data, or solve instead of tutor.",
      "The local build made infrastructure a pedagogical choice. Hosting OpenWebUI and local models inside NYUAD-controlled infrastructure let the course team test AI support while keeping the curriculum and platform configuration close to the instructor.",
      "The design also fit a flipped rhythm. Students used topic companions for preparation and repair, then class time could focus on collaborative mathematical work.",
    ],
    aiDesign: [
      "Thirty-one unit companions covered the precalculus sequence, with additional review, image-upload, and answer-checking supports.",
      "Each topic companion was paired with a narrow knowledge bundle of notes, exercises, and prompt instructions rather than one broad general tutor.",
      "The system ran through OpenWebUI with local Gemma, Phi, and Qwen model layers, including a multimodal Qwen companion for image-based checking.",
      "Review companions aggregated wider material for midterm and final preparation while retaining the topic structure students already knew.",
      "The main design principle was content containment: keep the tutor's source material close to a specific concept, unit, or review window.",
    ],
    studyDesign: [
      "This was a classroom design pilot rather than a randomized empirical trial.",
      "A five-percent AI engagement rubric valued use patterns, topic coverage, study effectiveness, and thoughtful interaction rather than raw message counts alone.",
      "Engagement evidence came from anonymized OpenWebUI logs, aggregate message counts, and course-team review of how students actually used the companions.",
      "The pilot also created the first implementation archive: prompt records, model usage summaries, technical notes, and engagement reports.",
    ],
    workflow: [
      "Dr. Dania's topic notes and exercises were organized by unit.",
      "The course team configured one companion per unit or review window.",
      "Students chose the relevant topic companion outside class.",
      "The local model retrieved from the bounded unit package and responded through OpenWebUI.",
      "Aggregate logs and classroom observations fed the next round of design changes.",
    ],
    evidence: [
      "The archived aggregate logs show 272 chats and 5,511 messages from May 26 to June 24, 2025.",
      "The system recorded activity across 27 active days, with an average of 20.26 messages per chat.",
      "The master prompt and knowledge archive records 35 total companions, 32 knowledge collections, and 196 linked files.",
      "Model usage shows the early architecture split across local text models and a multimodal image-checking model.",
    ],
    lessons: [
      "Local sovereignty mattered, but the unit mesh alone did not fully control tutoring process.",
      "Students benefited from topic clarity, yet later builds needed stronger routing from homework problem to concept and method.",
      "The pilot established the design vocabulary for later systems: source bundles, prompt boundaries, review agents, and aggregate evidence.",
    ],
    metrics: [
      { value: "35", label: "companions", detail: "Unit, review, upload, and checking supports." },
      { value: "196", label: "linked files", detail: "Instructor notes, exercises, and review packets." },
      { value: "5,511", label: "messages", detail: "Aggregate pilot log total." },
      { value: "27", label: "active days", detail: "Logged use across the pilot window." },
    ],
    sourceFamilies: [
      "Summer 2025 AI project report and technical report",
      "OpenWebUI prompt and knowledge archive",
      "AI engagement rubric",
      "Aggregate chat-log summary and model-usage files",
      "Summer paper and revision notes",
    ],
  },
  {
    slug: "spring-2026-matha-homework-scaffold",
    index: "02",
    period: "Spring 2026",
    course: "Math1000A",
    title: "Homework Scaffold Companions",
    shortTitle: "MathA HSC",
    subtitle: "The move from topic containment to homework routing.",
    heroImage: "/images/generated-workflows/spring-2026-matha-hsc.png",
    accent: "ochre",
    summary:
      "Spring Math1000A moved the project onto NYU PilotGenAI and rebuilt the tutor around homework scaffolding. Thematic analysis files connected homework problems to topics, subskills, mapped PDFs, prep receipts, and later anchor-concept routines.",
    coreQuestion:
      "Can weekly AI companions help students connect homework tasks to the right course concepts and preparation evidence?",
    motivation: [
      "The local pilot showed that topic-specific support was useful, but homework introduced a different problem: students often arrived with one question, a screenshot, or a vague stuck point rather than a unit title.",
      "Dr. Dania's Spring MathA design therefore made the homework itself the organizing surface. The companion had to route from a problem to a skill family, source PDF, and next learning action.",
      "The literature-review framing also mattered here: unrestricted AI access is not enough. Students need scaffolds that preserve effort, self-explanation, and calibration.",
    ],
    aiDesign: [
      "Nine HSC companions were documented in the master archive, using Gemini 2.5 Flash and one Gemini 2.5 Pro preset.",
      "Each weekly companion included a thematic-analysis file, mapped course PDFs, and a prep receipt artifact.",
      "Thematic analysis acted as a router: identify the homework problem, name the subskill, connect the student to the relevant course material, and guide the attempt.",
      "Later prompts added anchor-concept scaffolding: diagnose the prerequisite, activate it, bridge into the homework task, and check the student's attempt.",
      "The design began shifting from content containment to process containment, but still retained the topic clarity from Summer 2025.",
    ],
    studyDesign: [
      "This was an instructional implementation with engagement auditing, not an IRB randomized trial.",
      "A 76-student roster was monitored for platform adoption, login status, conversation activity, and meaningful evidence of homework engagement.",
      "HW6 and HW7 were manually audited through raw logs and packetized chat histories to separate concrete problem work from overview-only prompts.",
      "The course-team reports identified engagement profiles: deep learners, high-volume micro-interaction users, and minimal or passive users.",
    ],
    workflow: [
      "Dr. Dania's homework set was decomposed into themes and subskills.",
      "Each subskill was linked to the relevant course PDF and receipt evidence requirement.",
      "A student entered a weekly companion with a problem, screenshot, or stuck point.",
      "The companion routed the request through the thematic analysis and source files.",
      "Manual and automated audits checked whether the interaction showed concrete homework engagement.",
    ],
    evidence: [
      "The adoption snapshot used a 76-student roster: 38 students had active conversations, 6 logged in without conversations, and 32 had not logged in by the report snapshot.",
      "Manual HW6/HW7 auditing awarded theme credit only when logs showed concrete work tied to a homework theme.",
      "The master design report records 9 MathA Spring companions, 8 knowledge collections, 66 linked files, and 26,680 prompt characters.",
      "Observed bottlenecks clustered around dense concepts such as logarithms, inverses, asymptotes, domains, and algebraic transformations.",
    ],
    lessons: [
      "Homework routing is stronger than asking students to choose a topic from memory.",
      "Usage volume alone can mislead; meaningful engagement requires evidence of problem-level work and reflection.",
      "Anchor-concept scaffolds became a bridge between prerequisite repair and current homework performance.",
    ],
    metrics: [
      { value: "9", label: "HSC companions", detail: "Weekly homework-scaffold builds." },
      { value: "66", label: "linked files", detail: "Thematic analyses, PDFs, and receipts." },
      { value: "76", label: "roster", detail: "Adoption and engagement monitoring frame." },
      { value: "45", label: "HW6 users", detail: "Students with any manual HW6 AI credit." },
    ],
    sourceFamilies: [
      "Spring 2026 MathA professor reports",
      "HW6/HW7 raw-log and manual engagement audits",
      "Thematic-analysis and prep-receipt files",
      "MathA Spring OpenWebUI prompt archive",
      "Master design architecture report",
    ],
  },
  {
    slug: "spring-2026-mathb-delayed-access-study",
    index: "03",
    period: "Spring 2026",
    course: "Math1000B",
    title: "Delayed-Access Socratic Study",
    shortTitle: "MathB Study",
    subtitle: "The empirical study: structured access, delayed access, and AI-free outcomes.",
    heroImage: "/images/generated-workflows/spring-2026-mathb-study.png",
    accent: "blue",
    summary:
      "Math1000B converted the companion system into an IRB-framed classroom study: structured educator-controlled Socratic AI versus delayed access in an AI-saturated course ecology. The design centered on fairness, governance, prep receipts, and independent assessment evidence.",
    coreQuestion:
      "Does a course-bounded Socratic companion support preparation better than students' usual mix of unstructured tools and resources?",
    motivation: [
      "The central problem was no longer whether students would use AI. They already could. The study asked whether educator-controlled AI could restore meaningful cognitive labor to homework preparation.",
      "The IRB proposal framed the intervention as a third path between banning AI and accepting unrestricted answer engines: course-grounded, answer-restrained, instructor-orchestrated support.",
      "The literature review gave the design its caution. AI can improve immediate task performance in some settings, but risks include offloading, over-trust, weak revision, dependency, and invalid evidence of learning.",
    ],
    aiDesign: [
      "Weekly HSC companions and a Midterm companion ran through NYU PilotGenAI/OpenWebUI with institutional model routing.",
      "Each weekly companion combined a system prompt, homework alignment file, teaching notes, course PDFs, prep receipt logic, and platform guardrails.",
      "Prompts required exact-version handling: the student's own randomized problem statement, screenshot, graph, signs, and values control computations.",
      "The tutoring protocol used a help ladder: identify checkpoint, offer a hint, clarify setup, give one micro-step, then return the work to the student.",
      "Silent self-check rules asked the companion to verify scope, method fidelity, invented-detail risk, and answer-dump risk before responding.",
    ],
    studyDesign: [
      "The IRB protocol used a randomized delayed-access design with consenting students pooled across coordinated sections.",
      "Early-access students used the structured companions during the initial comparison window; delayed-access students prepared with ordinary permitted resources until access expanded after the Week 5 comparison point.",
      "All students had the same WebAssign homework, prep receipt structure, instructional materials, office hours, tutoring, and AI-free quizzes and exams.",
      "Measures included course records, diagnostic data, selected MSES and MSLQ constructs, prep receipt evidence, usage metadata, and de-identified conversation analysis.",
      "Platform governance separated student identifiers from public reporting and routed model calls through NYU-controlled infrastructure and enterprise data protections.",
    ],
    workflow: [
      "The course team translated weekly homework into alignment maps and teaching guides.",
      "Consenting students were randomized into early-access and delayed-access timing.",
      "Early-access students used weekly companions during the comparison window.",
      "Common quizzes, the midterm, and later assessments remained AI-free evidence of independent understanding.",
      "Exports were de-identified, audited, and folded into prompt revision and stakeholder reporting.",
    ],
    evidence: [
      "The May 5 audit covered 108 early-access chats and 1,188 turns; 92 chats were rated strong or mostly aligned.",
      "The May 15 update analyzed 155 chats, 1,399 turns, and 14 observed users, separating comparison-period evidence from full-course rollout evidence.",
      "Full-course rollout logs showed receipt/reflection behavior emerging in HW6 and HW7 use.",
      "The May 16 data check framed 57 enrolled students, 54 activated platform users, and 3 pending users.",
    ],
    lessons: [
      "The randomized comparison remains analytically distinct from full-course rollout; the site should not blur those phases.",
      "Prompt quality depended on exact-version handling, scope control, and refusal of bulk answer requests.",
      "Governance work became part of the design: export checks, group-label audits, de-identification, and issue logs were necessary to interpret the evidence.",
    ],
    metrics: [
      { value: "57", label: "enrolled", detail: "Course roster used for stakeholder framing." },
      { value: "8", label: "companions", detail: "Seven weekly HSC agents plus Midterm." },
      { value: "155", label: "chats", detail: "May 15 PreCalcB export analyzed." },
      { value: "85.2%", label: "aligned", detail: "May 5 early-access chat alignment rate." },
    ],
    sourceFamilies: [
      "IRB research proposal and final submission",
      "OpenWebUI/PilotGenAI architecture and data-governance appendix",
      "Study information and consent materials",
      "May 5 and May 15 conversation-analysis reports",
      "Stakeholder deck notes, QA checklists, and literature-review synthesis",
    ],
  },
  {
    slug: "summer-2026-matha-prose",
    index: "04",
    period: "Summer 2026",
    course: "Math1000A",
    title: "PROSE Prep and Autopsy Cycle",
    shortTitle: "Summer PROSE",
    subtitle: "The mature split between readiness before class and repair after class.",
    heroImage: "/images/generated-workflows/summer-2026-prose-cycle.png",
    accent: "brick",
    summary:
      "Summer 2026 Math1000A is the most mature design so far. Each class cycle separates pre-class readiness from post-class error repair: Prep companions prepare students for class without leaking learning activities, while Autopsy companions support category-level repair after class.",
    coreQuestion:
      "Can AI support a daily learning cycle without revealing in-class work or replacing students' post-class repair?",
    motivation: [
      "Earlier systems showed that students need both preparation and repair. Combining those roles inside one companion creates leakage and shortcut risks, so Summer PROSE separated them.",
      "The Prep companion is intentionally incomplete from the student's perspective: it sees content and learning maps, but not in-class activity questions or solutions.",
      "The Autopsy companion receives the full repair packet only after class, so it can diagnose errors, verify reasoning, and help students build an evidence portfolio.",
    ],
    aiDesign: [
      "Every class cycle has a Prep companion and an Autopsy companion with different knowledge access.",
      "Prep bots receive content PDFs and learning maps only; they are designed to orient, repair prerequisites, guide preparation, and produce evidence-gated prep receipts.",
      "Autopsy bots receive learning activities, solution notes, category alignment, lookup tables, and autopsy guides so they can support repair and verification after class.",
      "The autopsy protocol asks for category, exercise, attempt, stuck point, and repair mode before giving help.",
      "QA checks test minimal start, direct learning-activity refusal, lost-student repair, receipt generation, category mapping, verification, repair mode, and portfolio-completion gates.",
    ],
    studyDesign: [
      "Summer PROSE uses an operational engagement workflow rather than an IRB delayed-access comparison.",
      "Daily grades combine a pre-class Prep phase and a post-class Autopsy phase on a 0, 0.5, 1 scale.",
      "The team retrieves platform data through admin exports and per-user API pulls, then normalizes chats into auditable records.",
      "Grade workflows preserve detailed audit workbooks while keeping Brightspace and shared grade artifacts simple.",
      "QA and daily mapping checks were treated as part of the implementation, not after-the-fact documentation.",
    ],
    workflow: [
      "Before class, students use the Prep bot for the upcoming content.",
      "The Prep bot withholds in-class activity content and guides readiness through learning maps.",
      "Students complete the no-AI in-class learning activity.",
      "After class, the Autopsy bot uses the full repair packet to diagnose and verify representative problems.",
      "Daily engagement scores combine Prep and Autopsy evidence after the cycle closes.",
    ],
    evidence: [
      "First-week reporting captured 144 official Summer MathA chats, 5,170 exported messages, and 2,573 student messages.",
      "All 15 roster counters were represented in the first-week aggregate exports.",
      "Prep engagement was strong early, while post-class autopsy completion was the main monitoring risk.",
      "Content 22 and Content 23 passed 16 of 16 QA checks on June 8, 2026.",
      "The June 8 workflow audit verified 177 UI chat rows and corrected the Day 8/June 5 grading cycle mapping.",
    ],
    lessons: [
      "Knowledge separation is a design control: Prep should not see Autopsy-only materials.",
      "Evidence gates prevent the companion from turning receipts or portfolios into one-click artifacts.",
      "Implementation quality now depends on release QA, data retrieval completeness, daily mapping discipline, and redaction practice.",
    ],
    metrics: [
      { value: "15", label: "learners", detail: "Roster counters in the Summer PROSE workflow." },
      { value: "144", label: "chats", detail: "Official first-week Prep/Autopsy aggregate." },
      { value: "5,170", label: "messages", detail: "First-week exported message count." },
      { value: "16/16", label: "QA checks", detail: "Content 22 and 23 checks passed on June 8." },
    ],
    sourceFamilies: [
      "PROSE Prep and Autopsy prompts",
      "Learning maps, content PDFs, activity packets, and solution-note packets",
      "QA reports for Content 17 through 23",
      "Summer 2026 usage reports and visual reports",
      "AI engagement grading workflow and June 8 audit notes",
    ],
  },
]

export const literatureFrame = [
  "The review corpus treats AI in higher education as mixed, conditional evidence rather than a simple success story.",
  "Math and statistics are especially sensitive because plausible-looking reasoning can still be wrong, and valid assessment requires independent evidence.",
  "Course-bounded, retrieval-grounded, and instructor-governed systems are promising as alignment mechanisms, but they still need live-course evidence.",
  "The design responds to risks in the literature: cognitive offloading, over-trust, weak revision, dependency, inflated confidence, and shallow uptake.",
  "Prep receipts, Show Your Work artifacts, autopsy portfolios, and AI-free assessments make process and independent understanding visible.",
]

export const designPrinciples = [
  {
    title: "Instructor Sovereignty",
    text: "Dr. Dania controls the source materials, methods, timing, release rules, and revision priorities.",
  },
  {
    title: "Bounded Knowledge",
    text: "The companions are grounded in course materials and organized around weekly or topic-specific scope.",
  },
  {
    title: "Reasoning Before Output",
    text: "Prompts prioritize attempts, checkpoints, repairs, verification, and next steps over answer dumps.",
  },
  {
    title: "Independent Evidence",
    text: "AI-supported work is paired with AI-free quizzes, exams, in-class activities, or portfolio evidence.",
  },
  {
    title: "Public Safety",
    text: "Public artifacts use aggregate evidence and generated visuals; private logs, rosters, prompts, and assessment files stay out of git.",
  },
]

export function getImplementation(slug: string) {
  return implementations.find((implementation) => implementation.slug === slug)
}
