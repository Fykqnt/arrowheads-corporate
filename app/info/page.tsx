"use client"

import Navigation from "@/components/navigation"
import BubbleBackground from "@/components/bubble-background"
import Footer from "@/components/footer"

export default function Info() {
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
        
        {/* Company Info Panel */}
        <div className="relative max-w-2xl mx-auto mt-16 w-full pointer-events-auto">
          <div className="backdrop-blur-md bg-black/30 rounded-lg p-8 space-y-6">
            <h1 className="text-3xl font-bold text-blue-400">Company Information</h1>
            
            <div className="space-y-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-300">Company Name</h2>
                <p className="text-gray-400">Arrowheads Inc.</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-300">Address</h2>
                <p className="text-gray-400">
                  Yusen Building 4F<br />
                  2-3-2, Marunouchi, Chiyoda-ku<br />
                  Tokyo, Japan<br />
                  Country
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-300">Leadership</h2>
                <p className="text-gray-400">
                  CEO: Fuyuki Matsubara<br />

                </p>
              </div>

            </div>
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
