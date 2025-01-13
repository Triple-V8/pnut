"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { BadgeIcon as Police, LockIcon as Jail, Coins, Rocket } from "lucide-react"

export function StorySection() {
  const storySteps = [
    {
      icon: Police,
      title: "The Arrest",
      description: "Our beloved PNUT was arrested for stealing too many nuts from the central bank"
    },
    {
      icon: Jail,
      title: "The Great Escape",
      description: "Using his wit and charm, PNUT orchestrated the greatest prison break in history"
    },
    {
      icon: Coins,
      title: "The Revolution",
      description: "PNUT decided to create his own token redistribute wealth all woodland creatures"
    },
    {
      icon: Rocket,
      title: "To The Moon",
      description: "Now PNUT leads the charge for financial freedom in crypto forest"
    }
  ]

  return (
    <section id="story" className="py-20 bg-[#1e1e1e] text-white">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 font-comic"
        >
          The PNUT Story
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {storySteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="bg-[#2a2a2a] border-none h-full">
                <CardContent className="pt-6">
                  <motion.div 
                    className="text-center space-y-4"
                    whileHover={{ scale: 1.05 }}
                  >
                    <step.icon className="w-12 h-12 mx-auto text-[#c1f7c1]" />
                    <h3 className="text-gray-400 font-bold">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

