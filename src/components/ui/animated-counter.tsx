import React, { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

interface AnimatedCounterProps {
  from?: number
  to: number
  duration?: number
  className?: string
}

export const AnimatedCounter = React.memo(({
  from = 0,
  to,
  duration = 1000,
  className
}: AnimatedCounterProps) => {
  const [count, setCount] = useState(from)
  const { ref, inView } = useInView({ triggerOnce: true })

  useEffect(() => {
    if (!inView) return

    let startTime: number
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(from + (to - from) * easeOutQuart))
      
      if (progress < 1) {
        requestAnimationFrame(step)
      }
    }
    
    requestAnimationFrame(step)
  }, [inView, from, to, duration])

  return (
    <span ref={ref} className={className}>
      {count.toLocaleString()}
    </span>
  )
})

AnimatedCounter.displayName = "AnimatedCounter"