"use client"

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { motion } from 'framer-motion'
import Navigation from "@/components/navigation"
import BubbleBackground from "@/components/bubble-background"
import Footer from "@/components/footer"

// Mock client data
const clientData = [
  {
    id: 1,
    name: 'Trading Company',
    description: 'A trading company with +5,000 employees seeking to optimize their customer service operations with AI.',
    solution: 'Developed a document detection AI Agent with high customer satisfaction.'
  },
  {
    id: 2,
    name: 'Crypto Exchange',
    description: 'A crypto exchange seeking to optimize their hiring operations with AI.',
    solution: 'Built an AI Agent to efficiently manage the RPO process',
  },
  {
    id: 3,
    name: 'Technology Enterprise',
    description: 'A growing AI provider needing to enhance their employee performance management.',
    solution: 'Built and integrated a Software as a Service (SaaS) to help the company manage and optimize their employee performance.',
  }
]

export default function Applications() {
  return (
    <main className="relative min-h-screen bg-[#121212] text-white overflow-hidden flex flex-col">
      {/* Background with bubbles */}
      <div className="absolute inset-[40px] z-0 pointer-events-auto">
        <BubbleBackground />
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-4 sm:py-8 flex-grow flex flex-col">
        {/* Back button */}
        <div className="mb-4 sm:mb-8">
          <Link href="/" className="inline-flex items-center text-gray-300 hover:text-white transition-colors pointer-events-auto">
            <ArrowLeft className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            <span>Back to Home</span>
          </Link>
        </div>
        
        {/* Navigation on the right - hidden on mobile, visible on larger screens */}
        <div className="hidden md:block fixed top-0 right-0 h-full w-1/3 max-w-xs z-20 pointer-events-none pr-0">
          <Navigation />
        </div>
        
        {/* Content container with responsive width */}
        <div className="relative w-full md:max-w-[calc(100%-16rem)] lg:max-w-[calc(100%-18rem)]">
          {/* Header */}
          <motion.div 
            className="mb-8 sm:mb-12 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Our Applications</h1>
            <p className="text-base sm:text-lg text-gray-300">
              We've helped enterprises and SMBs reduce entropy and implement intelligent systems.
              Here are some of our recent projects that demonstrate our capabilities.
            </p>
          </motion.div>
          
          {/* Client Case Studies */}
          <div className="grid gap-4 sm:gap-6 md:gap-8 lg:gap-12 mb-8 sm:mb-16 pointer-events-auto">
            {clientData.map((client, index) => (
              <motion.div 
                key={client.id}
                className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:bg-white/10 transition-colors p-4 sm:p-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              >
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">{client.name}</h2>
                <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4">{client.description}</p>
                <div className="bg-black/30 p-3 sm:p-4 rounded-md">
                  <h3 className="text-base sm:text-lg font-semibold mb-2">Our Solution</h3>
                  <p className="text-sm sm:text-base text-gray-200">{client.solution}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 mt-auto">
        <Footer />
      </div>
    </main>
  )
}
