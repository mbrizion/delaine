import React, { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import fr from '../assets/img/fr.svg'
import us from '../assets/img/us.svg'
import i18n from '../../i18n'

const flagIcons = { fr, us }

const HomePage = ({ imageSrc, altText }) => {
  const [language, setLanguage] = useState(i18n.language || 'fr')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)
  const { t } = useTranslation()

  const handleLanguageChange = (lang) => {
    setLanguage(lang)
    i18n.changeLanguage(lang)
    setIsDropdownOpen(false)
  }

  const getOppositeLanguage = () => {
    return language === 'fr' ? 'us' : 'fr'
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [dropdownRef])

  return (
    <div className="h-screen w-full overflow-hidden relative flex items-center justify-center">
      <img
        src={imageSrc}
        alt={altText}
        className="w-fit h-screen object-cover"
      />
      <div className="absolute top-4 right-4 z-20">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 bg-gray-50 transition-colors duration-300 opacity-85"
        >
          <img
            src={flagIcons[language]}
            alt="selected language flag"
            className="w-6 h-6"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-4 w-4 transition-transform duration-300 ${
              isDropdownOpen ? 'rotate-180' : ''
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {isDropdownOpen && (
          <div
            ref={dropdownRef}
            className="absolute bg-gray-50 border border-gray-200 shadow-lg overflow-hidden z-30 flex items-center rounded-md opacity-85"
          >
            <ul className="flex flex-col text-gray-700">
              <li
                onClick={() => handleLanguageChange(getOppositeLanguage())}
                className="flex items-center p-2 cursor-pointer hover:bg-gray-100 transition-colors duration-200 justify-center gap-2"
              >
                <img
                  src={flagIcons[getOppositeLanguage()]}
                  alt={`${getOppositeLanguage()} flag`}
                  className="w-5 h-5"
                />
                <span className="w-4 h-4" />
              </li>
            </ul>
          </div>
        )}
      </div>

      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="absolute top-0 flex flex-col items-center justify-center space-y-8 h-full">
        <h1 className="text-white text-center text-4xl md:text-6xl font-medium mb-20 opacity-0 transform translate-y-8 transition-opacity duration-1000 ease-out delay-300 animate-fade-in">
          {t('siteTitle')}
        </h1>
        <div className="flex flex-col items-center gap-4 opacity-0 transform translate-y-8 transition-opacity duration-1000 ease-out delay-[3s] animate-fade-in">
          <h1 className="text-3xl md:text-5xl font-medium text-white text-center">
            {t('welcome')}
          </h1>
          {/* <p className="text-lg md:text-xl text-white w-4/5 lg:w-3/5 text-center">
            {t('subtitle')}
          </p> */}
        </div>
      </div>
    </div>
  )
}

export default HomePage
