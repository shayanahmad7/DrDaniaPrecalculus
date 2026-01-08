import { Hero } from "@/components/hero"
import { Overview } from "@/components/overview"
import { Framework } from "@/components/framework"
import { Implementation } from "@/components/implementation"
import { Pilot } from "@/components/pilot"
import { Ethics } from "@/components/ethics"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "SovereignAI | Ethical AI in Precalculus Education",
  description: "A research framework for teaching precalculus with responsibly integrated AI tutoring at NYU Abu Dhabi",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Overview />
      <Framework />
      <Implementation />
      <Pilot />
      <Ethics />
      <Footer />
    </main>
  )
}
