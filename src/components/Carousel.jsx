import { useEffect, useState } from 'react'
import { HiChevronLeft, HiChevronRight, HiX } from 'react-icons/hi'

const Carousel = ({ category }) => {
  const { items } = category
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const [touchStartX, setTouchStartX] = useState(null)

  useEffect(() => {
    const preloadImages = () => {
      items.forEach((item) => {
        const img = new Image()
        img.src = item.image
      })
    }
    preloadImages()

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    window.addEventListener('keydown', handleEscape)
    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
  }, [items])

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
  }

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1,
    )
  }

  const handleImageClick = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    console.log('Modal closed') // Debug log
    setIsOpen(false)
    setCurrentIndex(0)
  }

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX)
  }

  const handleTouchMove = (e) => {
    if (touchStartX !== null) {
      const touchEndX = e.touches[0].clientX
      const diffX = touchStartX - touchEndX

      if (Math.abs(diffX) > 50) {
        if (diffX > 0) {
          nextImage()
        } else {
          prevImage()
        }
        setTouchStartX(null)
      }
    }
  }

  const handleTouchEnd = () => {
    setTouchStartX(null)
  }

  return (
    <div className="w-fit">
      <img
        src={items[0].image}
        alt={`Main Image`}
        className="w-full max-w-xl h-80 object-contain cursor-pointer mx-auto"
        onClick={handleImageClick}
      />
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center transition-all">
          <div
            className="bg-black bg-opacity-80 h-screen w-screen absolute"
            onClick={handleClose}
          />
          <HiX
            className="absolute text-2xl text-white top-4 right-4 cursor-pointer"
            onClick={handleClose}
          />
          <div className="relative z-10 p-2">
            <div
              className="flex justify-center items-center w-full h-full flex-col md:flex-row max-w-full max-h-[600px] md:max-h-auto md:w-auto"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div className="hidden md:flex items-center">
                <button
                  onClick={prevImage}
                  className="text-white text-6xl p-2 bg-opacity-50 rounded-full"
                >
                  <HiChevronLeft />
                </button>
              </div>
              <img
                src={items[currentIndex].image}
                alt={`Image ${currentIndex + 1}`}
                className="object-contain max-w-full max-h-[600px] md:max-h-auto md:w-auto rounded-t-lg md:rounded-none md:rounded-l-lg"
              />
              <div className="bg-white bg-opacity-90 p-4 flex flex-col justify-between h-[600px] w-96 rounded-b-lg md:rounded-none md:rounded-r-lg">
                <div className="flex-grow">
                  <h2 className="text-xl font-semibold mb-2">Details</h2>
                  <p className="text-base">{items[currentIndex].def}</p>
                </div>
              </div>
              <div className="hidden md:flex items-center">
                <button
                  onClick={nextImage}
                  className="text-white text-6xl p-2 bg-opacity-50 rounded-full"
                >
                  <HiChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Carousel
