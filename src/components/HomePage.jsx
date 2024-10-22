import React from 'react'

const HomePage = ({ imageSrc, altText }) => {
  return (
    <div className="h-screen w-full overflow-hidden relative">
      <img
        src={imageSrc}
        alt={altText}
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="absolute top-0 flex flex-col items-center justify-center space-y-8 h-full">
        <h1 className="text-white text-center text-4xl md:text-6xl font-medium mb-20 opacity-0 transform translate-y-8 transition-opacity duration-1000 ease-out delay-300 animate-fade-in">
          De laine et d'argile
        </h1>
        <div className="flex flex-col items-center gap-4 opacity-0 transform translate-y-8 transition-opacity duration-1000 ease-out delay-1000 animate-fade-in">
          <h1 className="text-3xl md:text-5xl font-medium text-white text-center">
            Bienvenue dans l’univers de la poterie et du crochet !
          </h1>
          <p className="text-lg md:text-xl text-white w-4/5 lg:w-3/5 text-center">
            Découvrez notre passion pour l’artisanat à travers des créations
            uniques faites main. Que vous soyez amateur de poterie ou adepte du
            crochet, nous vous invitons à explorer nos collections de pièces
            artistiques et utilitaires, conçues avec soin et amour du détail.
          </p>
        </div>
      </div>
    </div>
  )
}

export default HomePage
