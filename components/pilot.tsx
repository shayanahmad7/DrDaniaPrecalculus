export function Pilot() {
  return (
    <section className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl font-bold text-slate-900 mb-6 animate-fadeInUp">Research Timeline and Scale</h2>

        <div className="h-1 w-16 bg-blue-600 rounded-full mb-12 animate-slideInLeft"></div>

        <div className="space-y-8">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-10 border-l-4 border-amber-600 shadow-lg hover:shadow-xl transition-smooth-lg animate-slideInLeft delay-100">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Summer 2025: Pilot Validation</h3>
            <p className="text-slate-700 leading-relaxed text-lg">
              The initial pilot of SovereignAI was conducted with 7 students in the summer precalculus course. This
              smaller cohort allowed us to carefully design, test, and refine the AI tutoring modules, validate
              pedagogical alignment, and collect evidence of learning outcomes and student experience. The pilot
              provided critical insights into how students interact with curriculum-constrained AI tutors and
              demonstrated the feasibility of the modular design approach.
            </p>
            <div className="mt-6 pt-6 border-t border-amber-200 flex items-center gap-2 text-sm font-semibold text-amber-900">
              <span className="text-lg">✓</span> Foundation for Spring 2026 scale-up
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-10 border-l-4 border-blue-600 shadow-lg hover:shadow-xl transition-smooth-lg animate-slideInRight delay-200">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Spring 2026: Full Implementation</h3>
            <p className="text-slate-700 leading-relaxed text-lg">
              We are now preparing to scale the framework to the full spring semester cohort of approximately 70
              students. This expansion will test the scalability of our technical architecture, the robustness of our
              pedagogical design, and the generalizability of insights from the pilot. The move to NYU Pilot GenAI
              infrastructure is essential for supporting this increased enrollment while maintaining the privacy and
              pedagogical standards we established.
            </p>
            <div className="mt-6 pt-6 border-t border-blue-200 flex items-center gap-2 text-sm font-semibold text-blue-900">
              <span className="text-lg">✓</span> Scaling to enterprise-grade infrastructure
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-10 border border-slate-700 shadow-xl animate-fadeInUp delay-300 text-white">
            <p className="text-lg leading-relaxed">
              This progression from pilot to full implementation represents a methodical research approach: validate the
              concept with a small cohort, refine based on evidence, then scale with institutional partnership.
              Throughout this journey, the framework remains grounded in pedagogical principles and ethical AI
              integration.
            </p>
            <div className="mt-6 pt-6 border-t border-slate-700 flex items-center gap-2 text-sm font-semibold">
              <span className="text-lg">↗</span> A journey of rigorous, responsible scaling
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
