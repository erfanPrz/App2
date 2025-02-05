"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, MessageCircle, Heart } from "lucide-react"

interface Story {
  id: number
  user: {
    name: string
    avatar: string
  }
  content: string
  image: string
}

const stories: Story[] = [
  {
    id: 1,
    user: {
      name: "Sarah Johnson",
      avatar: "/avatar123.png",
    },
    content: "Just completed my first marathon! It was tough, but so worth it. Never give up on your dreams! 🏃‍♀️🏅",
    image: "/placeholder123.png",
  },
  {
    id: 2,
    user: {
      name: "Mike Thompson",
      avatar: "/avatar12.png",
    },
    content: "6 months of consistent weightlifting and proper nutrition. The transformation is real! 💪🏋️‍♂️",
    image: "/placeholder12.png",
  },
  // Add more stories here
]

export function InspirationStories() {
  const [currentStory, setCurrentStory] = useState(0)

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % stories.length)
  }

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + stories.length) % stories.length)
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardContent className="p-0 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <img
              src={stories[currentStory].image || "/placeholder.svg"}
              alt="Story"
              className="w-full h-96 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
              <div className="flex items-center mb-2">
                <Avatar className="h-10 w-10 mr-2">
                  <AvatarImage src={stories[currentStory].user.avatar} />
                  <AvatarFallback>{stories[currentStory].user.name[0]}</AvatarFallback>
                </Avatar>
                <span className="text-white font-semibold">{stories[currentStory].user.name}</span>
              </div>
              <p className="text-white">{stories[currentStory].content}</p>
            </div>
          </motion.div>
        </AnimatePresence>
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white"
          onClick={prevStory}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white"
          onClick={nextStory}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
        <div className="absolute bottom-4 right-4 flex space-x-2">
          <Button variant="ghost" size="icon" className="text-white">
            <Heart className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white">
            <MessageCircle className="h-6 w-6" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

