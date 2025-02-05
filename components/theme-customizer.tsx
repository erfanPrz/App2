"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { motion } from "framer-motion"

const themeColors = [
  { name: "Default", value: "default" },
  { name: "High Energy", value: "high-energy" },
  { name: "Calm Yoga", value: "calm-yoga" },
  { name: "Strength Training", value: "strength" },
]

export function ThemeCustomizer() {
  const [selectedTheme, setSelectedTheme] = useState("default")

  const handleThemeChange = (value: string) => {
    setSelectedTheme(value)
    // Here you would typically update the theme in your global state or context
    document.documentElement.setAttribute("data-theme", value)
  }

  return (
    <div className="p-4 bg-card rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Customize Your Theme</h3>
      <RadioGroup value={selectedTheme} onValueChange={handleThemeChange}>
        <div className="grid grid-cols-2 gap-4">
          {themeColors.map((theme) => (
            <div key={theme.value}>
              <RadioGroupItem value={theme.value} id={theme.value} className="peer sr-only" />
              <Label
                htmlFor={theme.value}
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full h-8 rounded-md ${
                    theme.value === "default"
                      ? "bg-energy"
                      : theme.value === "high-energy"
                        ? "bg-red-500"
                        : theme.value === "calm-yoga"
                          ? "bg-blue-300"
                          : "bg-orange-500"
                  }`}
                />
                {theme.name}
              </Label>
            </div>
          ))}
        </div>
      </RadioGroup>
      <Button className="mt-4 w-full" onClick={() => console.log("Theme saved:", selectedTheme)}>
        Save Theme
      </Button>
    </div>
  )
}

