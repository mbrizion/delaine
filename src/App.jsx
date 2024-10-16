import { useEffect } from 'react'
import Header from './components/Header'
import Carousel from './components/Carousel'

function App() {
  useEffect(() => {
    document.title = "Delaine & D'argile"
  }, [])

  const images = [
    'https://via.placeholder.com/600x400/FF5733/FFFFFF?text=Image+1',
    'https://via.placeholder.com/600x400/33FF57/FFFFFF?text=Image+2',
    'https://via.placeholder.com/600x400/3357FF/FFFFFF?text=Image+3',
  ]

  return (
    <>
      <div className="flex flex-col items-center bg-red-100 p-2">
        <Header classNames="w-full" />
        <Carousel classNames="w-full" images={images} />
      </div>
    </>
  )
}

export default App
