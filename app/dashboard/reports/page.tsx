"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Brain,
  ArrowLeft,
  FileText,
  Download,
  Share,
  Calendar,
  User,
  Stethoscope,
  TrendingUp,
  CheckCircle,
  Clock,
} from "lucide-react"
import Link from "next/link"

const reportTemplates = [
  {
    id: "comprehensive",
    name: "Comprehensive Wellbeing Report",
    description: "Complete overview of digital habits, mood patterns, and mental health metrics",
    duration: "30 days",
    sections: [
      "Mood Analysis",
      "Digital Habits",
      "Sleep Patterns",
      "Mindfulness Practice",
      "Stress Indicators",
      "Recommendations",
    ],
  },
  {
    id: "mood-focused",
    name: "Mood & Emotional Health Report",
    description: "Detailed analysis of emotional patterns and mood stability",
    duration: "14 days",
    sections: [
      "Daily Mood Tracking",
      "Emotional Triggers",
      "Energy Levels",
      "Stress Correlation",
      "Mood Interventions",
    ],
  },
  {
    id: "digital-wellness",
    name: "Digital Wellness Assessment",
    description: "Focus on screen time, app usage, and digital behavior patterns",
    duration: "7 days",
    sections: [
      "Screen Time Analysis",
      "App Usage Patterns",
      "Digital Boundaries",
      "Productivity Metrics",
      "Recommendations",
    ],
  },
  {
    id: "sleep-analysis",
    name: "Sleep & Recovery Report",
    description: "Comprehensive sleep quality and recovery pattern analysis",
    duration: "21 days",
    sections: ["Sleep Duration", "Sleep Quality", "Recovery Metrics", "Sleep Hygiene", "Environmental Factors"],
  },
]

const recentReports = [
  {
    id: 1,
    title: "Monthly Wellbeing Assessment",
    type: "Comprehensive",
    dateGenerated: "2024-01-15",
    period: "Dec 15 - Jan 15, 2024",
    status: "completed",
    sharedWith: "Dr. Sarah Johnson",
    summary:
      "Overall improvement in mood stability and digital balance. Stress levels remain elevated during weekdays.",
  },
  {
    id: 2,
    title: "Digital Wellness Check",
    type: "Digital Wellness",
    dateGenerated: "2024-01-08",
    period: "Jan 1 - Jan 8, 2024",
    status: "completed",
    sharedWith: "Personal Use",
    summary: "Significant reduction in social media usage. Screen time goals consistently met.",
  },
  {
    id: 3,
    title: "Sleep Pattern Analysis",
    type: "Sleep Analysis",
    dateGenerated: "2024-01-01",
    period: "Dec 11 - Dec 31, 2023",
    status: "completed",
    sharedWith: "Dr. Michael Chen",
    summary: "Sleep quality improved with consistent bedtime routine. Deep sleep percentage increased by 15%.",
  },
]

