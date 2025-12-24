import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
// import AnimatedBackground from "@/components/animated-background"
import LocationCards from "@/components/location-cards"
import HighlightsGrid from "@/components/highlights-grid"
import Timeline from "@/components/timeline"
import MarathiStatement from "@/components/marathi-statement"
import ProblemStatementTabs from "@/components/problem-statement-tabs"
import TechStack from "@/components/tech-stack"
import PastMedia from "@/components/past-media"
import AboutSection from "@/components/about-section"
import DevelopersSection from "@/components/developers-section"
import OrganizersSection from "@/components/organizers-section"
import FAQSection from "@/components/faq-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* <AnimatedBackground /> */}
      <Navbar />
      <div id="home">
        <HeroSection />
      </div>
      {/* <LocationCards /> */}
      <div id="highlights">
        {/* <HighlightsGrid /> */}
      </div>
      <MarathiStatement />
      <div id="problem-statements">
        <ProblemStatementTabs />
      </div>
      <div id="timeline">
        <Timeline />
      </div>
      <div id="tech-stack">
        <TechStack />
      </div>
      <div id="past-media">
        <PastMedia />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      
      <div id="organizers">
        <OrganizersSection />
      </div>
      <DevelopersSection />
      <div id="faq">
        <FAQSection />
      </div>
      <Footer />
    </main>
  )
}
