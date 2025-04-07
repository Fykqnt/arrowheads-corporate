"use client"

import { useState, useEffect } from "react"
import { ChevronRight, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

const menuItems = [

  {
    title: "What We Do",
    items: [
      { name: "Research", url: "/applications" },
      { name: "Industry Applications", url: "/applications" },
    ],
  },
  {
    title: "How To Join",
    items: [
      { name: "Career Opportunities", url: "/contact" }
    ],
  },
]

const staticLinks = [
  { name: "Company Info", url: "/info" },
  { name: "Contact", url: "/contact" },
]

export default function Navigation() {
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Check screen size
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    // Initial check
    checkIfMobile()
    
    // Add listener for window resize
    window.addEventListener('resize', checkIfMobile)
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile)
  }, [])

  // Animation variants for staggered children
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 0.8,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 1.5 / 3, // Start after hero animation begins (3x faster)
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  // If mobile, render hamburger and mobile menu
  if (isMobile) {
    return (
      <>
        {/* Hamburger menu button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
          className="fixed top-4 right-4 p-2 text-white z-50 bg-gray-800/50 rounded-md pointer-events-auto"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              className="fixed inset-0 bg-black/95 z-40 overflow-y-auto pointer-events-auto flex flex-col pt-16 px-6"
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <div className="space-y-4 mt-4">
                <div className="pointer-events-auto">
                  <Link href="/" className="text-blue-400 font-medium hover:text-blue-300 transition-colors">
                    Home
                  </Link>
                </div>

                {menuItems.map((menu) => (
                  <div key={menu.title} className="space-y-2">
                    <div
                      className="flex items-center cursor-pointer group pointer-events-auto"
                      onClick={() => setExpandedMenu(expandedMenu === menu.title ? null : menu.title)}
                    >
                      <ChevronRight
                        className={`h-4 w-4 mr-2 transition-transform ${expandedMenu === menu.title ? "rotate-90" : ""}`}
                      />
                      <span className="text-gray-300 group-hover:text-white transition-colors">{menu.title}</span>
                    </div>

                    {expandedMenu === menu.title && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="ml-6 space-y-2"
                      >
                        {menu.items.map((item) => (
                          <div key={item.name} className="pointer-events-auto">
                            <Link href={item.url} className="text-gray-400 hover:text-white transition-colors block">
                              {item.name}
                            </Link>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>

              {/* Static links */}
              <div className="space-y-2 pt-4 mt-6 border-t border-gray-800">
                {staticLinks.map((link) => (
                  <div key={link.name} className="pointer-events-auto">
                    <Link href={link.url} className="text-gray-300 hover:text-white transition-colors block">
                      {link.name}
                    </Link>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    )
  }

  // Desktop navigation
  return (
    <motion.nav 
      className="space-y-6 pointer-events-none h-full pl-6 pr-8 py-8 backdrop-blur-md bg-black/30 rounded-l-lg" 
      variants={container} 
      initial="hidden" 
      animate="show"
    >
      {/* Main navigation */}
      <div className="space-y-4">
        <motion.div variants={item} className="pointer-events-auto">
          <Link href="/" className="text-blue-400 font-medium hover:text-blue-300 transition-colors">
            Home
          </Link>
        </motion.div>

        {menuItems.map((menu) => (
          <motion.div key={menu.title} className="space-y-2" variants={item}>
            <div
              className="flex items-center cursor-pointer group pointer-events-auto"
              onClick={() => setExpandedMenu(expandedMenu === menu.title ? null : menu.title)}
            >
              <ChevronRight
                className={`h-4 w-4 mr-2 transition-transform ${expandedMenu === menu.title ? "rotate-90" : ""}`}
              />
              <span className="text-gray-300 group-hover:text-white transition-colors">{menu.title}</span>
            </div>

            {expandedMenu === menu.title && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="ml-6 space-y-2"
              >
                {menu.items.map((item) => (
                  <div key={item.name} className="pointer-events-auto">
                    <Link href={item.url} className="text-gray-400 hover:text-white transition-colors block">
                      {item.name}
                    </Link>
                  </div>
                ))}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Static links */}
      <motion.div className="space-y-2 pt-4 border-t border-gray-800" variants={item}>
        {staticLinks.map((link) => (
          <div key={link.name} className="pointer-events-auto">
            <Link href={link.url} className="text-gray-300 hover:text-white transition-colors block">
              {link.name}
            </Link>
          </div>
        ))}
      </motion.div>
    </motion.nav>
  )
}

