import React from "react"
import { LoadingSpinner } from "@/components/ui/loading-spinner"
import { cn } from "@/lib/utils"

interface PageLoaderProps {
  message?: string
  className?: string
  fullScreen?: boolean
}

export const PageLoader = React.memo(({ 
  message = "Loading...", 
  className,
  fullScreen = false 
}: PageLoaderProps) => {
  return (
    <div className={cn(
      "flex flex-col items-center justify-center",
      fullScreen ? "min-h-screen" : "min-h-[400px]",
      className
    )}>
      <LoadingSpinner size="lg" />
      <p className="text-muted-foreground mt-4 text-sm">{message}</p>
    </div>
  )
})

PageLoader.displayName = "PageLoader"