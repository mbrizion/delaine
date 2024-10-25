import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/img/logo.png'
import { cn } from '../utils/cn'
import insta from '../assets/img/insta.svg'
import instadark from '../assets/img/instadark.png'
import { instaLink } from '../config.json'
import { GiPaintedPottery, GiWool } from 'react-icons/gi'
import { HiOutlineChatAlt2 } from 'react-icons/hi'
import { useTranslation } from 'react-i18next'
import fr from '../assets/img/fr.svg'
import us from '../assets/img/us.svg'

const flagIcons = { fr, us }

const Header = ({ classNames, logoClassnames }) => {
  const [isHovered, setIsHovered] = useState(false)
  const { t, i18n } = useTranslation()
  const [language, setLanguage] = useState(i18n.language || 'fr')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const navigate = useNavigate()

  const menuItems = [
    {
      icon: <GiPaintedPottery className="text-3xl text-slate-800" />,
      label: t('pottery'),
      route: '/potery',
    },
    {
      icon: <GiWool className="text-3xl text-slate-800" />,
      label: t('crochet'),
      route: '/crochet',
    },
    {
      icon: <HiOutlineChatAlt2 className="text-3xl text-slate-800" />,
      label: t('contact'),
      route: '/contact',
    },
  ]

  const handleLanguageChange = (lang) => {
    setLanguage(lang)
    i18n.changeLanguage(lang)
    setIsDropdownOpen(false)
  }

  // Function to get the opposite language flag
  const getOppositeLanguage = () => {
    return language === 'fr' ? 'us' : 'fr'
  }

  return (
    <header className={cn('bg-white shadow-sm', classNames)}>
      <div className="mx-auto flex flex-col md:flex-row justify-between items-center py-4 px-6 md:px-12">
        {/* Logo */}
        <div className="flex items-center mb-4 md:mb-0">
          <img
            src={logo}
            alt="logo"
            className={cn(logoClassnames ? logoClassnames : 'md:w-48 w-56')}
          />
        </div>
        <div className="text-2xl md:text-3xl font-medium text-center hidden md:block">
          <span className="whitespace-nowrap text-slate-800">
            De laine et d'argile
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex gap-4 md:gap-10 w-full justify-between md:justify-end">
          <ul className="flex items-center justify-center space-x-4 md:space-x-8 text-base md:text-lg font-medium text-slate-800 mr-0 md:mr-14">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="relative cursor-pointer flex flex-col items-center"
                onClick={() => navigate(item.route)}
              >
                <div className="flex gap-2">
                  {item.icon}
                  <span className="hidden md:block">{item.label}</span>
                </div>
              </li>
            ))}
          </ul>

          {/* Modern Language Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-200 transition-colors duration-300"
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
              <div className="absolute bg-white border border-gray-200 shadow-lg overflow-hidden z-20 flex items-center rounded-md">
                <ul className="flex flex-col text-gray-700">
                  <li
                    onClick={() => handleLanguageChange(getOppositeLanguage())}
                    className="flex items-center p-2 cursor-pointer hover:bg-gray-100 transition-colors duration-200"
                  >
                    <img
                      src={flagIcons[getOppositeLanguage()]}
                      alt={`${getOppositeLanguage()} flag`}
                      className="w-5 h-5 mr-2"
                    />
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Instagram Hover Effect */}
          <div className="relative">
            <div
              className="relative w-8 h-8"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <a href={instaLink} target="_blank" rel="noopener noreferrer">
                <img
                  src={instadark}
                  alt="Instagram dark logo"
                  className={cn(
                    'absolute transition-opacity duration-300 ease-in-out',
                    isHovered ? 'opacity-0' : 'opacity-100',
                  )}
                />
              </a>
              <a href={instaLink} target="_blank" rel="noopener noreferrer">
                <img
                  src={insta}
                  alt="Instagram colorful logo"
                  className={cn(
                    'absolute transition-opacity duration-300 ease-in-out',
                    isHovered ? 'opacity-100' : 'opacity-0',
                  )}
                />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
