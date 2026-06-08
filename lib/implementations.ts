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
  lessons: string[]
  workflowHero: {
    image: string
    mobileImage: string
    alt: string
    steps: string[]
  }
  metrics: Array<{ value: string; label: string; detail: string }>
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
      "Dr. Dania Zantout's first Math1000A build turned the course materials into topic-specific local tutors. It kept the sources close to the instructor before later work moved to NYU PilotGenAI.",
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
      "A five-percent AI engagement rubric valued use patterns, topic coverage, study effectiveness, and thoughtful interaction rather than activity volume alone.",
      "Internal review focused on whether the local topic mesh stayed close to course methods and helped students prepare between classes.",
      "The pilot also left the first implementation archive: prompt versions, model notes, technical setup notes, and rubric language.",
    ],
    workflow: [
      "Dr. Dania's topic notes and exercises were organized by unit.",
      "The course team configured one bot per unit or review window.",
      "Students chose the relevant topic bot outside class.",
      "The local model retrieved from the bounded unit package and responded through OpenWebUI.",
      "Internal platform review and classroom observations fed the next round of design changes.",
    ],
    lessons: [
      "Local control mattered, but the unit mesh alone did not fully control how tutoring happened.",
      "Students benefited from topic clarity, yet later builds needed stronger routing from homework problem to concept and method.",
      "The pilot gave later builds their working vocabulary: source bundles, prompt boundaries, review agents, and internal revision loops.",
    ],
    workflowHero: {
      image: "/images/workflow-heroes/summer-2025-local-pilot.webp",
      mobileImage: "/images/workflow-heroes/summer-2025-local-pilot-mobile.webp",
      alt: "Workflow illustration showing course notes moving through a local model layer to student topic work, classroom math, and internal revision.",
      steps: ["Course notes", "Local model layer", "Student topic choice", "Classroom work", "Internal revision"],
    },
    metrics: [
      { value: "35", label: "bots", detail: "Unit, review, upload, and checking bots." },
      { value: "196", label: "linked files", detail: "Instructor notes, exercises, and review packets." },
      { value: "32", label: "collections", detail: "Knowledge bundles organized around course topics." },
      { value: "3", label: "model families", detail: "Local text and image-checking routes." },
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
      "The course team checked the workflow internally to see whether homework prompts led to real problem-level work.",
      "HW6 and HW7 became design checkpoints for whether the bot was routing students to concepts rather than giving broad overview help.",
      "The course-team reports separated deep mathematical work from passive or overview-only use for internal revision.",
    ],
    workflow: [
      "Dr. Dania's homework set was decomposed into themes and subskills.",
      "Each subskill was linked to the relevant course PDF and receipt requirement.",
      "A student entered a weekly bot with a problem, screenshot, or stuck point.",
      "The bot routed the request through the thematic analysis and source files.",
      "Manual and automated audits checked whether the interaction showed concrete homework work.",
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
      { value: "8", label: "collections", detail: "Course materials organized for weekly routing." },
      { value: "2", label: "checkpoint weeks", detail: "HW6 and HW7 used for design review." },
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
      "The literature review kept the claims cautious. AI can improve immediate task performance in some settings, but it can also invite offloading, over-trust, weak revision, dependency, and shallow signals of learning.",
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
      "Measures were defined in the IRB materials, while detailed study materials stay in the private project archive.",
      "Platform rules routed model calls through NYU-controlled infrastructure and kept public reporting at the design level.",
    ],
    workflow: [
      "The course team translated weekly homework into alignment maps and teaching guides.",
      "Consenting students were randomized into early-access and delayed-access timing.",
      "Early-access students used weekly bots during the comparison window.",
      "Common quizzes, the midterm, and later assessments stayed AI-free.",
      "Internal study materials were checked and folded into prompt revision and stakeholder reporting.",
    ],
    lessons: [
      "The randomized comparison and the later full-course rollout are different phases; the site should not blur them.",
      "Prompt quality depended on exact-version handling, scope control, and refusal of bulk answer requests.",
      "The study also needed group-label checks, protocol review, and issue tracking before internal analysis could be trusted.",
    ],
    workflowHero: {
      image: "/images/workflow-heroes/spring-2026-mathb-delayed-access-study.webp",
      mobileImage: "/images/workflow-heroes/spring-2026-mathb-delayed-access-study-mobile.webp",
      alt: "Workflow illustration showing consent and course files splitting into early and delayed access groups before common assessments and private analysis.",
      steps: ["Consent + files", "Early/delayed timing", "Socratic bot access", "AI-free assessments", "Private analysis"],
    },
    metrics: [
      { value: "8", label: "bots", detail: "Seven weekly HSC agents plus Midterm." },
      { value: "2", label: "timing groups", detail: "Early-access and delayed-access comparison." },
      { value: "5", label: "week window", detail: "Initial comparison before expanded access." },
      { value: "1", label: "midterm bot", detail: "Review agent added to the weekly sequence." },
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
      "Internal platform materials and grading files stay outside the public site.",
      "Grade workflows keep detailed internal workbooks while Brightspace and shared grade files stay simple.",
      "QA and daily mapping checks were part of the build, not cleanup after the fact.",
    ],
    workflow: [
      "Before class, students use the Prep bot for the upcoming content.",
      "The Prep bot withholds in-class activity content and guides readiness through learning maps.",
      "Students complete the no-AI in-class learning activity.",
      "After class, the Autopsy bot uses the full repair packet to diagnose and verify representative problems.",
      "Daily engagement scores are finalized after the Prep and Autopsy cycle closes.",
    ],
    lessons: [
      "Knowledge separation is a design control: Prep should not see Autopsy-only materials.",
      "Receipt gates keep the bot from turning receipts or portfolios into one-click outputs.",
      "The work now depends on release QA, careful day mapping, and clean public/private boundaries.",
    ],
    workflowHero: {
      image: "/images/workflow-heroes/summer-2026-matha-prose.webp",
      mobileImage: "/images/workflow-heroes/summer-2026-matha-prose-mobile.webp",
      alt: "Workflow illustration showing the Summer PROSE cycle from prep-only materials to no-AI class work, autopsy repair, portfolio work, and daily QA.",
      steps: ["Prep-only materials", "Prep receipt", "No-AI class work", "Autopsy repair", "Daily audit"],
    },
    metrics: [
      { value: "2", label: "bot roles", detail: "Prep before class and Autopsy after class." },
      { value: "7", label: "content sets", detail: "Content 17 through 23 in the QA sequence." },
      { value: "5", label: "repair gates", detail: "Category, exercise, attempt, stuck point, mode." },
      { value: "16/16", label: "QA checks", detail: "Content 22 and 23 checks passed on June 8." },
    ],
  },
]

export const literatureFrame = [
  "The literature is mixed. AI can help in some settings, but the gains depend heavily on the task, the rules, and what counts as learning.",
  "Math and statistics are risky places for loose AI use because a solution can look plausible and still be wrong.",
  "Course-bounded bots look more defensible than open-ended answer tools, but they still need teacher review inside the actual course.",
  "The study was designed around known risks: offloading, over-trust, weak revision, dependency, inflated confidence, and shallow uptake.",
  "Prep receipts, Show Your Work pages, autopsy portfolios, and AI-free assessments keep the learning process inside the course workflow.",
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
    title: "Independent Checks",
    text: "AI-assisted work is paired with quizzes, exams, in-class activities, or portfolio work that students complete without AI.",
  },
  {
    title: "Private Data Stays Private",
    text: "The public site explains the course design. Private study materials and assessment files stay out of git.",
  },
]

export function getImplementation(slug: string) {
  return implementations.find((implementation) => implementation.slug === slug)
}
