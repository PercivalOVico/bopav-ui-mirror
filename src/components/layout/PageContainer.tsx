import React from "react"
import { cn } from "@/lib/utils"
import { ErrorBoundary } from "@/components/common/ErrorBoundary"

interface PageContainerProps {
  children: React.ReactNode
  className?: string
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full"
  padding?: boolean
  withErrorBoundary?: boolean
}

const maxWidthClasses = {
  sm: "max-w-sm",
  md: "max-w-md", 
  lg: "max-w-lg",
  xl: "max-w-xl",
  "2xl": "max-w-2xl",
  full: "max-w-full"
}

export const PageContainer = React.memo(({
  children,
  className,
  maxWidth = "full",
  padding = true,
  withErrorBoundary = true
}: PageContainerProps) => {
  const content = (
    <div className={cn(
      "mx-auto",
      maxWidthClasses[maxWidth],
      padding && "px-4 sm:px-6 lg:px-8",
      className
    )}>
      {children}
    </div>
  )

  if (withErrorBoundary) {
    return <ErrorBoundary>{content}</ErrorBoundary>
  }

  return content
})

PageContainer.displayName = "PageContainer"