"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { StatsDisplay } from "@/components/stats-display"
import { FitnessJourney } from "@/components/fitness-journey"
import { ThemeCustomizer } from "@/components/theme-customizer"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

const stats = [
  { label: "Workouts Completed", value: 15, max: 20, color: "bg-energy" },
  { label: "Calories Burned", value: 1800, max: 2000, color: "bg-motivation" },
  { label: "Active Minutes", value: 180, max: 200, color: "bg-calm" },
  { label: "Steps", value: 8500, max: 10000, color: "bg-accent" },
]

const achievements = [
  { name: "5K Runner", icon: "🏃‍♂️", description: "Completed a 5K run" },
  { name: "30-Day Plank", icon: "🧘‍♀️", description: "Completed the 30-day plank challenge" },
  { name: "Century Club", icon: "💯", description: "Logged 100 workouts" },
]

export default function ProfilePage() {
  const [layout, setLayout] = useState("journey")
  const [level, setLevel] = useState(5)
  const [xp, setXp] = useState(75)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div
        className="h-48 bg-cover bg-center rounded-lg relative"
        style={{ backgroundImage: "url('/placeholder-cover.jpg')" }}
      >
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-background to-transparent"></div>
      </div>
      <Card className="w-full max-w-3xl mx-auto -mt-24 relative z-10">
        <CardHeader>
          <div className="flex items-center space-x-4">
            <Avatar className="w-24 h-24 border-4 border-background">
              <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-2xl">John Doe</CardTitle>
              <p className="text-muted-foreground">Fitness Enthusiast</p>
              <p className="text-sm">📍 New York, NY</p>
              <Badge variant="secondary" className="mt-1">
                Level {level}
              </Badge>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-sm font-medium">Level Progress</p>
            <Progress value={xp} className="mt-2" />
            <p className="text-sm text-muted-foreground mt-1">{xp}/100 XP</p>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs value={layout} onValueChange={setLayout}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="journey">Fitness Journey</TabsTrigger>
              <TabsTrigger value="achievements">Achievements</TabsTrigger>
              <TabsTrigger value="customize">Customize</TabsTrigger>
            </TabsList>
            <TabsContent value="journey">
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Bio</h3>
                  <p>Passionate about fitness and healthy living. Always striving to improve and inspire others.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Fitness Goals</h3>
                  <ul className="list-disc list-inside">
                    <li>Run a marathon in under 4 hours</li>
                    <li>Increase bench press to 225 lbs</li>
                    <li>Maintain a consistent yoga practice</li>
                  </ul>
                </div>
                <FitnessJourney />
              </div>
            </TabsContent>
            <TabsContent value="achievements">
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Weekly Activity</h3>
                  <StatsDisplay stats={stats} />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Achievements</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {achievements.map((achievement, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-card p-4 rounded-lg shadow-md"
                      >
                        <div className="text-4xl mb-2">{achievement.icon}</div>
                        <h4 className="font-semibold">{achievement.name}</h4>
                        <p className="text-sm text-muted-foreground">{achievement.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="customize">
              <ThemeCustomizer />
            </TabsContent>
          </Tabs>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-6">
            <Button className="w-full bg-energy hover:bg-energy/90 text-energy-foreground">Edit Profile</Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

