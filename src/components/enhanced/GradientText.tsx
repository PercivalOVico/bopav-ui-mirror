import React from "react"
import { cn } from "@/lib/utils"

interface GradientTextProps {
  children: React.ReactNode
  className?: string
  gradient?: "primary" | "secondary" | "accent" | "custom"
  customGradient?: string
}

export const GradientText = React.memo(({
  children,
  className,
  gradient = "primary",
  customGradient
}: GradientTextProps) => {
  const gradientClasses = {
    primary: "bg-gradient-to-r from-primary via-primary-glow to-accent",
    secondary: "bg-gradient-to-r from-secondary via-muted to-accent",
    accent: "bg-gradient-to-r from-accent via-accent-glow to-primary",
    custom: ""
  }

  return (
    <span
      className={cn(
        "bg-clip-text text-transparent bg-gradient-to-r",
        customGradient ? "" : gradientClasses[gradient],
        className
      )}
      style={customGradient ? { backgroundImage: customGradient } : {}}
    >
      {children}
    </span>
  )
})

GradientText.displayName = "GradientText"