import React from "react"
import { motion } from "framer-motion"
import { Button, ButtonProps } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface InteractiveButtonProps extends ButtonProps {
  glowEffect?: boolean
  pulseEffect?: boolean
  scaleOnHover?: boolean
}

export const InteractiveButton = React.memo(({
  children,
  className,
  glowEffect = false,
  pulseEffect = false,
  scaleOnHover = true,
  ...props
}: InteractiveButtonProps) => {
  return (
    <motion.div
      whileHover={scaleOnHover ? { scale: 1.05 } : {}}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Button
        className={cn(
          "relative overflow-hidden transition-all duration-300",
          glowEffect && "shadow-glow hover:shadow-xl",
          pulseEffect && "animate-pulse-glow",
          className
        )}
        {...props}
      >
        {glowEffect && (
          <div className="absolute inset-0 bg-gradient-primary opacity-0 hover:opacity-20 transition-opacity duration-300" />
        )}
        <span className="relative z-10">{children}</span>
      </Button>
    </motion.div>
  )
})

InteractiveButton.displayName = "InteractiveButton"