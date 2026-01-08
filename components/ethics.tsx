export function Ethics() {
  return (
    <section className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl font-bold text-slate-900 mb-6 animate-fadeInUp">Ethical AI Integration</h2>

        <div className="h-1 w-16 bg-blue-600 rounded-full mb-8 animate-slideInLeft"></div>

        <p className="text-xl text-slate-700 leading-relaxed mb-16 max-w-3xl animate-fadeInUp delay-100">
          SovereignAI was designed from the ground up to address the ethical challenges of deploying generative AI in
          higher education. Rather than adopting generic AI tools and retrofitting them to educational contexts, we
          developed an approach that places pedagogical integrity and student protection at the center.
        </p>

        <div className="space-y-10">
          <div>
            <h3 className="text-3xl font-semibold text-slate-900 mb-10 animate-fadeInUp delay-200">
              Core Ethical Principles
            </h3>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-md hover:shadow-lg transition-smooth-lg animate-fadeInUp delay-300 group">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-1 bg-gradient-to-b from-blue-600 to-blue-400 rounded-full group-hover:from-blue-700 group-hover:to-blue-500 transition-colors"></div>
                  <div className="flex-grow">
                    <h4 className="font-bold text-slate-900 mb-2 text-lg">Data Sovereignty</h4>
                    <p className="text-slate-700 leading-relaxed">
                      Student data belongs to the institution. Our infrastructure ensures that no student interaction
                      data is transmitted to external vendors without explicit institutional agreement and privacy
                      safeguards.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-md hover:shadow-lg transition-smooth-lg animate-fadeInUp delay-400 group">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-1 bg-gradient-to-b from-emerald-600 to-emerald-400 rounded-full group-hover:from-emerald-700 group-hover:to-emerald-500 transition-colors"></div>
                  <div className="flex-grow">
                    <h4 className="font-bold text-slate-900 mb-2 text-lg">Pedagogical Alignment</h4>
                    <p className="text-slate-700 leading-relaxed">
                      AI tutors are constrained to course materials and learning objectives. They are not
                      general-purpose tools, but rather specialized modules that support specific learning outcomes in
                      precalculus.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-md hover:shadow-lg transition-smooth-lg animate-fadeInUp delay-500 group">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-1 bg-gradient-to-b from-purple-600 to-purple-400 rounded-full group-hover:from-purple-700 group-hover:to-purple-500 transition-colors"></div>
                  <div className="flex-grow">
                    <h4 className="font-bold text-slate-900 mb-2 text-lg">Academic Integrity</h4>
                    <p className="text-slate-700 leading-relaxed">
                      Rather than enabling academic dishonesty, the framework transforms AI into a tool for guided
                      learning. Students engage with AI tutors before and after class, with in-class assessment
                      providing direct evidence of understanding.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-md hover:shadow-lg transition-smooth-lg animate-fadeInUp delay-600 group">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-1 bg-gradient-to-b from-amber-600 to-amber-400 rounded-full group-hover:from-amber-700 group-hover:to-amber-500 transition-colors"></div>
                  <div className="flex-grow">
                    <h4 className="font-bold text-slate-900 mb-2 text-lg">Transparency and Control</h4>
                    <p className="text-slate-700 leading-relaxed">
                      Instructors maintain visibility into all AI-student interactions. The modular design allows
                      fine-grained control over tutor behavior, ensuring AI remains a tool that instructors understand
                      and can adjust.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-md hover:shadow-lg transition-smooth-lg animate-fadeInUp delay-700 group">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-1 bg-gradient-to-b from-indigo-600 to-indigo-400 rounded-full group-hover:from-indigo-700 group-hover:to-indigo-500 transition-colors"></div>
                  <div className="flex-grow">
                    <h4 className="font-bold text-slate-900 mb-2 text-lg">Intentional Participation</h4>
                    <p className="text-slate-700 leading-relaxed">
                      AI tutor engagement is graded and valued, creating incentives for meaningful interaction. Students
                      are encouraged to see AI as a learning resource to be actively engaged with, not passively
                      consumed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-10 border border-blue-200 shadow-lg hover:shadow-xl transition-smooth-lg animate-fadeInUp delay-800">
            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="text-3xl">🔬</span>
              Research Contribution
            </h3>
            <p className="text-slate-700 leading-relaxed text-lg">
              SovereignAI contributes to the emerging discourse on responsible AI integration in higher education. By
              demonstrating a practical framework that addresses privacy, pedagogy, and ethics simultaneously, we hope
              to provide a replicable model for other institutions seeking to harness AI capabilities while upholding
              educational values and protecting student interests.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
