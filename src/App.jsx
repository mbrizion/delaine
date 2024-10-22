import { useEffect, useRef, useState } from 'react'
import Header from './components/Header'
import PresentationPage from './components/PresentationPage'
import HomePage from './components/HomePage'
import homepageBg from './assets/img/homepage.jpg'

function App() {
  const targetRef = useRef(null)
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    document.title = "Delaine & D'argile"

    const handleScroll = () => {
      const scrollPosition = window.scrollY

      if (scrollPosition < 5) setHasScrolled(false)

      if (!hasScrolled && scrollPosition > 1 && targetRef.current) {
        setHasScrolled(true)
        targetRef.current.scrollIntoView({ behavior: 'smooth' })
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [hasScrolled])

  return (
    <div className="overflow-x-hidden">
      <HomePage imageSrc={homepageBg} altText="Beautiful pottery and crochet" />
      <div
        ref={targetRef}
        className="flex flex-col items-center bg-white p-2 mt-screen"
      >
        <div className="sm:w-4/5 w-full">
          <Header classNames="w-full" />
          <PresentationPage />
          {/* <div className="bg-white flex mt-2 p-4">
            <Carousel classNames="w-fit h-fit" images={bowls} />
            <p className="p-6">
              Bienvenue dans l’univers de la poterie et du crochet ! Découvrez
              notre passion pour l’artisanat à travers des créations uniques
              faites main. Que vous soyez amateur de poterie ou adepte du
              crochet, nous vous invitons à explorer nos collections de pièces
              artistiques et utilitaires, conçues avec soin et amour du détail.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default App
