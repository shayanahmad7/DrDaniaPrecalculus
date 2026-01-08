export function Overview() {
  return (
    <section className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl font-bold text-slate-900 mb-6 animate-fadeInUp">Project Overview</h2>

        <div className="h-1 w-16 bg-blue-600 rounded-full mb-12 animate-slideInLeft"></div>

        <div className="space-y-8 text-slate-700 leading-relaxed">
          <p className="animate-fadeInUp text-lg">
            Mathematics education faces a critical challenge: how do institutions harness the capabilities of generative
            AI while safeguarding student privacy, ensuring pedagogical alignment, and maintaining academic integrity?
            This research project presents a comprehensive answer.
          </p>

          <p className="animate-fadeInUp text-lg delay-100">
            SovereignAI represents a novel approach to precalculus instruction. Rather than replacing traditional
            homework with generic AI assistance, we have developed a modular, curriculum-aligned AI tutoring system
            comprising 31 specialized tutors, each dedicated to one of 31 chapters in the course. Every tutor is
            carefully constrained to course-specific materials and learning objectives, operating within established
            pedagogical principles rather than as an unrestricted information tool.
          </p>

          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-10 border border-slate-200 shadow-md hover:shadow-lg transition-smooth-lg mt-12 animate-fadeInUp delay-200">
            <h3 className="text-2xl font-semibold text-slate-900 mb-8">The Framework at a Glance</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 animate-slideInLeft delay-300">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-600 text-white font-bold flex-shrink-0">
                  31
                </div>
                <div>
                  <p className="font-medium text-slate-900">Modular AI tutors</p>
                  <p className="text-sm text-slate-600">One per chapter</p>
                </div>
              </div>
              <div className="flex items-start gap-4 animate-slideInRight delay-300">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-600 text-white font-bold flex-shrink-0">
                  6
                </div>
                <div>
                  <p className="font-medium text-slate-900">Learning cycle phases</p>
                  <p className="text-sm text-slate-600">Integrated throughout day</p>
                </div>
              </div>
              <div className="flex items-start gap-4 animate-slideInLeft delay-400">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-600 text-white font-bold flex-shrink-0">
                  100%
                </div>
                <div>
                  <p className="font-medium text-slate-900">Curriculum-aligned</p>
                  <p className="text-sm text-slate-600">All interactions bounded by course materials</p>
                </div>
              </div>
              <div className="flex items-start gap-4 animate-slideInRight delay-400">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-emerald-600 text-white font-bold flex-shrink-0">
                  Local
                </div>
                <div>
                  <p className="font-medium text-slate-900">Data sovereignty</p>
                  <p className="text-sm text-slate-600">FERPA/GDPR compliant infrastructure</p>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-slate-200 animate-fadeInUp delay-500">
              <div className="flex items-center gap-3 text-sm font-medium text-slate-900">
                <span className="text-lg">✓</span>
                AI tutor participation graded and valued in course assessment
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
