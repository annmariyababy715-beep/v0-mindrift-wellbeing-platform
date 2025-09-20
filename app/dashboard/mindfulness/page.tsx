"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Brain, ArrowLeft, Play, Pause, RotateCcw, Volume2, Clock, Star, Headphones } from "lucide-react"
import Link from "next/link"

const meditationSessions = [
  {
    id: 1,
    title: "Morning Mindfulness",
    duration: "10 min",
    type: "Guided Meditation",
    difficulty: "Beginner",
    description: "Start your day with clarity and intention",
    image: "/peaceful-morning-meditation.png",
  },
  {
    id: 2,
    title: "Stress Relief",
    duration: "15 min",
    type: "Breathing Exercise",
    difficulty: "Intermediate",
    description: "Release tension and find calm",
    image: "/calming-breathing-exercise-visualization.jpg",
  },
  {
    id: 3,
    title: "Focus Enhancement",
    duration: "20 min",
    type: "Concentration",
    difficulty: "Advanced",
    description: "Improve your attention and mental clarity",
    image: "/focused-meditation-with-candle.jpg",
  },
  {
    id: 4,
    title: "Sleep Preparation",
    duration: "25 min",
    type: "Sleep Meditation",
    difficulty: "Beginner",
    description: "Gentle guidance into restful sleep",
    image: "/peaceful-nighttime-meditation.jpg",
  },
]

const breathingExercises = [
  {
    name: "4-7-8 Breathing",
    description: "Inhale for 4, hold for 7, exhale for 8",
    duration: "5 min",
    benefits: "Reduces anxiety, promotes sleep",
  },
  {
    name: "Box Breathing",
    description: "Equal counts for inhale, hold, exhale, hold",
    duration: "10 min",
    benefits: "Improves focus, reduces stress",
  },
  {
    name: "Belly Breathing",
    description: "Deep diaphragmatic breathing",
    duration: "8 min",
    benefits: "Activates relaxation response",
  },
]

const calmingSounds = [
  { name: "Ocean Waves", icon: "🌊", duration: "60 min" },
  { name: "Forest Rain", icon: "🌧️", duration: "45 min" },
  { name: "Tibetan Bowls", icon: "🎵", duration: "30 min" },
  { name: "White Noise", icon: "🔊", duration: "90 min" },
  { name: "Nature Sounds", icon: "🌿", duration: "75 min" },
  { name: "Gentle Piano", icon: "🎹", duration: "40 min" },
]

