"use client"

import { motion } from "framer-motion"

export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-10">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-16 h-16 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEyIDFjLTIuNzYgMC01IDIuMjQtNSA1djJjMCAyLjc2IDIuMjQgNSA1IDVzNS0yLjI0IDUtNVY2YzAtMi43Ni0yLjI0LTUtNS01em0wIDJjMS42NSAwIDMgMS4zNSAzIDN2MmMwIDEuNjUtMS4zNSAzLTMgM3MtMy0xLjM1LTMtM1Y2YzAtMS42NSAxLjM1LTMgMy0zeiIvPjxwYXRoIGQ9Ik0xMiAxNWMtMi43NiAwLTUgMi4yNC01IDV2MmMwIDIuNzYgMi4yNCA1IDUgNXM1LTIuMjQgNS01di0yYzAtMi43Ni0yLjI0LTUtNS01em0wIDJjMS42NSAwIDMgMS4zNSAzIDN2MmMwIDEuNjUtMS4zNSAzLTMgM3MtMy0xLjM1LTMtM3YtMmMwLTEuNjUgMS4zNS0zIDMtM3oiLz48L3N2Zz4=')]"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            rotate: `${Math.random() * 360}deg`,
          }}
          animate={{
            y: [0, -1000],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 10,
          }}
        />
      ))}
    </div>
  )
}

