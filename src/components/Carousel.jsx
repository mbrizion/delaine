import { cn } from '../utils/cn'
import React, { useState, useEffect } from 'react'

const Carousel = ({ images, classNames }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [loading, setLoading] = useState(true)

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    )
  }

  const handleTouchStart = (e) => {
    const touchStartX = e.touches[0].clientX
    const handleTouchMove = (event) => {
      const touchEndX = event.touches[0].clientX
      const diffX = touchStartX - touchEndX

      if (diffX > 50) {
        nextImage()
        removeTouchMoveListener()
      } else if (diffX < -50) {
        prevImage()
        removeTouchMoveListener()
      }
    }

    const removeTouchMoveListener = () => {
      document.removeEventListener('touchmove', handleTouchMove)
      document.removeEventListener('touchend', removeTouchMoveListener)
    }

    document.addEventListener('touchmove', handleTouchMove)
    document.addEventListener('touchend', removeTouchMoveListener)
  }

  useEffect(() => {
    const preloadImages = images.map((image) => {
      const img = new Image()
      img.src = image
      return img
    })
  }, [images])

  return (
    <div className={cn('flex justify-center bg-white mt-2', classNames)}>
      <div className="relative">
        <img
          src={images[currentIndex]}
          alt={`Carousel Image ${currentIndex + 1}`}
          className="w-full h-auto transition-opacity duration-300 ease-in-out"
          onTouchStart={handleTouchStart}
          onLoad={() => setLoading(false)}
          style={{ opacity: loading ? 0 : 1 }}
        />
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white bg-black rounded-full p-2 hidden md:block"
        >
          &lt;
        </button>
        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white bg-black rounded-full p-2 hidden md:block"
        >
          &gt;
        </button>
      </div>
    </div>
  )
}

export default Carousel
