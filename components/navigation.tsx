"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

const menuItems = [
  {
    title: "Who We Are",
    items: [{ name: "Our Team", url: "/team" }],
  },
  {
    title: "What We Do",
    items: [
      { name: "Research", url: "/research" },
      { name: "Industry Applications", url: "/applications" },
    ],
  },
  {
    title: "How To Join",
    items: [
      { name: "Career Opportunities", url: "/careers" },
      { name: "FAQ", url: "/faq" },
    ],
  },
]

const staticLinks = [
  { name: "News", url: "/news" },
  { name: "Contact", url: "/contact" },
]

export default function Navigation() {
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null)

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

