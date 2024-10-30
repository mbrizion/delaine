import React, { useEffect, useRef, useState } from 'react'
import { cn } from '../utils/cn.js'

const SlideIn = ({ children, direction = 'right' }) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  let slideDirection =
    direction === 'left'
      ? '-translate-x-full opacity-0'
      : 'translate-x-full opacity-0'

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        root: null,
        threshold: 0,
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={cn(
        'transform transition-transform duration-1000 ease-in-out',
        isVisible ? 'translate-x-0 opacity-100' : slideDirection,
      )}
    >
      {children}
    </div>
  )
}

export default SlideIn
