"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Heart, MessageCircle, Bookmark, Share2, ChevronLeft, ChevronRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { motion, AnimatePresence } from "framer-motion"

interface PostCardProps {
  user: {
    name: string
    avatar: string
  }
  content: {
    text: string
    images?: string[]
  }
  timestamp: string
  likes: number
  comments: number
  hashtags: string[]
  viewMode: "grid" | "list"
}

export function PostCard({ user, content, timestamp, likes, comments, hashtags, viewMode }: PostCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isLiked, setIsLiked] = useState(false)

  const nextImage = () => {
    if (content.images && currentImageIndex < content.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1)
    }
  }

  const prevImage = () => {
    if (content.images && currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1)
    }
  }

  return (
    <Card className={`w-full ${viewMode === "grid" ? "max-w-sm" : "max-w-2xl"} mx-auto`}>
      <CardHeader className="flex flex-row items-center space-x-4">
        <Avatar>
          <AvatarImage src={user.avatar} alt={user.name} />
          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-semibold">{user.name}</h3>
          <p className="text-sm text-muted-foreground">{timestamp}</p>
        </div>
      </CardHeader>
      <CardContent>
        {content.images && content.images.length > 0 && (
          <div className="relative mb-4">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={content.images[currentImageIndex]}
                alt="Post content"
                className="w-full rounded-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            </AnimatePresence>
            {content.images.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-2 top-1/2 transform -translate-y-1/2"
                  onClick={prevImage}
                  disabled={currentImageIndex === 0}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2"
                  onClick={nextImage}
                  disabled={currentImageIndex === content.images.length - 1}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </>
            )}
          </div>
        )}
        <p>{content.text}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {hashtags.map((tag, index) => (
            <Badge key={index} variant="secondary">
              #{tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="ghost" size="sm" className="group" onClick={() => setIsLiked(!isLiked)}>
          <motion.div animate={isLiked ? { scale: [1, 1.2, 1] } : {}} transition={{ duration: 0.3 }}>
            <Heart
              className={`w-5 h-5 mr-1 ${isLiked ? "fill-motivation text-motivation" : "group-hover:text-motivation"}`}
            />
          </motion.div>
          {likes}
        </Button>
        <Button variant="ghost" size="sm">
          <MessageCircle className="w-5 h-5 mr-1" />
          {comments}
        </Button>
        <Button variant="ghost" size="sm">
          <Bookmark className="w-5 h-5 mr-1" />
          Save
        </Button>
        <Button variant="ghost" size="sm">
          <Share2 className="w-5 h-5 mr-1" />
          Share
        </Button>
      </CardFooter>
    </Card>
  )
}

