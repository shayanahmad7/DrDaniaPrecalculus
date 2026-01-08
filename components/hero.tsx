"use client"

import { useEffect, useState } from "react"

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="w-full bg-gradient-to-b from-white via-slate-50 to-white py-32 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl opacity-40 animate-floatDown"></div>
        <div
          className="absolute bottom-20 left-20 w-96 h-96 bg-blue-50/40 rounded-full blur-3xl opacity-30"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="animate-fadeInUp">
          <h1 className="text-6xl sm:text-7xl font-bold text-slate-900 mb-8 leading-tight text-balance">SovereignAI</h1>
          <p className="text-xl sm:text-2xl text-slate-700 mb-8 max-w-3xl mx-auto leading-relaxed font-medium animate-fadeInUp delay-100">
            A research initiative led by Dr. Dania Zantout in the Math1000A precalculus course at NYU Abu Dhabi,
            exploring how to responsibly integrate artificial intelligence into university mathematics instruction while
            maintaining pedagogical integrity and protecting student privacy.
          </p>
          <div className="flex justify-center gap-2 animate-fadeInUp delay-200">
            <div className="h-1 w-12 bg-gradient-to-r from-transparent via-blue-600 to-transparent rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
