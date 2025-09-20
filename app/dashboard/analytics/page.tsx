"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import {
  Brain,
  ArrowLeft,
  TrendingUp,
  TrendingDown,
  Smartphone,
  Heart,
  Moon,
  Activity,
  Target,
  AlertCircle,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"

// Sample data for charts
const moodTrendData = [
  { date: "Mon", mood: 4, energy: 3, stress: 6 },
  { date: "Tue", mood: 3, energy: 4, stress: 5 },
  { date: "Wed", mood: 5, energy: 5, stress: 3 },
  { date: "Thu", mood: 4, energy: 3, stress: 7 },
  { date: "Fri", mood: 5, energy: 4, stress: 4 },
  { date: "Sat", mood: 4, energy: 5, stress: 2 },
  { date: "Sun", mood: 5, energy: 4, stress: 3 },
]

const screenTimeData = [
  { date: "Mon", screenTime: 6.2, productive: 3.1, social: 2.1, entertainment: 1.0 },
  { date: "Tue", screenTime: 5.8, productive: 3.5, social: 1.8, entertainment: 0.5 },
  { date: "Wed", screenTime: 4.5, productive: 2.8, social: 1.2, entertainment: 0.5 },
  { date: "Thu", screenTime: 7.1, productive: 4.2, social: 2.3, entertainment: 0.6 },
  { date: "Fri", screenTime: 5.2, productive: 3.0, social: 1.7, entertainment: 0.5 },
  { date: "Sat", screenTime: 3.8, productive: 1.2, social: 1.8, entertainment: 0.8 },
  { date: "Sun", screenTime: 4.2, productive: 1.5, social: 2.0, entertainment: 0.7 },
]

const appUsageData = [
  { name: "Work Apps", value: 35, color: "#3b82f6" },
  { name: "Social Media", value: 25, color: "#ef4444" },
  { name: "Entertainment", value: 20, color: "#f59e0b" },
  { name: "Health & Fitness", value: 10, color: "#10b981" },
  { name: "Other", value: 10, color: "#6b7280" },
]

const sleepData = [
  { date: "Mon", duration: 7.5, quality: 8, deepSleep: 2.1 },
  { date: "Tue", duration: 6.8, quality: 6, deepSleep: 1.8 },
  { date: "Wed", duration: 8.2, quality: 9, deepSleep: 2.5 },
  { date: "Thu", duration: 7.0, quality: 7, deepSleep: 2.0 },
  { date: "Fri", duration: 6.5, quality: 5, deepSleep: 1.5 },
  { date: "Sat", duration: 8.5, quality: 9, deepSleep: 2.8 },
  { date: "Sun", duration: 8.0, quality: 8, deepSleep: 2.3 },
]

