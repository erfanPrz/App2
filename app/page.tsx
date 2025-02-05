"use client"

import { useState } from "react"
import { PostCard } from "@/components/post-card"
import { InspirationStories } from "@/components/inspiration-stories"
import { FitnessJourney } from "@/components/fitness-journey" // Import the FitnessJourney component

const samplePosts = [
  {
    user: {
      name: "John Doe",
      avatar: "/placeholder-avatar.jpg",
    },
    content: {
      text: "Just finished an intense HIIT session! Feeling great and energized. 💪🔥",
      images: ["/placeholder.svg?height=300&width=600"],
    },
    timestamp: "2 hours ago",
    likes: 15,
    comments: 3,
    hashtags: ["FitnessJourney", "HIIT"],
  },
  {
    user: {
      name: "Jane Smith",
      avatar: "/placeholder-avatar-2.jpg",
    },
    content: {
      text: "New personal best on my 5K run! Hard work pays off. 🏃‍♀️🎉",
    },
    timestamp: "4 hours ago",
    likes: 32,
    comments: 7,
    hashtags: ["Running", "PersonalBest"],
  },
]

export default function FeedPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("list")

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-screen-xl mx-auto">
      <div className="md:col-span-2 space-y-6">
        <InspirationStories />
        {samplePosts.map((post, index) => (
          <PostCard key={index} {...post} viewMode={viewMode} />
        ))}
      </div>
      <div className="space-y-6">
        <FitnessJourney />
        {/* Add more sidebar components here */}
      </div>
    </div>
  )
}

