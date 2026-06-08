export type Implementation = {
  slug: string
  index: string
  period: string
  course: string
  title: string
  shortTitle: string
  subtitle: string
  accent: "teal" | "ochre" | "blue" | "brick"
  summary: string
  coreQuestion: string
  motivation: string[]
  aiDesign: string[]
  studyDesign: string[]
  workflow: string[]
  evidence: string[]
  lessons: string[]
  workflowHero: {
    image: string
    mobileImage: string
    alt: string
    steps: string[]
  }
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
    subtitle: "The first local OpenWebUI and Ollama pilot.",
    accent: "teal",
    summary:
      "Dr. Dania Zantout's first Math1000A build turned the course materials into topic-specific local tutors. It kept the sources close to the instructor and the data close to NYUAD before later work moved to NYU PilotGenAI.",
    coreQuestion:
      "Can a locally hosted, instructor-curated tutor help students prepare without turning homework into answer lookup?",
    motivation: [
      "The pilot started from a plain classroom problem: students needed help between class meetings, but public AI tools could drift away from the course, expose data, or give answers too quickly.",
      "Running OpenWebUI and local models inside NYUAD-controlled infrastructure let the team test the idea while keeping the curriculum and platform setup close to the instructor.",
      "It also fit the flipped-course rhythm. Students used topic bots before or after class, and class time stayed focused on mathematical work with other people in the room.",
    ],
    aiDesign: [
      "Thirty-one unit bots covered the precalculus sequence, with extra review, image-upload, and answer-checking bots.",
      "Each topic bot was paired with a narrow knowledge bundle of notes, exercises, and prompt instructions rather than one broad general tutor.",
      "The system ran through OpenWebUI with local Gemma, Phi, and Qwen model layers, including a multimodal Qwen bot for image-based checking.",
      "Review bots pulled together wider material for midterm and final preparation while keeping the topic structure students already knew.",
      "The rule was simple: keep the tutor's source material close to a specific concept, unit, or review window.",
    ],
    studyDesign: [
      "This was a classroom pilot, not a randomized trial.",
      "A five-percent AI engagement rubric valued use patterns, topic coverage, study effectiveness, and thoughtful interaction rather than raw message counts alone.",
      "Engagement evidence came from anonymized OpenWebUI logs, aggregate message counts, and course-team review of how students actually used the bots.",
      "The pilot also left the first archive: prompt records, model usage summaries, technical notes, and engagement reports.",
    ],
    workflow: [
      "Dr. Dania's topic notes and exercises were organized by unit.",
      "The course team configured one bot per unit or review window.",
      "Students chose the relevant topic bot outside class.",
      "The local model retrieved from the bounded unit package and responded through OpenWebUI.",
      "Aggregate logs and classroom observations fed the next round of design changes.",
    ],
    evidence: [
      "The archived aggregate logs show 272 chats and 5,511 messages from May 26 to June 24, 2025.",
      "The system recorded activity across 27 active days, with an average of 20.26 messages per chat.",
      "The master prompt and knowledge archive records 35 total bots, 32 knowledge collections, and 196 linked files.",
      "Model usage shows the early architecture split across local text models and a multimodal image-checking model.",
    ],
    lessons: [
      "Local control mattered, but the unit mesh alone did not fully control how tutoring happened.",
      "Students benefited from topic clarity, yet later builds needed stronger routing from homework problem to concept and method.",
      "The pilot gave later builds their working vocabulary: source bundles, prompt boundaries, review agents, and aggregate evidence.",
    ],
    workflowHero: {
      image: "/images/workflow-heroes/summer-2025-local-pilot.webp",
      mobileImage: "/images/workflow-heroes/summer-2025-local-pilot-mobile.webp",
      alt: "Workflow illustration showing course notes moving through a local model layer to student topic work, classroom math, and aggregate revision.",
      steps: ["Course notes", "Local model layer", "Student topic choice", "Classroom work", "Aggregate revision"],
    },
    metrics: [
      { value: "35", label: "bots", detail: "Unit, review, upload, and checking bots." },
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
    title: "Homework Scaffold Bots",
    shortTitle: "MathA HSC",
    subtitle: "The move from topic containment to homework routing.",
    accent: "ochre",
    summary:
      "Spring Math1000A moved onto NYU PilotGenAI and reorganized the tutor around homework. Theme maps connected problems to topics, subskills, PDFs, prep receipts, and later anchor-concept routines.",
    coreQuestion:
      "Can weekly bots help students connect a homework problem to the right course concept and leave a useful prep trace?",
    motivation: [
      "The local pilot showed that topic-specific bots helped, but homework created a different problem: students often arrived with one question, a screenshot, or a vague stuck point rather than a unit title.",
      "Dr. Dania's Spring MathA design therefore made the homework itself the organizing surface. The bot had to route from a problem to a skill family, source PDF, and next learning action.",
      "The literature review mattered here too: open AI access was not enough. Students needed scaffolds that kept effort, self-explanation, and calibration in the work.",
    ],
    aiDesign: [
      "Nine HSC bots were documented in the master archive, using Gemini 2.5 Flash and one Gemini 2.5 Pro preset.",
      "Each weekly bot included a thematic-analysis file, mapped course PDFs, and a prep receipt file.",
      "Thematic analysis acted as a router: identify the homework problem, name the subskill, connect the student to the relevant course material, and guide the attempt.",
      "Later prompts added anchor-concept scaffolding: diagnose the prerequisite, activate it, bridge into the homework task, and check the student's attempt.",
      "The design moved from unit files toward rules for the tutoring process, while still keeping the topic clarity from Summer 2025.",
    ],
    studyDesign: [
      "This was an instructional build with engagement auditing, not an IRB randomized trial.",
      "A 76-student roster was checked for platform adoption, login status, conversation activity, and real homework work.",
      "HW6 and HW7 were manually audited through raw logs and packetized chat histories to separate concrete problem work from overview-only prompts.",
      "The course-team reports identified engagement profiles: deep learners, high-volume micro-interaction users, and minimal or passive users.",
    ],
    workflow: [
      "Dr. Dania's homework set was decomposed into themes and subskills.",
      "Each subskill was linked to the relevant course PDF and receipt evidence requirement.",
      "A student entered a weekly bot with a problem, screenshot, or stuck point.",
      "The bot routed the request through the thematic analysis and source files.",
      "Manual and automated audits checked whether the interaction showed concrete homework work.",
    ],
    evidence: [
      "The adoption snapshot used a 76-student roster: 38 students had active conversations, 6 logged in without conversations, and 32 had not logged in by the report snapshot.",
      "Manual HW6/HW7 auditing awarded theme credit only when logs showed concrete work tied to a homework theme.",
      "The master design report records 9 MathA Spring bots, 8 knowledge collections, 66 linked files, and 26,680 prompt characters.",
      "Observed bottlenecks clustered around dense concepts such as logarithms, inverses, asymptotes, domains, and algebraic transformations.",
    ],
    lessons: [
      "Homework routing is stronger than asking students to choose a topic from memory.",
      "Usage volume alone can mislead; real engagement needs problem-level work and reflection.",
      "Anchor-concept scaffolds became a bridge between prerequisite repair and current homework performance.",
    ],
    workflowHero: {
      image: "/images/workflow-heroes/spring-2026-matha-homework-scaffold.webp",
      mobileImage: "/images/workflow-heroes/spring-2026-matha-homework-scaffold-mobile.webp",
      alt: "Workflow illustration showing a homework set, theme map, weekly bot, student attempt, and receipt audit loop.",
      steps: ["Homework set", "Theme map", "Weekly bot", "Student attempt", "Receipt audit"],
    },
    metrics: [
      { value: "9", label: "HSC bots", detail: "Weekly homework-scaffold builds." },
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
    subtitle: "The empirical study: early access, delayed access, and AI-free outcomes.",
    accent: "blue",
    summary:
      "Math1000B put the course bots inside an IRB-framed classroom study. Some students got the instructor-controlled Socratic bots early; others got access later. Homework, quizzes, and exams stayed common across the sections.",
    coreQuestion:
      "Does a course-bounded Socratic bot help students prepare better than the usual mix of tools and resources?",
    motivation: [
      "The central problem was no longer whether students would use AI. They already could. The study asked whether an instructor-controlled bot could keep real mathematical work inside homework preparation.",
      "The IRB proposal framed the intervention as a third path between banning AI and accepting unrestricted answer engines: course-grounded tutoring run by the instructor.",
      "The literature review kept the claims cautious. AI can improve immediate task performance in some settings, but it can also invite offloading, over-trust, weak revision, dependency, and bad evidence of learning.",
    ],
    aiDesign: [
      "Weekly HSC bots and a Midterm bot ran through NYU PilotGenAI/OpenWebUI with institutional model routing.",
      "Each weekly bot combined a system prompt, homework alignment file, teaching notes, course PDFs, prep receipt logic, and platform rules.",
      "Prompts required exact-version handling: the student's own randomized problem statement, screenshot, graph, signs, and values control computations.",
      "The tutoring protocol used a help ladder: identify checkpoint, offer a hint, clarify setup, give one micro-step, then return the work to the student.",
      "Silent self-check rules asked the bot to verify scope, method fidelity, invented-detail risk, and answer-dump risk before responding.",
    ],
    studyDesign: [
      "The IRB protocol used a randomized delayed-access design with consenting students pooled across coordinated sections.",
      "Early-access students used the course bots during the initial comparison window; delayed-access students prepared with ordinary permitted resources until access expanded after the Week 5 comparison point.",
      "All students had the same WebAssign homework, prep receipt structure, instructional materials, office hours, tutoring, and AI-free quizzes and exams.",
      "Measures included course records, diagnostic data, selected MSES and MSLQ constructs, prep receipt evidence, usage metadata, and de-identified conversation analysis.",
      "Platform rules kept student identifiers out of public reporting and routed model calls through NYU-controlled infrastructure.",
    ],
    workflow: [
      "The course team translated weekly homework into alignment maps and teaching guides.",
      "Consenting students were randomized into early-access and delayed-access timing.",
      "Early-access students used weekly bots during the comparison window.",
      "Common quizzes, the midterm, and later assessments stayed AI-free.",
      "Exports were de-identified, audited, and folded into prompt revision and stakeholder reporting.",
    ],
    evidence: [
      "The May 5 audit covered 108 early-access chats and 1,188 turns; 92 chats were rated strong or mostly aligned.",
      "The May 15 update analyzed 155 chats, 1,399 turns, and 14 observed users, separating comparison-period evidence from full-course rollout evidence.",
      "Full-course rollout logs showed receipt/reflection behavior emerging in HW6 and HW7 use.",
      "The May 16 data check framed 57 enrolled students, 54 activated platform users, and 3 pending users.",
    ],
    lessons: [
      "The randomized comparison and the later full-course rollout are different phases; the site should not blur them.",
      "Prompt quality depended on exact-version handling, scope control, and refusal of bulk answer requests.",
      "The study also needed export checks, group-label audits, de-identification, and issue logs before the evidence could be trusted.",
    ],
    workflowHero: {
      image: "/images/workflow-heroes/spring-2026-mathb-delayed-access-study.webp",
      mobileImage: "/images/workflow-heroes/spring-2026-mathb-delayed-access-study-mobile.webp",
      alt: "Workflow illustration showing consent and course files splitting into early and delayed access groups before common assessments and de-identified analysis.",
      steps: ["Consent + files", "Early/delayed timing", "Socratic bot access", "AI-free assessments", "De-identified analysis"],
    },
    metrics: [
      { value: "57", label: "enrolled", detail: "Course roster used for stakeholder framing." },
      { value: "8", label: "bots", detail: "Seven weekly HSC agents plus Midterm." },
      { value: "155", label: "chats", detail: "May 15 PreCalcB export analyzed." },
      { value: "85.2%", label: "aligned", detail: "May 5 early-access chat alignment rate." },
    ],
    sourceFamilies: [
      "IRB research proposal and final submission",
      "OpenWebUI/PilotGenAI setup notes and data-handling appendix",
      "Study information and consent materials",
      "May 5 and May 15 conversation-analysis reports",
      "Stakeholder deck notes, QA checklists, and literature-review notes",
    ],
  },
  {
    slug: "summer-2026-matha-prose",
    index: "04",
    period: "Summer 2026",
    course: "Math1000A",
    title: "PROSE Prep and Autopsy Cycle",
    shortTitle: "Summer PROSE",
    subtitle: "Readiness before class, repair after class.",
    accent: "brick",
    summary:
      "Summer 2026 is the latest Math1000A build. Each class cycle separates pre-class readiness from post-class error repair: Prep bots prepare students without seeing the learning activity, while Autopsy bots handle category-level repair after class.",
    coreQuestion:
      "Can the course use AI in the daily class cycle without revealing in-class work or replacing students' post-class repair?",
    motivation: [
      "Earlier builds showed that students needed both preparation and repair. Putting both jobs inside one bot created leakage and shortcut risks, so Summer PROSE split them.",
      "The Prep bot is incomplete by design: it sees content and learning maps, but not in-class activity questions or solutions.",
      "The Autopsy bot receives the full repair packet only after class, so it can diagnose errors, verify reasoning, and help students build a repair portfolio.",
    ],
    aiDesign: [
      "Every class cycle has a Prep bot and an Autopsy bot with different knowledge access.",
      "Prep bots receive content PDFs and learning maps only; they orient students, repair prerequisites, guide preparation, and produce prep receipts.",
      "Autopsy bots receive learning activities, solution notes, category alignment, lookup tables, and autopsy guides after class for repair and verification.",
      "The autopsy protocol asks for category, exercise, attempt, stuck point, and repair mode before giving help.",
      "QA checks test minimal start, direct learning-activity refusal, lost-student repair, receipt generation, category mapping, verification, repair mode, and portfolio-completion gates.",
    ],
    studyDesign: [
      "Summer PROSE uses a daily engagement workflow rather than an IRB delayed-access comparison.",
      "Daily grades combine a pre-class Prep phase and a post-class Autopsy phase on a 0, 0.5, 1 scale.",
      "The team retrieves platform data through admin exports and per-user API pulls, then normalizes chats into auditable records.",
      "Grade workflows keep detailed audit workbooks while Brightspace and shared grade files stay simple.",
      "QA and daily mapping checks were part of the build, not cleanup after the fact.",
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
      "Receipt gates keep the bot from turning receipts or portfolios into one-click outputs.",
      "The work now depends on release QA, complete data pulls, careful day mapping, and clean redaction.",
    ],
    workflowHero: {
      image: "/images/workflow-heroes/summer-2026-matha-prose.webp",
      mobileImage: "/images/workflow-heroes/summer-2026-matha-prose-mobile.webp",
      alt: "Workflow illustration showing the Summer PROSE cycle from prep-only materials to no-AI class work, autopsy repair, portfolio work, and daily audit.",
      steps: ["Prep-only materials", "Prep receipt", "No-AI class work", "Autopsy repair", "Daily audit"],
    },
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
  "The literature is mixed. AI can help in some settings, but the gains depend heavily on the task, the rules, and what counts as learning.",
  "Math and statistics are risky places for loose AI use because a solution can look plausible and still be wrong.",
  "Course-bounded bots look more defensible than open-ended answer tools, but they still need evidence from the actual course.",
  "The study was designed around known risks: offloading, over-trust, weak revision, dependency, inflated confidence, and shallow uptake.",
  "Prep receipts, Show Your Work records, autopsy portfolios, and AI-free assessments make the student's process visible.",
]

export const designPrinciples = [
  {
    title: "Instructor Control",
    text: "Dr. Dania controls the source materials, methods, timing, release rules, and revision priorities.",
  },
  {
    title: "Bounded Knowledge",
    text: "The bots are grounded in course materials and organized around weekly or topic-specific scope.",
  },
  {
    title: "Reasoning Before Output",
    text: "Prompts prioritize attempts, checkpoints, repairs, verification, and next steps over answer dumps.",
  },
  {
    title: "Independent Evidence",
    text: "AI-assisted work is paired with quizzes, exams, in-class activities, or portfolio evidence that students complete without AI.",
  },
  {
    title: "Public Safety",
    text: "The public site uses diagrams and aggregate charts. Private logs, rosters, prompts, and assessment files stay out of git.",
  },
]

export function getImplementation(slug: string) {
  return implementations.find((implementation) => implementation.slug === slug)
}
