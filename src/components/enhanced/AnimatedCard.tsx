import React from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface AnimatedCardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean
  initialDelay?: number
  glassEffect?: boolean
}

export const AnimatedCard = React.memo(({
  children,
  className,
  hoverEffect = true,
  initialDelay = 0,
  glassEffect = false,
  ...props
}: AnimatedCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.4, 
        delay: initialDelay,
        ease: [0.25, 0.25, 0, 1]
      }}
      whileHover={hoverEffect ? { 
        y: -5,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      } : {}}
    >
      <Card
        className={cn(
          "transition-all duration-300",
          hoverEffect && "hover:shadow-lg",
          glassEffect && "glass backdrop-blur-md border-white/20",
          className
        )}
        {...props}
      >
        {children}
      </Card>
    </motion.div>
  )
})

AnimatedCard.displayName = "AnimatedCard"