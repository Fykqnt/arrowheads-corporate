"use client"

import Hero from "@/components/hero"
import Navigation from "@/components/navigation"
import BubbleBackground from "@/components/bubble-background"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#121212] text-white overflow-hidden flex flex-col">
      {/* Background with bubbles */}
      <div className="absolute inset-0 z-0 pointer-events-auto">
        <BubbleBackground />
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-8 pointer-events-none flex-grow">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="w-full md:w-2/3 pr-0 md:pr-8 pointer-events-none">
            <Hero />
          </div>
          <div className="w-full md:w-1/3 mt-8 md:mt-0 pointer-events-none">
            <Navigation />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 pointer-events-none mt-auto">
        <Footer />
      </div>
    </main>
  )
}

