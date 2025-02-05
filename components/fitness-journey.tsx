"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface JourneyItem {
  id: number
  title: string
  description: string
  date: string
  image?: string
}

const journeyItems: JourneyItem[] = [
  {
    id: 1,
    title: "First 5K Run",
    description: "Completed my first 5K run in 30 minutes!",
    date: "2023-05-15",
    image: "/placeholder-5k.jpg",
  },
  {
    id: 2,
    title: "30-Day Plank Challenge",
    description: "Successfully held a 5-minute plank!",
    date: "2023-06-20",
    image: "/placeholder-plank.jpg",
  },
  {
    id: 3,
    title: "100 Workouts Milestone",
    description: "Reached 100 workouts on FitConnect!",
    date: "2023-07-30",
    image: "/placeholder-workout.jpg",
  },
]

export function FitnessJourney() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % journeyItems.length)
  }

  const prevItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + journeyItems.length) % journeyItems.length)
  }

  return (
    <div className="relative">
      <h2 className="text-2xl font-bold mb-4">Fitness Journey</h2>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>{journeyItems[currentIndex].title}</CardTitle>
              <Badge>{journeyItems[currentIndex].date}</Badge>
            </CardHeader>
            <CardContent>
              <img
                src={journeyItems[currentIndex].image || "/placeholder.svg"}
                alt={journeyItems[currentIndex].title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <p>{journeyItems[currentIndex].description}</p>
            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
        <motion.button
          onClick={prevItem}
          className="p-2 bg-background rounded-full shadow-md"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
        <motion.button
          onClick={nextItem}
          className="p-2 bg-background rounded-full shadow-md"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>
      </div>
    </div>
  )
}

