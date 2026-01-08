"use client"

import { ReactNode } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

interface ScrollAnimateProps {
  children: ReactNode
  className?: string
  animation?: "fadeUp" | "fadeDown" | "slideLeft" | "slideRight" | "scale" | "fade"
  delay?: number
  threshold?: number
  triggerOnce?: boolean
}

export function ScrollAnimate({
  children,
  className = "",
  animation = "fadeUp",
  delay = 0,
  threshold = 0.1,
  triggerOnce = false,
}: ScrollAnimateProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold, triggerOnce })

  const animationClasses = {
    fadeUp: "scroll-animate-fade-up",
    fadeDown: "scroll-animate-fade-down",
    slideLeft: "scroll-animate-slide-left",
    slideRight: "scroll-animate-slide-right",
    scale: "scroll-animate-scale",
    fade: "scroll-animate-fade",
  }

  return (
    <div
      ref={ref}
      className={`${className} ${animationClasses[animation]} ${isVisible ? "scroll-visible" : ""}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

