import { useState } from 'react'

import StarSVG from '../../../svg/star.svg'
import AllSVG from '../../../svg/all.svg'

interface ButtonProps {
  title: string
  active: boolean
  onPress: React.MouseEventHandler
  icon: 'all' | 'top'
}

const HeaderButton = ({ title, icon, active, onPress }: ButtonProps) => {
  const [isHovered, setHovered] = useState(false)
  const mouseEnter = () => setHovered(true)
  const mouseLeave = () => setHovered(false)

  const icons = {
    all: (
      <AllSVG
        className={`${
          !active ? 'fill-headerBtnText' : 'fill-headerBtnTextActive'
        } ${
          isHovered
            ? !active &&
              'transition-colors duration-300 fill-headerBtnTextHover transition duration-300 scale-[1.3]'
            : !active &&
              'transition-colors duration-300 fill-headerBtnText transition duration-300 scale-1'
        } `}
      />
    ),
    top: (
      <StarSVG
        className={`${
          !active ? 'fill-headerBtnText' : 'fill-headerBtnTextActive'
        } ${
          isHovered
            ? !active &&
              'transition-colors duration-300 fill-headerBtnTextHover transition duration-300 scale-[1.3]'
            : !active &&
              'transition-colors duration-300 fill-headerBtnText transition duration-300 scale-1'
        } `}
      />
    ),
  }

  return (
    <div
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      className="h-1/2 pt-[2px]"
    >
      <button
        className={`cursor-${
          active
            ? 'default bg-gradient-to-r from-headerBtnGradFrom to-headerBtnGradTo'
            : 'pointer'
        } relative block w-full h-full pr-[43px] pl-[14px] bg-headerBtn rounded-[3px]`}
        onClick={onPress}
      >
        <span
          className={`block relative text-[12px] ${
            active ? 'text-headerBtnTextActive' : 'text-headerBtnText'
          } font-bold uppercase ${
            isHovered && !active
              ? 'transition-color duration-300 text-headerBtnTextHover'
              : ''
          }
          ${
            !isHovered && !active
              ? 'transition-color duration-300 text-headerBtnText'
              : ''
          }
          `}
        >
          {title}
        </span>
        <div className="absolute h-1/2 top-1/2  mt-[-8px] right-[14px]">
          {icons[icon]}
        </div>
      </button>
    </div>
  )
}

export default HeaderButton
