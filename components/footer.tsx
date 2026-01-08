export function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-slate-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div>
            <h4 className="font-semibold text-white mb-3">Course</h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              Math1000A: Mathematics for Statistics and Calculus Part I
              <br />
              NYU Abu Dhabi
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Leadership</h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              Dr. Dania Zantout
              <br />
              NYU Abu Dhabi
              <br />
              dz41@nyu.edu
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Research Team</h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              Dr. Dania Zantout
              <br />
              Shayan Ahmad
              <br />
              Lawrence Torres
            </p>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-10">
          <p className="text-slate-300 text-sm leading-relaxed">
            SovereignAI represents a research initiative in ethical AI integration for mathematics education. This work
            explores how institutions can responsibly deploy generative AI while maintaining student privacy,
            pedagogical alignment, and academic integrity. The framework is grounded in established pedagogical theories
            and informed by practical experience from our summer 2025 pilot.
          </p>
          <p className="text-slate-400 text-xs mt-8">Last updated: January 2026</p>
        </div>
      </div>
    </footer>
  )
}
