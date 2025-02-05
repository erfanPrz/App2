"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface Stat {
  label: string
  value: number
  max: number
  color: string
}

interface StatsDisplayProps {
  stats: Stat[]
}

export function StatsDisplay({ stats }: StatsDisplayProps) {
  const [animatedStats, setAnimatedStats] = useState(stats.map((stat) => ({ ...stat, value: 0 })))

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedStats(stats)
    }, 500)
    return () => clearTimeout(timer)
  }, [stats])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {animatedStats.map((stat, index) => (
        <div key={index} className="bg-card p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">{stat.label}</h3>
          <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
              <div>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-energy-foreground bg-energy">
                  {Math.round((stat.value / stat.max) * 100)}%
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs font-semibold inline-block text-energy">
                  {stat.value}/{stat.max}
                </span>
              </div>
            </div>
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-energy/20">
              <motion.div
                style={{ width: `${(stat.value / stat.max) * 100}%` }}
                className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${stat.color}`}
                initial={{ width: 0 }}
                animate={{ width: `${(stat.value / stat.max) * 100}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

