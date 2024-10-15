import { useEffect } from 'react'
import flower from '../assets/img/flower2.png'
import background from '../assets/img/background_img.jpg'
function Flower() {
  useEffect(() => {
    document.title = "Delaine & D'argile"

    const starsContainer = document.querySelector('.container__elements2 .pill')

    const star = document.createElement('span')
    star.className = `star`
    star.style.width = `${75}px` // Random size
    star.style.height = star.style.width // Keep it circular
    star.style.right = `${0}px` // Random horizontal position
    star.style.top = `${0}px` // Random vertical position
    star.style.transform = `scale(${Math.random() * 0.9 + 0.1})` // Random scale
    starsContainer.appendChild(star)

    for (let i = 1; i <= 1; i++) {
      const lanternX = document.createElement('div')
      lanternX.className = `lanternX lanternX${i}`
      const duration = `${Math.random() * 10 + 10}s`
      lanternX.style.setProperty('--duration', duration)
      lanternX.style.animationDuration = duration
      lanternX.style.animationDelay = `${i * 0.5}s`
      lanternX.style.left = `${Math.random() * 100}px`

      const lanternY = document.createElement('img')
      lanternY.className = `lanternY lanternY${i}`
      lanternY.src = flower
      lanternY.alt = `flower ${i}`
      lanternY.style.animationDuration = duration
      lanternX.appendChild(lanternY)
      starsContainer.appendChild(lanternX)
    }
  }, [])

  return (
    <>
      <div className="h-screen bg-palette-3">
        <div className="flex w-full h-full items-center justify-center flex-col">
          <div className="flex justify-center items-center min-h-screen bg-background">
            <div className="container select-none">
              <div className="container__elements2 flex justify-center items-center">
                <div className="pill relative w-56 h-[335px] bg-gradient-to-b from-sky-400 to-sky-900  overflow-hidden">
                  <img
                    className="h-full"
                    src={background}
                    alt="Lantern Hills"
                  />
                  <div className="lanternContainer"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Flower
