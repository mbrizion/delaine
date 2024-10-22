import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/img/logo.png'
import { cn } from '../utils/cn'
import insta from '../assets/img/insta.svg'
import instadark from '../assets/img/instadark.png'
import { instaLink } from '../config.json'
import { GiPaintedPottery, GiWool } from 'react-icons/gi'
import { HiOutlineChatAlt2 } from 'react-icons/hi'

const Header = ({ classNames, logoClassnames }) => {
  const [isHovered, setIsHovered] = useState(false)
  const navigate = useNavigate()

  const menuItems = [
    {
      icon: <GiPaintedPottery className="text-3xl text-slate-800" />,
      label: 'Poterie',
      route: '/potery',
    },
    {
      icon: <GiWool className="text-3xl text-slate-800" />,
      label: 'Crochet',
      route: '/crochet',
    },
    {
      icon: <HiOutlineChatAlt2 className="text-3xl text-slate-800" />,
      label: 'Contact',
      route: '/contact',
    },
  ]

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
