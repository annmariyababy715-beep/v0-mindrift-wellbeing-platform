"use client"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Brain, ArrowRight } from "lucide-react"
import Link from "next/link"

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-primary-foreground" />
            </div>
            <DialogTitle className="text-xl font-playfair">mindrift</DialogTitle>
          </div>
          <DialogDescription>Welcome to your digital wellbeing journey</DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <Link href="/auth" onClick={onClose}>
            <Button className="w-full">
              Get Started
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
          <Link href="/auth" onClick={onClose}>
            <Button variant="outline" className="w-full bg-transparent">
              Sign In
            </Button>
          </Link>
        </div>

        <div className="mt-4 p-3 bg-muted/50 rounded-lg">
          <p className="text-xs text-muted-foreground text-center">
            <strong>Try the demo:</strong> Use demo@mindrift.com / demo123
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
