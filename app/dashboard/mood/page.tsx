"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Slider } from "@/components/ui/slider"
import { Brain, Heart, ArrowLeft, Calendar, TrendingUp, Save } from "lucide-react"
import Link from "next/link"

const moodEmojis = [
  { emoji: "😢", label: "Very Sad", value: 1, color: "text-red-500" },
  { emoji: "😔", label: "Sad", value: 2, color: "text-orange-500" },
  { emoji: "😐", label: "Neutral", value: 3, color: "text-yellow-500" },
  { emoji: "😊", label: "Happy", value: 4, color: "text-green-500" },
  { emoji: "😄", label: "Very Happy", value: 5, color: "text-emerald-500" },
]

const energyLevels = [
  { emoji: "🔋", label: "Drained", value: 1 },
  { emoji: "🪫", label: "Low", value: 2 },
  { emoji: "⚡", label: "Moderate", value: 3 },
  { emoji: "🔥", label: "High", value: 4 },
  { emoji: "⭐", label: "Energized", value: 5 },
]

const recentMoods = [
  { date: "Today, 2:30 PM", mood: "😊", energy: "⚡", note: "Great meeting with the team!" },
  { date: "Today, 9:15 AM", mood: "😐", energy: "🪫", note: "Feeling a bit tired this morning" },
  { date: "Yesterday, 6:45 PM", mood: "😄", energy: "🔥", note: "Finished a big project, feeling accomplished" },
  { date: "Yesterday, 12:00 PM", mood: "😊", energy: "⚡", note: "Nice lunch break walk in the park" },
]

export default function MoodTrackingPage() {
  const [selectedMood, setSelectedMood] = useState<number | null>(null)
  const [selectedEnergy, setSelectedEnergy] = useState<number | null>(null)
  const [stressLevel, setStressLevel] = useState([3])
  const [note, setNote] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async () => {
    if (!selectedMood || !selectedEnergy) return

    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsLoading(false)

    // Reset form
    setSelectedMood(null)
    setSelectedEnergy(null)
    setStressLevel([3])
    setNote("")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border/50 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/dashboard" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-playfair font-semibold">mindrift</span>
            </Link>

            <div className="flex items-center gap-4">
              <Badge variant="secondary" className="hidden sm:flex">
                <Heart className="w-3 h-3 mr-1" />
                Mood Tracking
              </Badge>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-playfair font-bold mb-2">How are you feeling?</h1>
          <p className="text-muted-foreground">
            Track your mood and energy levels to better understand your wellbeing patterns
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Mood Logging */}
          <div className="lg:col-span-2 space-y-6">
            {/* Mood Selection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  Current Mood
                </CardTitle>
                <CardDescription>Select the emoji that best represents how you're feeling right now</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-5 gap-4">
                  {moodEmojis.map((mood) => (
                    <button
                      key={mood.value}
                      onClick={() => setSelectedMood(mood.value)}
                      className={`p-4 rounded-lg border-2 transition-all hover:scale-105 ${
                        selectedMood === mood.value
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <div className="text-4xl mb-2">{mood.emoji}</div>
                      <div className="text-xs font-medium">{mood.label}</div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Energy Level */}
            <Card>
              <CardHeader>
                <CardTitle>Energy Level</CardTitle>
                <CardDescription>How energized do you feel right now?</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-5 gap-4">
                  {energyLevels.map((energy) => (
                    <button
                      key={energy.value}
                      onClick={() => setSelectedEnergy(energy.value)}
                      className={`p-4 rounded-lg border-2 transition-all hover:scale-105 ${
                        selectedEnergy === energy.value
                          ? "border-accent bg-accent/5"
                          : "border-border hover:border-accent/50"
                      }`}
                    >
                      <div className="text-4xl mb-2">{energy.emoji}</div>
                      <div className="text-xs font-medium">{energy.label}</div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Stress Level */}
            <Card>
              <CardHeader>
                <CardTitle>Stress Level</CardTitle>
                <CardDescription>Rate your current stress level from 1 (very low) to 10 (very high)</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="px-2">
                  <Slider
                    value={stressLevel}
                    onValueChange={setStressLevel}
                    max={10}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Very Low</span>
                  <span className="font-medium">Current: {stressLevel[0]}</span>
                  <span>Very High</span>
                </div>
              </CardContent>
            </Card>

            {/* Notes */}
            <Card>
              <CardHeader>
                <CardTitle>Notes (Optional)</CardTitle>
                <CardDescription>Add any additional context about your current state</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="What's contributing to how you feel today? Any specific events or thoughts?"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="min-h-[100px]"
                />
              </CardContent>
            </Card>

            {/* Submit Button */}
            <Button
              onClick={handleSubmit}
              disabled={!selectedMood || !selectedEnergy || isLoading}
              className="w-full"
              size="lg"
            >
              {isLoading ? "Saving..." : "Save Mood Entry"}
              <Save className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Right Column - Recent Entries & Insights */}
          <div className="space-y-6">
            {/* Today's Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Today's Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-4xl mb-2">😊</div>
                  <div className="text-sm font-medium">Average Mood: Happy</div>
                  <div className="text-xs text-muted-foreground">2 entries today</div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl mb-1">⚡</div>
                    <div className="text-xs">Energy</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold mb-1">4/10</div>
                    <div className="text-xs">Stress</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Weekly Trend */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Weekly Trend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Mood Stability</span>
                    <Badge variant="secondary">+12%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Energy Levels</span>
                    <Badge variant="secondary">+8%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Stress Management</span>
                    <Badge variant="secondary">+15%</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Entries */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Entries</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentMoods.map((entry, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                      <div className="flex gap-1">
                        <span className="text-lg">{entry.mood}</span>
                        <span className="text-lg">{entry.energy}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs text-muted-foreground mb-1">{entry.date}</div>
                        <div className="text-sm">{entry.note}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
