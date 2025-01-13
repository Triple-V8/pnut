import { NavHeader } from "@/components/nav-header"
import { HeroSection } from "@/components/hero-section"
import { StorySection } from "@/components/story-section"
import { TokenomicsSection } from "@/components/tokenomics-section"
import { CommunitySection } from "@/components/community-section"

export default function Home() {
  return (
    <div className="min-h-screen">
      <NavHeader />
      <main>
        <HeroSection />
        <StorySection />
        <TokenomicsSection />
        <CommunitySection />
      </main>
      <footer className="py-6 text-center text-sm text-neutral-500 bg-[#1e1e1e] text-white dark:text-neutral-400">
        <p>© 2025 PNUT - Breaking Free from Traditional Finance</p>
      </footer>
    </div>
  )
}

