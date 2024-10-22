import Header from './Header'
import Carousel from './Carousel'
import categories from '../config/images'
import { useEffect } from 'react'

const Potery = () => {
  useEffect(() => {
    document.title = "Delaine & D'argile - Poterie"
  }, [])

  return (
    <div className="flex flex-col items-center bg-white p-2">
      <div className="sm:w-4/5 w-full">
        <Header logoClassnames="w-40" />
      </div>
      <h1 className="text-3xl font-medium w-3/5 mt-20 ">Poterie</h1>
      <div className="sm:w-3/5 text-left mt-6">
        <p className="text-lg">
          Découvrez notre collection unique de poteries artisanales, où chaque
          pièce raconte une histoire. Nous allions tradition et créativité pour
          vous offrir des œuvres qui embelliront votre intérieur tout en
          apportant une touche d'authenticité.
        </p>
      </div>

      <div className="sm:w-4/5 mt-8 flex flex-col sm:flex-row gap-8 justify-center">
        {Object.entries(categories).map(([key, { title }]) => (
          <div key={key} className="mb-8">
            <h2 className="text-xl font-semibold mb-4">{title}</h2>
            <Carousel category={categories[key]} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Potery
