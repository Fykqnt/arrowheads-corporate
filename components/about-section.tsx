"use client"

import { motion } from "framer-motion"

export default function AboutSection() {
  return (
    <motion.div
      className="py-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">We are Arrowheads Inc.,</h2>
        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
          a pioneering AI technology firm at the forefront of innovation.
        </p>
      </div>
    </motion.div>
  )
}

