import { useEffect } from 'react'

function Stars() {
  useEffect(() => {
    document.title = "Delaine & D'argile"

    const starsContainer = document.querySelector('.container__elements .pill')

    for (let i = 1; i <= 25; i++) {
      const star = document.createElement('span')
      star.className = `star star${i}`
      star.style.width = `${Math.random() * 3 + 3}px` // Random size
      star.style.height = star.style.width // Keep it circular
      star.style.left = `${Math.random() * 175}px` // Random horizontal position
      star.style.top = `${Math.random() * 230}px` // Random vertical position
      star.style.transform = `scale(${Math.random() * 0.9 + 0.1})` // Random scale
      starsContainer.appendChild(star)
    }

    for (let i = 1; i <= 4; i++) {
      const lanternX = document.createElement('div')
      lanternX.className = `lanternX lanternX${i}`
      const duration = `${Math.random() * 10 + 10}s`
      lanternX.style.setProperty('--duration', duration)
      lanternX.style.animationDuration = duration
      lanternX.style.animationDelay = `${i * 0.5}s`
      lanternX.style.left = `${Math.random() * 100}px`

      const lanternY = document.createElement('img')
      lanternY.className = `lanternY lanternY${i}`
      lanternY.src =
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/3522775/LanternsLarge.png'
      lanternY.alt = `Lantern ${i}`
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
            <div className="container">
              <div className="container__elements flex justify-center items-center">
                <div className="pill relative w-40 h-[335px] bg-gradient-to-b from-brown-700 to-purple-500 rounded-[100px] overflow-hidden">
                  <img
                    className="lanternHills absolute bottom-0 left-[-25px] w-[225px]"
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3522775/lanternHills.png"
                    alt="Lantern Hills"
                  />
                  <div className="lanternContainer"></div>
                </div>
              </div>

              <div className="social-icons absolute bottom-6 right-6 flex">
                <a
                  className="social-icon social-icon--codepen"
                  href="https://codepen.io/braydoncoyer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-codepen"></i>
                  <div className="tooltip">Codepen</div>
                </a>
                <a
                  className="social-icon social-icon--twitter"
                  href="https://twitter.com/BraydonCoyer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-twitter"></i>
                  <div className="tooltip">Twitter</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Stars
