"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Brain,
  Heart,
  Moon,
  BarChart3,
  FileText,
  Smartphone,
  Menu,
  X,
  ArrowRight,
  Star,
  Shield,
  Users,
} from "lucide-react"
import LoginModal from "@/components/login-modal"

export default function HomePage() {
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border/50 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-playfair font-semibold">mindrift</span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
                How it Works
              </a>
              <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                Pricing
              </a>
              <Button onClick={() => setIsLoginOpen(true)}>Get Started</Button>
            </div>

            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-sm">
            <div className="px-4 py-4 space-y-3">
              <a href="#features" className="block text-muted-foreground hover:text-foreground transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="block text-muted-foreground hover:text-foreground transition-colors">
                How it Works
              </a>
              <a href="#pricing" className="block text-muted-foreground hover:text-foreground transition-colors">
                Pricing
              </a>
              <div className="flex gap-2 pt-2">
                <Button size="sm" onClick={() => setIsLoginOpen(true)}>
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6">
              AI-Powered Digital Wellness
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-balance mb-6">
              Your Personalized Digital Wellbeing Companion
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-pretty mb-8 leading-relaxed">
              Transform your relationship with technology. Monitor digital habits, track emotional health, and receive
              AI-powered interventions to improve your mental wellbeing, sleep quality, and focus.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8" onClick={() => setIsLoginOpen(true)}>
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Comprehensive Digital Wellness Tools</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Everything you need to build a healthier relationship with technology and improve your mental wellbeing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Mood & Emotion Tracking</CardTitle>
                <CardDescription>
                  Log your daily moods and energy levels with our intuitive emoji-based system. Track emotional patterns
                  and identify triggers.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-xl">Mindfulness & Guided Exercises</CardTitle>
                <CardDescription>
                  Access meditation sessions, breathing routines, focus exercises, and calming music designed to improve
                  your mental state.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-chart-2/10 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-chart-2" />
                </div>
                <CardTitle className="text-xl">Wellbeing Dashboard</CardTitle>
                <CardDescription>
                  Visual analytics of your digital habits, emotional trends, and overall mental health progress with
                  actionable insights.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-chart-3/10 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="w-6 h-6 text-chart-3" />
                </div>
                <CardTitle className="text-xl">Digital Habit Monitoring</CardTitle>
                <CardDescription>
                  Passive tracking of screen time and app usage with intelligent recommendations for healthier digital
                  boundaries.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-chart-4/10 rounded-lg flex items-center justify-center mb-4">
                  <Moon className="w-6 h-6 text-chart-4" />
                </div>
                <CardTitle className="text-xl">Sleep & Recovery</CardTitle>
                <CardDescription>
                  Calming music for sleep, screen-free prompts, and movement reminders to improve your sleep quality and
                  recovery.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-chart-5/10 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-chart-5" />
                </div>
                <CardTitle className="text-xl">Professional Reports</CardTitle>
                <CardDescription>
                  Generate detailed wellbeing reports for consultation with mental health specialists and healthcare
                  providers.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">How Mindrift Works</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Our AI-powered approach combines passive monitoring with active engagement to create a personalized
              wellness experience.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Monitor & Track</h3>
              <p className="text-muted-foreground text-pretty">
                We passively monitor your digital habits while you actively log moods, energy levels, and wellness
                activities through our intuitive interface.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-accent">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Analyze & Learn</h3>
              <p className="text-muted-foreground text-pretty">
                Our AI analyzes patterns in your digital behavior and emotional state to identify triggers, trends, and
                opportunities for improvement.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-chart-2/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-chart-2">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Personalized Interventions</h3>
              <p className="text-muted-foreground text-pretty">
                Receive tailored recommendations, mindfulness exercises, and wellness interventions designed
                specifically for your unique patterns and goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Trusted by Wellness Professionals</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Mental health specialists and individuals worldwide trust Mindrift for comprehensive digital wellness.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold mb-2">10,000+</div>
              <div className="text-muted-foreground">Active Users</div>
            </div>

            <div>
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-muted-foreground">Healthcare Partners</div>
            </div>

            <div>
              <div className="w-16 h-16 bg-chart-2/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-chart-2" />
              </div>
              <div className="text-3xl font-bold mb-2">4.9/5</div>
              <div className="text-muted-foreground">User Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-balance">
            Ready to Transform Your Digital Wellbeing?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            Join thousands of users who have improved their mental health and digital balance with Mindrift.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8" onClick={() => setIsLoginOpen(true)}>
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-playfair font-semibold">mindrift</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Your personalized digital wellbeing companion for better mental health and digital balance.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    API
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Integrations
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Community
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border/50 mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Mindrift. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </div>
  )
}
