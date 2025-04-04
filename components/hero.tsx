"use client"

import { motion } from "framer-motion"

export default function Hero() {
  return (
    <motion.div
      className="space-y-8 pointer-events-none"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: 1.2 / 3, // Start after bubbles begin animating (3x faster)
        ease: "easeOut",
      }}
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">We are Arrowheads Inc.</h1>
      <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed">
        We build systems that reduce the entropy by implementing Maxwell's Demon in the real world.
      </p>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-12 md:mt-16">Let's Build Something Antifragile.</h2>
    </motion.div>
  )
}

