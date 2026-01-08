"use client"

import { ScrollAnimate } from "@/components/scroll-animate"

export function Overview() {
  return (
    <section className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <ScrollAnimate animation="fadeUp">
          <h2 className="text-5xl font-bold text-slate-900 mb-6">Project Overview</h2>
        </ScrollAnimate>

        <ScrollAnimate animation="slideLeft" delay={100}>
          <div className="h-1 w-16 bg-blue-600 rounded-full mb-12"></div>
        </ScrollAnimate>

        <div className="space-y-8 text-slate-700 leading-relaxed">
          <ScrollAnimate animation="fadeUp" delay={200}>
            <p className="text-lg">
              Mathematics education faces a critical challenge: how do institutions harness the capabilities of generative
              AI while safeguarding student privacy, ensuring pedagogical alignment, and maintaining academic integrity?
              This research project presents a comprehensive answer.
            </p>
          </ScrollAnimate>

          <ScrollAnimate animation="fadeUp" delay={300}>
            <p className="text-lg">
              SovereignAI represents a novel approach to precalculus instruction. Rather than replacing traditional
              homework with generic AI assistance, we have developed a modular, curriculum-aligned AI tutoring system
              comprising 31 specialized tutors, each dedicated to one of 31 chapters in the course. Every tutor is
              carefully constrained to course-specific materials and learning objectives, operating within established
              pedagogical principles rather than as an unrestricted information tool.
            </p>
          </ScrollAnimate>

          <ScrollAnimate animation="fadeUp" delay={400}>
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-10 border border-slate-200 shadow-md hover:shadow-lg transition-smooth-lg mt-12">
            <h3 className="text-2xl font-semibold text-slate-900 mb-8">The Framework at a Glance</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ScrollAnimate animation="slideLeft" delay={500}>
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-600 text-white font-bold flex-shrink-0">
                    31
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Modular AI tutors</p>
                    <p className="text-sm text-slate-600">One per chapter</p>
                  </div>
                </div>
              </ScrollAnimate>
              <ScrollAnimate animation="slideRight" delay={500}>
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-600 text-white font-bold flex-shrink-0">
                    6
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Learning cycle phases</p>
                    <p className="text-sm text-slate-600">Integrated throughout day</p>
                  </div>
                </div>
              </ScrollAnimate>
              <ScrollAnimate animation="slideLeft" delay={600}>
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-600 text-white font-bold flex-shrink-0">
                    100%
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Curriculum-aligned</p>
                    <p className="text-sm text-slate-600">All interactions bounded by course materials</p>
                  </div>
                </div>
              </ScrollAnimate>
              <ScrollAnimate animation="slideRight" delay={600}>
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-emerald-600 text-white font-bold flex-shrink-0">
                    Local
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Data sovereignty</p>
                    <p className="text-sm text-slate-600">FERPA/GDPR compliant infrastructure</p>
                  </div>
                </div>
              </ScrollAnimate>
            </div>
            <ScrollAnimate animation="fadeUp" delay={700}>
              <div className="mt-6 pt-6 border-t border-slate-200">
                <div className="flex items-center gap-3 text-sm font-medium text-slate-900">
                  <span className="text-lg">✓</span>
                  AI tutor participation graded and valued in course assessment
                </div>
              </div>
            </ScrollAnimate>
          </div>
          </ScrollAnimate>
        </div>
      </div>
    </section>
  )
}
