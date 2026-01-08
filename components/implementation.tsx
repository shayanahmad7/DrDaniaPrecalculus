"use client"
import { useState, useEffect } from "react"

export function Implementation() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl font-bold text-slate-900 mb-6 animate-fadeInUp">Technical Implementation</h2>
          <p className="text-xl text-slate-700 leading-relaxed max-w-3xl animate-fadeInUp delay-100">
            SovereignAI is built on a thoughtful technical architecture designed to balance innovation, scalability, and
            institutional control over student data. Our approach evolved from a privacy-first local infrastructure to
            an enterprise partnership while maintaining the same pedagogical principles.
          </p>
        </div>

        {/* Summer 2025: Local Infrastructure Section */}
        <div className="mb-16">
          <div className="bg-white rounded-xl p-10 border border-slate-200 shadow-md hover:shadow-lg transition-smooth-lg animate-fadeInUp delay-200">
            <h3 className="text-3xl font-bold text-slate-900 mb-6">Summer 2025: Local OpenWebUI Infrastructure</h3>

            <div className="space-y-6 mb-8">
              <p className="text-lg text-slate-700 leading-relaxed">
                The initial pilot utilized an open-source, locally hosted approach powered by{" "}
                <span className="font-semibold text-slate-900">OpenWebUI</span>. All AI processing occurred on
                institutional servers, ensuring complete data sovereignty and FERPA/GDPR compliance. This approach
                allowed us to maintain full control over model behavior and student interactions while demonstrating the
                feasibility of privacy-preserving AI tutoring at scale.
              </p>

              <div className="bg-blue-50 rounded-lg p-8 border border-blue-200">
                <h4 className="font-bold text-slate-900 mb-4 text-lg">Core Technical Components</h4>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-600 text-white font-bold text-sm">
                        1
                      </div>
                    </div>
                    <div>
                      <h5 className="font-semibold text-slate-900 mb-1">User Authentication &amp; Access Control</h5>
                      <p className="text-slate-700">
                        Secure authentication system managing student access to course-specific AI tutors, ensuring only
                        enrolled students can interact with curriculum-aligned modules.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-600 text-white font-bold text-sm">
                        2
                      </div>
                    </div>
                    <div>
                      <h5 className="font-semibold text-slate-900 mb-1">RAG Knowledge Base</h5>
                      <p className="text-slate-700">
                        Retrieval-Augmented Generation system storing course materials (lecture notes, problem sets,
                        solutions) embedded in a vector database (ChromaDB). Uses all-MiniLM-L6-v2 embedding model for
                        semantic search.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-600 text-white font-bold text-sm">
                        3
                      </div>
                    </div>
                    <div>
                      <h5 className="font-semibold text-slate-900 mb-1">Retrieval &amp; Constraint System</h5>
                      <p className="text-slate-700">
                        When students submit queries, the system retrieves the top-K most relevant course materials
                        using semantic similarity. This constrains AI responses to only course-aligned content.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-600 text-white font-bold text-sm">
                        4
                      </div>
                    </div>
                    <div>
                      <h5 className="font-semibold text-slate-900 mb-1">LLM Processing (Ollama)</h5>
                      <p className="text-slate-700">
                        Locally-hosted language models (Llama 3, Qwen-3, or Gemma 3) process student queries using
                        retrieved course materials and system prompts that enforce pedagogical constraints.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-600 text-white font-bold text-sm">
                        5
                      </div>
                    </div>
                    <div>
                      <h5 className="font-semibold text-slate-900 mb-1">Pedagogy-Aligned Response Generation</h5>
                      <p className="text-slate-700">
                        System prompts enforce specific pedagogical strategies: Socratic questioning, step-by-step
                        guidance, emphasis on conceptual understanding rather than direct answers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-slate-700 leading-relaxed">
                This architecture ensures that AI tutors operate exclusively within course materials, preventing
                students from seeking answers outside the intended learning scope. The modular design allows each of the
                31 chapter-specific tutors to be independently maintained and updated without affecting the broader
                system.
              </p>
            </div>

            {/* Architecture Diagram */}
            <div className="my-12 bg-slate-900 rounded-xl p-8 flex items-center justify-center animate-scaleIn delay-300">
              <div className="w-full h-auto">
                <img
                  src="/images/openwebui-architecture.png"
                  alt="OpenWebUI System Architecture Diagram showing user authentication, query processing, RAG knowledge base with ChromaDB vector database, and local LLM inference with Ollama"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>

            <div className="bg-emerald-50 rounded-lg p-8 border border-emerald-200 animate-fadeInUp delay-400">
              <h4 className="font-bold text-slate-900 mb-3 text-lg">Data Sovereignty &amp; Security</h4>
              <ul className="space-y-3 text-slate-700">
                <li className="flex gap-3">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>
                    <span className="font-semibold">Zero external data transmission:</span> All student interactions,
                    course materials, and AI processing remain on institutional servers
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>
                    <span className="font-semibold">FERPA/GDPR compliant:</span> No data sharing with external AI
                    vendors; complete institutional control
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>
                    <span className="font-semibold">Open-source transparency:</span> OpenWebUI and Ollama are
                    open-source, allowing institutional audit and customization
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>
                    <span className="font-semibold">Modular separation:</span> Each chapter's AI tutor has isolated
                    access to only its course materials
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Spring 2026: NYU Pilot GenAI Section */}
        <div className="mb-16">
          <div className="bg-white rounded-xl p-10 border border-slate-200 shadow-md hover:shadow-lg transition-smooth-lg animate-fadeInUp delay-300">
            <h3 className="text-3xl font-bold text-slate-900 mb-6">Spring 2026: NYU Pilot GenAI Partnership</h3>

            <div className="space-y-6">
              <p className="text-lg text-slate-700 leading-relaxed">
                To scale from 7 pilot students to 70+ students in the full spring cohort, we partnered with NYU's Pilot
                GenAI initiative. This enterprise partnership provides institutional-grade infrastructure while
                maintaining all pedagogical and ethical standards established in our initial implementation.
              </p>

              <div className="bg-slate-50 rounded-lg p-8 border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-4 text-lg">Partnership Model &amp; Safeguards</h4>
                <div className="space-y-4 text-slate-700">
                  <p>
                    <span className="font-semibold text-slate-900">Formal Data-Use Agreements:</span> All vendor
                    partners (OpenAI GPT, Google Gemini) have signed institutional agreements guaranteeing that NYU
                    workspace data will not be used to train their models. This protects student privacy while enabling
                    access to cutting-edge AI capabilities.
                  </p>
                  <p>
                    <span className="font-semibold text-slate-900">Curriculum-Aligned Constraints:</span> The modular
                    design of SovereignAI remains unchanged. Each of the 31 chapter-specific tutors is still constrained
                    to course materials, ensuring that scaling to 70+ students does not compromise pedagogical control.
                  </p>
                  <p>
                    <span className="font-semibold text-slate-900">Concurrent Inference:</span> The GenAI platform
                    supports concurrent requests from multiple students, enabling real-time tutoring at scale without
                    degradation of response quality.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-amber-50 rounded-lg p-6 border border-amber-200 animate-slideInLeft delay-400">
                  <h4 className="font-bold text-slate-900 mb-3 text-lg flex items-center gap-2">
                    <span className="text-xl">📊</span> Summer 2025 Pilot
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex gap-2">
                      <span className="text-amber-600 font-bold">•</span>
                      <span>7 students</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-amber-600 font-bold">•</span>
                      <span>Local OpenWebUI infrastructure</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-amber-600 font-bold">•</span>
                      <span>100% data sovereignty</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-amber-600 font-bold">•</span>
                      <span>Proof of concept validation</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-amber-600 font-bold">•</span>
                      <span>31 course-aligned tutors</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 border border-blue-200 animate-slideInRight delay-400">
                  <h4 className="font-bold text-slate-900 mb-3 text-lg flex items-center gap-2">
                    <span className="text-xl">🚀</span> Spring 2026 Scale
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>70+ students</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>NYU Pilot GenAI partnership</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>Enterprise-grade scalability</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>Data-use agreements in place</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>Consistent pedagogical model</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Privacy &amp; Compliance */}
        <div>
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-xl p-10 text-white shadow-lg animate-fadeInUp delay-500">
            <h3 className="text-3xl font-bold mb-6">Privacy, Compliance &amp; Institutional Control</h3>
            <div className="space-y-6">
              <p className="text-lg text-slate-100 leading-relaxed">
                Both our local infrastructure and the GenAI partnership ensure strict compliance with{" "}
                <span className="font-semibold">FERPA (Family Educational Rights and Privacy Act)</span> and{" "}
                <span className="font-semibold">GDPR (General Data Protection Regulation)</span> requirements. Student
                data is treated as institutional property and protected under formal agreements with all AI service
                providers.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-slate-700/50 rounded-lg p-6 border border-slate-600">
                  <h4 className="font-bold text-white mb-3">Data Minimization</h4>
                  <p className="text-slate-200 text-sm">
                    Only course-relevant data is accessible to AI tutors. Personal student information, grades, and
                    non-academic data are completely isolated.
                  </p>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-6 border border-slate-600">
                  <h4 className="font-bold text-white mb-3">Access Control</h4>
                  <p className="text-slate-200 text-sm">
                    Fine-grained control ensures each tutor module only accesses materials from its specific chapter,
                    preventing unauthorized cross-curriculum access.
                  </p>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-6 border border-slate-600">
                  <h4 className="font-bold text-white mb-3">Institutional Oversight</h4>
                  <p className="text-slate-200 text-sm">
                    All AI interactions are logged and auditable. Institutional administrators maintain real-time
                    visibility into system behavior and student interactions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
