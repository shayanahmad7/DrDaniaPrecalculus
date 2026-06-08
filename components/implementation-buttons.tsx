import { ArrowRight } from "lucide-react"
import { implementations } from "@/lib/implementations"

type ImplementationButtonsProps = {
  className?: string
  label?: string
}

export function ImplementationButtons({
  className = "",
  label = "Implementation shortcuts",
}: ImplementationButtonsProps) {
  return (
    <nav className={`implementation-buttons ${className}`.trim()} aria-label={label}>
      {implementations.map((implementation) => (
        <a className={`implementation-button accent-${implementation.accent}`} href={`/implementations/${implementation.slug}`} key={implementation.slug}>
          <span>{implementation.index}</span>
          <strong>{implementation.shortTitle}</strong>
          <small>{implementation.period}</small>
          <ArrowRight size={15} aria-hidden="true" />
        </a>
      ))}
    </nav>
  )
}