export default function MindfulnessPage() {
  const [activeSession, setActiveSession] = useState<number | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [totalTime, setTotalTime] = useState(600) // 10 minutes in seconds
  const [selectedBreathing, setSelectedBreathing] = useState<string | null>(null)

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isPlaying && activeSession) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= totalTime) {
            setIsPlaying(false)
            return totalTime
          }
          return prev + 1
        })
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isPlaying, activeSession, totalTime])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const handleReset = () => {
    setCurrentTime(0)
    setIsPlaying(false)
  }

  const startSession = (sessionId: number) => {
    setActiveSession(sessionId)
    setCurrentTime(0)
    setIsPlaying(true)
    const session = meditationSessions.find((s) => s.id === sessionId)
    if (session) {
      setTotalTime(Number.parseInt(session.duration) * 60)
    }
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
                <Brain className="w-3 h-3 mr-1" />
                Mindfulness
              </Badge>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-playfair font-bold mb-2">Mindfulness & Meditation</h1>
          <p className="text-muted-foreground">Find peace and clarity through guided exercises and calming sounds</p>
        </div>

        {/* Active Session Player */}
        {activeSession && (
          <Card className="mb-8 bg-primary/5 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold">
                    {meditationSessions.find((s) => s.id === activeSession)?.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {meditationSessions.find((s) => s.id === activeSession)?.type}
                  </p>
                </div>
                <Badge variant="secondary">
                  {formatTime(currentTime)} / {formatTime(totalTime)}
                </Badge>
              </div>

              <Progress value={(currentTime / totalTime) * 100} className="mb-4" />

              <div className="flex items-center gap-4">
                <Button onClick={handlePlayPause} size="lg">
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </Button>
                <Button variant="outline" onClick={handleReset}>
                  <RotateCcw className="w-4 h-4" />
                </Button>
                <Button variant="outline">
                  <Volume2 className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Meditation Sessions */}
          <div className="lg:col-span-2 space-y-6">
            {/* Guided Meditations */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="w-5 h-5" />
                  Guided Meditations
                </CardTitle>
                <CardDescription>Choose from our curated collection of meditation sessions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {meditationSessions.map((session) => (
                    <Card key={session.id} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                      <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                        <img
                          src={session.image || "/placeholder.svg"}
                          alt={session.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="outline" className="text-xs">
                            {session.type}
                          </Badge>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Clock className="w-3 h-3" />
                            {session.duration}
                          </div>
                        </div>
                        <h3 className="font-semibold mb-1">{session.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{session.description}</p>
                        <div className="flex items-center justify-between">
                          <Badge variant="secondary" className="text-xs">
                            {session.difficulty}
                          </Badge>
                          <Button
                            size="sm"
                            onClick={() => startSession(session.id)}
                            disabled={activeSession === session.id && isPlaying}
                          >
                            {activeSession === session.id && isPlaying ? (
                              <>
                                <Pause className="w-3 h-3 mr-1" />
                                Playing
                              </>
                            ) : (
                              <>
                                <Play className="w-3 h-3 mr-1" />
                                Start
                              </>
                            )}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Breathing Exercises */}
            <Card>
              <CardHeader>
                <CardTitle>Breathing Exercises</CardTitle>
                <CardDescription>Simple yet powerful techniques to center yourself</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {breathingExercises.map((exercise, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                        selectedBreathing === exercise.name
                          ? "border-accent bg-accent/5"
                          : "border-border hover:border-accent/50"
                      }`}
                      onClick={() => setSelectedBreathing(exercise.name)}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold">{exercise.name}</h3>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs">
                            {exercise.duration}
                          </Badge>
                          <Button size="sm" variant="outline">
                            <Play className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{exercise.description}</p>
                      <p className="text-xs text-accent font-medium">{exercise.benefits}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Calming Sounds & Progress */}
          <div className="space-y-6">
            {/* Today's Progress */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5" />
                  Today's Progress
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">25 min</div>
                  <div className="text-sm text-muted-foreground">Total meditation time</div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Daily Goal</span>
                    <span>83%</span>
                  </div>
                  <Progress value={83} className="h-2" />
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-lg font-bold">3</div>
                    <div className="text-xs text-muted-foreground">Sessions</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold">7</div>
                    <div className="text-xs text-muted-foreground">Day Streak</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Calming Sounds */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Headphones className="w-5 h-5" />
                  Calming Sounds
                </CardTitle>
                <CardDescription>Background sounds for meditation and sleep</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {calmingSounds.map((sound, index) => (
                    <button
                      key={index}
                      className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all text-left"
                    >
                      <div className="text-2xl mb-1">{sound.icon}</div>
                      <div className="text-sm font-medium mb-1">{sound.name}</div>
                      <div className="text-xs text-muted-foreground">{sound.duration}</div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Tips */}
            <Card>
              <CardHeader>
                <CardTitle>Mindfulness Tips</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-primary/5 rounded-lg">
                  <p className="text-sm font-medium text-primary">Start Small</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Even 5 minutes of daily meditation can make a significant difference.
                  </p>
                </div>
                <div className="p-3 bg-accent/5 rounded-lg">
                  <p className="text-sm font-medium text-accent">Consistency Matters</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Regular practice is more beneficial than long, infrequent sessions.
                  </p>
                </div>
                <div className="p-3 bg-chart-2/5 rounded-lg">
                  <p className="text-sm font-medium text-chart-2">Be Patient</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Mindfulness is a skill that develops over time with practice.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
