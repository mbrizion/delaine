import SlideIn from './SlideIn'
import mug1 from '../assets/img/creations/mug/mug1.jpg'
import white_flower from '../assets/img/creations/white_flower/white_flower.jpg'

const PresentationPage = () => {
  return (
    <>
      <SlideIn direction="right">
        <section className="w-full mt-6 flex flex-col gap-6 px-4 md:px-12 mx-auto">
          <div className="flex flex-col xl:flex-row items-center justify-center w-full">
            <img src={mug1} className="object-contain w-96 h-fit" />

            <div className="p-4 text-center md:text-left">
              <h2 className="text-3xl text-slate-800 font-semibold mb-4">
                Notre histoire
              </h2>
              <p className="text-lg text-slate-800 mb-8">
                Nous sommes une petite équipe d’artisans passionnés qui
                partagent une même vision : valoriser les techniques artisanales
                anciennes en les modernisant à travers des designs
                contemporains. Depuis plusieurs années, nous créons des objets
                de poterie et des pièces en crochet qui racontent une histoire,
                celle d’un savoir-faire minutieux et d’une créativité sans
                limite.
              </p>
            </div>
          </div>
        </section>
      </SlideIn>
      <SlideIn direction="left">
        <section className="w-full mt-6 flex flex-col gap-6 px-4 md:px-12 mx-auto">
          <div className="flex flex-col xl:flex-row-reverse items-center justify-center w-full">
            <img src={white_flower} className="object-contain w-96 h-fit" />
            <div className="p-4 text-center md:text-left">
              <h3 className="text-3xl text-slate-800 font-semibold mb-4">
                Notre mission
              </h3>
              <p className="text-lg text-slate-800 mb-8">
                Faire entrer l’art dans votre quotidien. Nous croyons en
                l’importance des objets faits main, en leur capacité à embellir
                la vie et à raconter des histoires. Chaque pièce est unique,
                façonnée avec attention pour apporter une touche d'authenticité
                à votre intérieur.
              </p>
            </div>
          </div>
        </section>
      </SlideIn>
    </>
  )
}

export default PresentationPage
