"use client"

import { motion } from "framer-motion"

export default function Hero() {
  return (
    <motion.div
      className="space-y-8 pointer-events-none absolute bottom-16 left-0 right-0 md:left-8 md:right-auto px-4 md:px-0 max-w-3xl"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: 1.2 / 3, // Start after bubbles begin animating (3x faster)
        ease: "easeOut",
      }}
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-notosans">We are Arrowheads Inc.</h1>
      <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed font-notosans">
        We build systems that reduce the entropy by implementing Maxwell's Demon in the real world.
      </p>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-12 md:mt-16 font-notosans">Let's reduce the entropy autonomously.</h2>
    </motion.div>
  )
}

