"use client"

import Hero from "@/components/hero"
import Navigation from "@/components/navigation"
import BubbleBackground from "@/components/bubble-background"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#121212] text-white overflow-hidden flex flex-col">
      {/* Background with bubbles */}
      <div className="absolute inset-[40px] z-0 pointer-events-auto">
        <BubbleBackground />
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-8 pointer-events-none flex-grow flex flex-col">
        {/* Navigation on the right */}
        <div className="fixed top-0 right-0 h-full w-1/3 max-w-xs z-20 pointer-events-none pr-0">
          <Navigation />
        </div>
        
        {/* Hero positioned at the bottom for all screen sizes */}
        <div className="relative flex-grow w-full flex items-end">
          <Hero />
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 pointer-events-none mt-auto">
        <Footer />
      </div>
    </main>
  )
}

