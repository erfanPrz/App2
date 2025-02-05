import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Trophy, Medal } from "lucide-react"

const challenges = [
  {
    title: "30-Day Plank Challenge",
    description: "Improve your core strength with daily planks. Start at 30 seconds and work your way up to 5 minutes!",
    participants: 1234,
    duration: "30 days",
    difficulty: "Medium",
    badge: "🏋️",
    leaderboard: [
      { name: "John Doe", score: 150, avatar: "/placeholder-avatar.jpg" },
      { name: "Jane Smith", score: 145, avatar: "/placeholder-avatar-2.jpg" },
      { name: "Bob Johnson", score: 140, avatar: "/placeholder-avatar-3.jpg" },
    ],
  },
  // Add more challenges here
]

export default function ChallengesPage() {
  return (
    <div className="space-y-6 max-w-screen-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Fitness Challenges</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {challenges.map((challenge, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-energy to-motivation text-white">
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">{challenge.title}</CardTitle>
                <span className="text-4xl">{challenge.badge}</span>
              </div>
              <Badge variant="secondary" className="mt-2">
                {challenge.difficulty}
              </Badge>
            </CardHeader>
            <CardContent className="mt-4">
              <p>{challenge.description}</p>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between">
                  <span className="font-semibold">Participants:</span>
                  <span>{challenge.participants}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Duration:</span>
                  <span>{challenge.duration}</span>
                </div>
              </div>
              <div className="mt-6">
                <h4 className="font-semibold mb-2 flex items-center">
                  <Trophy className="mr-2 text-motivation" />
                  Leaderboard
                </h4>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-12">Rank</TableHead>
                      <TableHead>User</TableHead>
                      <TableHead className="text-right">Score</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {challenge.leaderboard.map((user, userIndex) => (
                      <TableRow key={userIndex}>
                        <TableCell>
                          {userIndex === 0 && <Medal className="text-yellow-500" />}
                          {userIndex === 1 && <Medal className="text-gray-400" />}
                          {userIndex === 2 && <Medal className="text-amber-600" />}
                          {userIndex > 2 && userIndex + 1}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <Avatar className="h-8 w-8 mr-2">
                              <AvatarImage src={user.avatar} />
                              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            {user.name}
                          </div>
                        </TableCell>
                        <TableCell className="text-right font-semibold">{user.score}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-energy hover:bg-energy/90 text-white">Join Challenge</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

