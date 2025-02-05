import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const trainers = [
  {
    name: "Sarah Johnson",
    avatar: "/placeholder-avatar-4.jpg",
    specialties: ["Weight Loss", "HIIT", "Nutrition"],
    bio: "Certified personal trainer with 10 years of experience. Specializing in weight loss and high-intensity interval training.",
    rate: "$50/hour",
  },
  {
    name: "Mike Thompson",
    avatar: "/placeholder-avatar-5.jpg",
    specialties: ["Strength Training", "Bodybuilding", "Powerlifting"],
    bio: "Former competitive bodybuilder turned trainer. Passionate about helping clients build strength and muscle.",
    rate: "$60/hour",
  },
  // Add more trainers here
]

export default function TrainersPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Find a Trainer</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {trainers.map((trainer, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={trainer.avatar} />
                  <AvatarFallback>{trainer.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>{trainer.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{trainer.rate}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-2">{trainer.bio}</p>
              <div className="flex flex-wrap gap-2">
                {trainer.specialties.map((specialty, specIndex) => (
                  <Badge key={specIndex} variant="secondary">
                    {specialty}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Book Session</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

