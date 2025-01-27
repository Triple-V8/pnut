"use client"

import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export function NavHeader() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-neutral-950/95 dark:supports-[backdrop-filter]:bg-neutral-950/60"
    >
      <div className="container flex h-16 items-center justify-between">
        <motion.div 
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
        >
          <Image
            src="/image/pnutlogo.png"
            alt="PNUT Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-xl font-bold font-comic">PNUT</span>
        </motion.div>
        <nav className="hidden md:flex items-center gap-6">
          {["About", "Story", "Tokenomics", "Community"].map((item) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href={`#${item.toLowerCase()}`} className="text-sm font-medium hover:text-neutral-900 dark:hover:text-neutral-50">
                {item}
              </Link>
            </motion.div>
          ))}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link href="https://eclipse.fight.horse/launchpad/6Eo3V95XdnWrfjd68EaEsoxmVnMKFMonfPkj8iv2iT7o"> <Button variant="default" className="font-comic">Buy $PNUT</Button>
          </Link></motion.div>
        </nav>
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col gap-4 mt-4">
              {["About", "Story", "Tokenomics", "Community"].map((item) => (
                <Link key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium hover:text-neutral-900 dark:hover:text-neutral-50">
                  {item}
                </Link>
              ))}
              <Link href="https://eclipse.fight.horse/launchpad/6Eo3V95XdnWrfjd68EaEsoxmVnMKFMonfPkj8iv2iT7o"> <Button variant="default">Buy $PNUT</Button> </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  )
}

