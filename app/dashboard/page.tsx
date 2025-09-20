"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Brain,
  Heart,
  Moon,
  BarChart3,
  FileText,
  Smartphone,
  Menu,
  Bell,
  Settings,
  LogOut,
  TrendingUp,
  Calendar,
  Clock,
} from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border/50 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-playfair font-semibold">mindrift</span>
            </Link>

            <div className="hidden md:flex items-center gap-6">
              <Link href="/dashboard" className="text-foreground font-medium">
                Dashboard
              </Link>
              <Link href="/dashboard/mood" className="text-muted-foreground hover:text-foreground transition-colors">
                Mood Tracking
              </Link>
              <Link
                href="/dashboard/mindfulness"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Mindfulness
              </Link>
              <Link href="/dashboard/reports" className="text-muted-foreground hover:text-foreground transition-colors">
                Reports
              </Link>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm">
                <Bell className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <LogOut className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <Menu className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-playfair font-bold mb-2">Welcome back, Alex</h1>
          <p className="text-muted-foreground">Here's your digital wellbeing overview for today</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Today's Mood</CardTitle>
              <Heart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">😊 Good</div>
              <p className="text-xs text-muted-foreground">+12% from yesterday</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Screen Time</CardTitle>
              <Smartphone className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4h 23m</div>
              <p className="text-xs text-muted-foreground">-18% from yesterday</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sleep Quality</CardTitle>
              <Moon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8.2/10</div>
              <p className="text-xs text-muted-foreground">7h 45m last night</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Mindfulness</CardTitle>
              <Brain className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">15 min</div>
              <p className="text-xs text-muted-foreground">2 sessions completed</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Weekly Progress */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Weekly Progress
                </CardTitle>
                <CardDescription>Your digital wellbeing trends this week</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Digital Balance Goal</span>
                    <span>78%</span>
                  </div>
                  <Progress value={78} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Mindfulness Practice</span>
                    <span>65%</span>
                  </div>
                  <Progress value={65} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Sleep Quality</span>
                    <span>82%</span>
                  </div>
                  <Progress value={82} className="h-2" />
                </div>
              </CardContent>
            </Card>

            {/* Recent Activities */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Recent Activities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <Brain className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Completed 10-minute meditation</p>
                      <p className="text-xs text-muted-foreground">2 hours ago</p>
                    </div>
                    <Badge variant="secondary">+5 points</Badge>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                      <Heart className="w-4 h-4 text-accent" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Logged mood: Happy</p>
                      <p className="text-xs text-muted-foreground">4 hours ago</p>
                    </div>
                    <Badge variant="secondary">+2 points</Badge>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-chart-2/10 rounded-full flex items-center justify-center">
                      <Smartphone className="w-4 h-4 text-chart-2" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Screen time goal achieved</p>
                      <p className="text-xs text-muted-foreground">Yesterday</p>
                    </div>
                    <Badge variant="secondary">+10 points</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Start your wellness activities</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link href="/dashboard/mood">
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <Heart className="w-4 h-4 mr-2" />
                    Log Mood
                  </Button>
                </Link>
                <Link href="/dashboard/mindfulness">
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <Brain className="w-4 h-4 mr-2" />
                    Start Meditation
                  </Button>
                </Link>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Moon className="w-4 h-4 mr-2" />
                  Sleep Sounds
                </Button>
                <Link href="/dashboard/reports">
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <FileText className="w-4 h-4 mr-2" />
                    View Reports
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Today's Insights */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Today's Insights
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 bg-primary/5 rounded-lg">
                  <p className="text-sm font-medium text-primary">Great progress!</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    You've reduced screen time by 18% compared to yesterday. Keep it up!
                  </p>
                </div>
                <div className="p-3 bg-accent/5 rounded-lg">
                  <p className="text-sm font-medium text-accent">Mindfulness reminder</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Try a 5-minute breathing exercise to maintain your positive mood.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Upcoming */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Upcoming
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Evening meditation</p>
                    <p className="text-xs text-muted-foreground">7:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Sleep preparation</p>
                    <p className="text-xs text-muted-foreground">9:30 PM</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-chart-2 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Weekly report</p>
                    <p className="text-xs text-muted-foreground">Tomorrow</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
