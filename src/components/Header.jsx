import { useState } from 'react'
import logo from '../assets/img/logo.png'
import { cn } from '../utils/cn'
import insta from '../assets/img/insta.svg'
import instadark from '../assets/img/instadark.png'
import { instaLink } from '../config.json'

const Header = ({ classNames }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className={cn('flex justify-center bg-white', classNames)}>
      <div className="w-full flex items-center">
        <div>
          <img src={logo} alt="logo" className="w-52 h-52" />
        </div>
        <div className="h-full w-full">
          <div className="border-b border-l h-1/2 w-full flex items-center justify-start">
            <ul className="flex gap-8 ml-44 w-full justify-between">
              <li>Bla bla</li>
              <li>Bla bla</li>
              <li>Bla bla</li>
            </ul>
            <div className="w-full h-full bg-transparent flex items-center justify-end mr-8">
              <div
                className="relative w-8 h-8"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <a href={instaLink} target="_blank">
                  <img
                    src={instadark}
                    alt="Instagram dark logo"
                    className={cn(
                      'absolute transition-opacity duration-400 cursor-pointer',
                      isHovered ? 'opacity-0' : 'opacity-100',
                    )}
                  />
                </a>
                <a href={instaLink} target="_blank">
                  <img
                    src={insta}
                    alt="Instagram colorful logo"
                    className={cn(
                      'absolute transition-opacity duration-400 cursor-pointer',
                      isHovered ? 'opacity-100' : 'opacity-0',
                    )}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
