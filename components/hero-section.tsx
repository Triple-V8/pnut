"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"
import { AnimatedBackground } from "./animated-background"
import { AnimatedText } from "./animated-text"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#c1f7c1] py-32">
      <AnimatedBackground />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container relative z-10"
      >
        <div className="text-center max-w-4xl mx-auto">
          <div className="space-y-6 mb-12">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter font-comic">
              <AnimatedText>Meet PNUT</AnimatedText>
              <br />
              <motion.span
                className="inline-block bg-gradient-to-r from-primary to-[#2a2a2a] bg-clip-text text-transparent"
                animate={{ 
                  textShadow: [
                    "0 5px rgba(0,0,0,0.2)",
                    "0 15px rgba(0,0,0,0.2)",
                    "0 5px rgba(0,0,0,0.2)"
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                The Most Wanted Memecoin
              </motion.span>
            </h1>
            <motion.p 
              className="text-xl text-neutral-500 max-w-2xl mx-auto dark:text-neutral-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              From jail breaker to token maker - join the nuttiest revolution in crypto
            </motion.p>
          </div>
          
          <motion.div 
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
          <a href="#community">
            <Button 
              size="lg" 
              className="font-comic text-lg"
              style={{
                background: "linear-gradient(45deg, #c1f7c1, #2a2a2a)",
              }}
            >
              Join the Heist
            </Button>
          </a>
          <a href="#story">
            <Button 
              variant="outline" 
              size="lg" 
              className="font-comic text-lg border-2"
            >
              Read the Story
            </Button>
          </a>
          
          </motion.div>

          <motion.div 
            className="relative h-[300px] mt-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
          >
            <Image
              src="/image/pnutlogo.png"
              alt="PNUT Mascot"
              fill
              className="object-contain"
              priority
            />
            <motion.div
              className="absolute inset-0"
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 5,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

