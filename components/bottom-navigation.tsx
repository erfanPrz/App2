"use client"

import { Home, User, Trophy, Search, PlusSquare } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

const navItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Trophy, label: "Challenges", href: "/challenges" },
  { icon: PlusSquare, label: "New Post", href: "/new-post" },
  { icon: Search, label: "Search", href: "/search" },
  { icon: User, label: "Profile", href: "/profile" },
]

export function BottomNavigation() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border z-50">
      <div className="flex justify-around items-center h-16 max-w-screen-xl mx-auto px-4">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="flex flex-col items-center w-full">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`p-2 rounded-full ${
                pathname === item.href
                  ? "bg-primary text-primary-foreground"
                  : item.label === "New Post"
                    ? "bg-energy text-energy-foreground"
                    : "text-muted-foreground"
              }`}
            >
              <item.icon className="h-6 w-6" />
            </motion.div>
            <span className="text-xs mt-1 hidden sm:inline-block">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  )
}

