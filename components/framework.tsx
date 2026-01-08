"use client"

import { ScrollAnimate } from "@/components/scroll-animate"

export function Framework() {
  return (
    <section className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 via-blue-50 to-white">
      <div className="max-w-6xl mx-auto">
        <ScrollAnimate animation="fadeUp">
          <h2 className="text-5xl font-bold text-slate-900 mb-6">The Daily Learning Cycle</h2>
        </ScrollAnimate>

        <ScrollAnimate animation="slideLeft" delay={100}>
          <div className="h-1 w-16 bg-blue-600 rounded-full mb-12"></div>
        </ScrollAnimate>

        <ScrollAnimate animation="fadeUp" delay={200}>
          <p className="text-xl text-slate-700 leading-relaxed mb-16 max-w-3xl">
            The framework structures each student's day around a six-phase learning cycle that seamlessly integrates AI
            tutoring with classroom instruction. This design ensures that AI support is strategically deployed at moments
            of greatest pedagogical value.
          </p>
        </ScrollAnimate>

        <ScrollAnimate animation="scale" delay={300}>
        <div className="rounded-xl overflow-hidden border border-slate-200 bg-white p-6 shadow-xl hover:shadow-2xl transition-smooth-lg mb-16">
          <img
            src="/images/daily-learning-cycle.png"
            alt="Daily Learning Cycle showing the six-phase learning framework: Pre-Class AI Tutoring, JiTT Warm-Up Assignment, Instructor Feedback Loop, Post-Class AI Review, and Reflection/Bonus Practice"
            className="w-full h-auto rounded-lg"
          />
        </div>
        </ScrollAnimate>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ScrollAnimate animation="slideLeft" delay={400}>
          <div className="bg-white rounded-xl p-10 border border-slate-200 shadow-lg hover:shadow-xl transition-smooth-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-8 w-1 bg-blue-600 rounded-full"></div>
              <h3 className="font-bold text-slate-900 text-2xl">Outside Class</h3>
            </div>
            <ul className="space-y-6 text-slate-700">
              <li className="animate-fadeInUp delay-400">
                <span className="font-bold text-slate-900 block mb-2">Phase 1: Pre-Class AI Tutoring</span>
                <p className="text-slate-600 leading-relaxed">
                  Students interact with chapter-specific AI tutors to preview upcoming material, clarify foundational
                  concepts, and prepare for classroom instruction.
                </p>
              </li>
              <li className="animate-fadeInUp delay-500">
                <span className="font-bold text-slate-900 block mb-2">Phase 5: Post-Class AI Review</span>
                <p className="text-slate-600 leading-relaxed">
                  After class, students revisit material through AI-guided review sessions, reinforcing understanding
                  and addressing gaps.
                </p>
              </li>
              <li className="animate-fadeInUp delay-600">
                <span className="font-bold text-slate-900 block mb-2">Phase 6: Reflection & Bonus Practice</span>
                <p className="text-slate-600 leading-relaxed">
                  Students engage in deeper reflection and optional practice with AI support, building mastery at their
                  own pace.
                </p>
              </li>
            </ul>
          </div>
          </ScrollAnimate>

          <ScrollAnimate animation="slideRight" delay={400}>
          <div className="bg-white rounded-xl p-10 border border-slate-200 shadow-lg hover:shadow-xl transition-smooth-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-8 w-1 bg-emerald-600 rounded-full"></div>
              <h3 className="font-bold text-slate-900 text-2xl">In Class</h3>
            </div>
            <ul className="space-y-6 text-slate-700">
              <li className="animate-fadeInUp delay-400">
                <span className="font-bold text-slate-900 block mb-2">Phase 2: JiTT Warm-Up Assignment</span>
                <p className="text-slate-600 leading-relaxed">
                  Just-In-Time Teaching warm-up assignments help instructors assess readiness and adjust the day's
                  lesson accordingly.
                </p>
              </li>
              <li className="animate-fadeInUp delay-500">
                <span className="font-bold text-slate-900 block mb-2">Phase 3: Active Learning</span>
                <p className="text-slate-600 leading-relaxed">
                  Interactive classroom sessions build on AI-prepared foundations, enabling discussion and
                  problem-solving in real time.
                </p>
              </li>
              <li className="animate-fadeInUp delay-600">
                <span className="font-bold text-slate-900 block mb-2">Phase 4: Instructor Feedback Loop</span>
                <p className="text-slate-600 leading-relaxed">
                  Instructors provide targeted feedback and guidance, synthesizing insights from AI interactions and
                  in-class performance.
                </p>
              </li>
            </ul>
          </div>
          </ScrollAnimate>
        </div>
      </div>
    </section>
  )
}