export default function ReportsPage() {
  const [selectedTemplate, setSelectedTemplate] = useState<string>("")
  const [reportPeriod, setReportPeriod] = useState("30d")
  const [includePersonalNotes, setIncludePersonalNotes] = useState(true)
  const [includeRecommendations, setIncludeRecommendations] = useState(true)
  const [recipientEmail, setRecipientEmail] = useState("")
  const [additionalNotes, setAdditionalNotes] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)

  const handleGenerateReport = async () => {
    if (!selectedTemplate) return

    setIsGenerating(true)
    // Simulate report generation
    await new Promise((resolve) => setTimeout(resolve, 3000))
    setIsGenerating(false)

    // Reset form
    setSelectedTemplate("")
    setReportPeriod("30d")
    setRecipientEmail("")
    setAdditionalNotes("")
  }

  const selectedTemplateData = reportTemplates.find((t) => t.id === selectedTemplate)

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
                <FileText className="w-3 h-3 mr-1" />
                Professional Reports
              </Badge>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-playfair font-bold mb-2">Professional Reports</h1>
          <p className="text-muted-foreground">
            Generate detailed wellbeing reports for consultation with mental health specialists
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Report Generation */}
          <div className="lg:col-span-2 space-y-6">
            {/* Report Templates */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Choose Report Type
                </CardTitle>
                <CardDescription>Select the type of report you'd like to generate</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {reportTemplates.map((template) => (
                    <div
                      key={template.id}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                        selectedTemplate === template.id
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                      onClick={() => setSelectedTemplate(template.id)}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold">{template.name}</h3>
                        <Badge variant="outline" className="text-xs">
                          {template.duration}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{template.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {template.sections.map((section, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {section}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Report Configuration */}
            {selectedTemplate && (
              <Card>
                <CardHeader>
                  <CardTitle>Report Configuration</CardTitle>
                  <CardDescription>Customize your report settings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="period">Report Period</Label>
                      <Select value={reportPeriod} onValueChange={setReportPeriod}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="7d">Last 7 days</SelectItem>
                          <SelectItem value="14d">Last 14 days</SelectItem>
                          <SelectItem value="30d">Last 30 days</SelectItem>
                          <SelectItem value="90d">Last 3 months</SelectItem>
                          <SelectItem value="custom">Custom Range</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="recipient">Share with Professional (Optional)</Label>
                      <input
                        id="recipient"
                        type="email"
                        placeholder="doctor@example.com"
                        value={recipientEmail}
                        onChange={(e) => setRecipientEmail(e.target.value)}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="personal-notes"
                        checked={includePersonalNotes}
                        onCheckedChange={setIncludePersonalNotes}
                      />
                      <Label htmlFor="personal-notes" className="text-sm">
                        Include personal notes and journal entries
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="recommendations"
                        checked={includeRecommendations}
                        onCheckedChange={setIncludeRecommendations}
                      />
                      <Label htmlFor="recommendations" className="text-sm">
                        Include AI-generated recommendations
                      </Label>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes">Additional Notes for Healthcare Provider</Label>
                    <Textarea
                      id="notes"
                      placeholder="Any specific concerns or context you'd like to include..."
                      value={additionalNotes}
                      onChange={(e) => setAdditionalNotes(e.target.value)}
                      className="min-h-[100px]"
                    />
                  </div>

                  <Button onClick={handleGenerateReport} disabled={isGenerating} className="w-full" size="lg">
                    {isGenerating ? (
                      <>
                        <Clock className="w-4 h-4 mr-2 animate-spin" />
                        Generating Report...
                      </>
                    ) : (
                      <>
                        <FileText className="w-4 h-4 mr-2" />
                        Generate Report
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* Report Preview */}
            {selectedTemplateData && (
              <Card>
                <CardHeader>
                  <CardTitle>Report Preview</CardTitle>
                  <CardDescription>What will be included in your {selectedTemplateData.name}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium mb-2">Report Details</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>
                            • Period:{" "}
                            {reportPeriod === "7d"
                              ? "Last 7 days"
                              : reportPeriod === "14d"
                                ? "Last 14 days"
                                : reportPeriod === "30d"
                                  ? "Last 30 days"
                                  : "Last 3 months"}
                          </li>
                          <li>• Format: PDF with interactive charts</li>
                          <li>• Privacy: HIPAA compliant</li>
                          <li>• Language: Professional medical terminology</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Included Sections</h4>
                        <div className="flex flex-wrap gap-1">
                          {selectedTemplateData.sections.map((section, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {section}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Right Column - Recent Reports & Info */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Report Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">12</div>
                  <div className="text-sm text-muted-foreground">Reports Generated</div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-lg font-bold">3</div>
                    <div className="text-xs text-muted-foreground">Shared with Professionals</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold">9</div>
                    <div className="text-xs text-muted-foreground">Personal Use</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Professional Network */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Stethoscope className="w-5 h-5" />
                  Healthcare Providers
                </CardTitle>
                <CardDescription>Professionals you've shared reports with</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Dr. Sarah Johnson</p>
                    <p className="text-xs text-muted-foreground">Clinical Psychologist</p>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    Active
                  </Badge>
                </div>
                <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                  <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-accent" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Dr. Michael Chen</p>
                    <p className="text-xs text-muted-foreground">Sleep Specialist</p>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    Inactive
                  </Badge>
                </div>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  Add Healthcare Provider
                </Button>
              </CardContent>
            </Card>

            {/* Privacy & Security */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  Privacy & Security
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>HIPAA Compliant</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>End-to-End Encryption</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Secure Data Storage</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Access Control</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Recent Reports */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Recent Reports
            </CardTitle>
            <CardDescription>Your previously generated wellbeing reports</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentReports.map((report) => (
                <div key={report.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold">{report.title}</h3>
                      <Badge variant="outline" className="text-xs">
                        {report.type}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{report.summary}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>Generated: {report.dateGenerated}</span>
                      <span>Period: {report.period}</span>
                      <span>Shared with: {report.sharedWith}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <Download className="w-3 h-3 mr-1" />
                      Download
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share className="w-3 h-3 mr-1" />
                      Share
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