const mindfulnessData = [
  { date: "Mon", meditation: 15, breathing: 5, total: 20 },
  { date: "Tue", meditation: 10, breathing: 8, total: 18 },
  { date: "Wed", meditation: 20, breathing: 5, total: 25 },
  { date: "Thu", meditation: 0, breathing: 10, total: 10 },
  { date: "Fri", meditation: 15, breathing: 5, total: 20 },
  { date: "Sat", meditation: 25, breathing: 10, total: 35 },
  { date: "Sun", meditation: 20, breathing: 5, total: 25 },
]

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState("7d")

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
              <Select value={timeRange} onValueChange={setTimeRange}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7d">Last 7 days</SelectItem>
                  <SelectItem value="30d">Last 30 days</SelectItem>
                  <SelectItem value="90d">Last 3 months</SelectItem>
                </SelectContent>
              </Select>
              <Badge variant="secondary" className="hidden sm:flex">
                <Activity className="w-3 h-3 mr-1" />
                Analytics
              </Badge>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-playfair font-bold mb-2">Wellbeing Analytics</h1>
          <p className="text-muted-foreground">
            Comprehensive insights into your digital habits and mental health patterns
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Wellbeing Score</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">78/100</div>
              <div className="flex items-center text-xs text-muted-foreground">
                <TrendingUp className="w-3 h-3 mr-1 text-green-500" />
                +5 from last week
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Daily Screen Time</CardTitle>
              <Smartphone className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5h 12m</div>
              <div className="flex items-center text-xs text-muted-foreground">
                <TrendingDown className="w-3 h-3 mr-1 text-green-500" />
                -23m from last week
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Mood Stability</CardTitle>
              <Heart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.2/5</div>
              <div className="flex items-center text-xs text-muted-foreground">
                <TrendingUp className="w-3 h-3 mr-1 text-green-500" />
                +0.3 from last week
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sleep Quality</CardTitle>
              <Moon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">7.6/10</div>
              <div className="flex items-center text-xs text-muted-foreground">
                <TrendingUp className="w-3 h-3 mr-1 text-green-500" />
                +0.8 from last week
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Analytics Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="mood">Mood & Emotions</TabsTrigger>
            <TabsTrigger value="digital">Digital Habits</TabsTrigger>
            <TabsTrigger value="sleep">Sleep & Recovery</TabsTrigger>
            <TabsTrigger value="mindfulness">Mindfulness</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Wellbeing Trends */}
              <Card>
                <CardHeader>
                  <CardTitle>Wellbeing Trends</CardTitle>
                  <CardDescription>Your overall wellbeing metrics over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={moodTrendData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis domain={[0, 10]} />
                      <Tooltip />
                      <Line type="monotone" dataKey="mood" stroke="#3b82f6" strokeWidth={2} name="Mood" />
                      <Line type="monotone" dataKey="energy" stroke="#10b981" strokeWidth={2} name="Energy" />
                      <Line type="monotone" dataKey="stress" stroke="#ef4444" strokeWidth={2} name="Stress" />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Screen Time Overview */}
              <Card>
                <CardHeader>
                  <CardTitle>Screen Time Breakdown</CardTitle>
                  <CardDescription>Daily screen time by category</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={screenTimeData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Area type="monotone" dataKey="productive" stackId="1" stroke="#3b82f6" fill="#3b82f6" />
                      <Area type="monotone" dataKey="social" stackId="1" stroke="#ef4444" fill="#ef4444" />
                      <Area type="monotone" dataKey="entertainment" stackId="1" stroke="#f59e0b" fill="#f59e0b" />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* Insights & Recommendations */}
            <div className="grid lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Positive Trends
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                    <p className="text-sm font-medium text-green-700 dark:text-green-300">Screen Time Reduction</p>
                    <p className="text-xs text-green-600 dark:text-green-400">23 minutes less daily average</p>
                  </div>
                  <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                    <p className="text-sm font-medium text-green-700 dark:text-green-300">Mood Improvement</p>
                    <p className="text-xs text-green-600 dark:text-green-400">More consistent positive moods</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-500" />
                    Areas to Focus
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg">
                    <p className="text-sm font-medium text-yellow-700 dark:text-yellow-300">Stress Management</p>
                    <p className="text-xs text-yellow-600 dark:text-yellow-400">Higher stress on weekdays</p>
                  </div>
                  <div className="p-3 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg">
                    <p className="text-sm font-medium text-yellow-700 dark:text-yellow-300">Sleep Consistency</p>
                    <p className="text-xs text-yellow-600 dark:text-yellow-400">Irregular sleep schedule</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recommendations</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 bg-primary/5 rounded-lg">
                    <p className="text-sm font-medium">Try morning meditation</p>
                    <p className="text-xs text-muted-foreground">Start your day with 10 minutes of mindfulness</p>
                  </div>
                  <div className="p-3 bg-accent/5 rounded-lg">
                    <p className="text-sm font-medium">Set evening screen limits</p>
                    <p className="text-xs text-muted-foreground">Reduce blue light exposure before bed</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="mood" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Mood & Energy Patterns</CardTitle>
                  <CardDescription>Track your emotional wellbeing over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={moodTrendData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis domain={[0, 5]} />
                      <Tooltip />
                      <Line type="monotone" dataKey="mood" stroke="#3b82f6" strokeWidth={3} name="Mood" />
                      <Line type="monotone" dataKey="energy" stroke="#10b981" strokeWidth={3} name="Energy" />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Stress Levels</CardTitle>
                  <CardDescription>Monitor stress patterns and triggers</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={moodTrendData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis domain={[0, 10]} />
                      <Tooltip />
                      <Bar dataKey="stress" fill="#ef4444" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="digital" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Daily Screen Time</CardTitle>
                  <CardDescription>Your device usage patterns</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={screenTimeData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="screenTime" fill="#3b82f6" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>App Usage Distribution</CardTitle>
                  <CardDescription>How you spend your screen time</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={appUsageData}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {appUsageData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="sleep" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Sleep Duration & Quality</CardTitle>
                  <CardDescription>Track your sleep patterns</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={sleepData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="duration"
                        stroke="#3b82f6"
                        strokeWidth={2}
                        name="Duration (hours)"
                      />
                      <Line type="monotone" dataKey="quality" stroke="#10b981" strokeWidth={2} name="Quality (1-10)" />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Deep Sleep Analysis</CardTitle>
                  <CardDescription>Quality of your restorative sleep</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={sleepData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Area type="monotone" dataKey="deepSleep" stroke="#6366f1" fill="#6366f1" fillOpacity={0.6} />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="mindfulness" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Mindfulness Practice</CardTitle>
                  <CardDescription>Your meditation and breathing exercise habits</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={mindfulnessData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="meditation" stackId="a" fill="#3b82f6" />
                      <Bar dataKey="breathing" stackId="a" fill="#10b981" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Weekly Progress</CardTitle>
                  <CardDescription>Your mindfulness journey</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={mindfulnessData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="total" stroke="#6366f1" strokeWidth={3} name="Total Minutes" />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
