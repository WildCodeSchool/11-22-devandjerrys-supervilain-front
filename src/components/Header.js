import { Link } from 'react-router-dom'
import { useState } from 'react'

const Header = (props) => {
  const [showLinks, setShowLinks] = useState(false)

  const handleShowLinks = () => {
    setShowLinks(!showLinks)
  }
  props.setTitle('THE')
  props.setTitleColorRed('DEAD')
  props.setTitleColorBlue('AGENCY')
  return (
    <>
      <div className='header-container'>
        <div
          className={`menu__burger ${showLinks ? 'show-burger' : 'hide-nav'} `}
        >
          <ul className='menu__links'>
            <li className='menu__item slideInLeft-1' onClick={handleShowLinks}>
              <Link to='/' className='menu__link'>
                Home
              </Link>
            </li>
            <li className='menu__item slideInLeft-2' onClick={handleShowLinks}>
              <Link to='/news-game' className='menu__link'>
                News | Jeux
              </Link>
            </li>
            <li className='menu__item slideInLeft-3' onClick={handleShowLinks}>
              <Link to='/qui-sommme-nous?' className='menu__link'>
                Qui somme-nous ?
              </Link>
            </li>
            <li className='menu__item slideInLeft-4' onClick={handleShowLinks}>
              <Link to='/contact' className='menu__link'>
                Contact
              </Link>
            </li>
          </ul>
          <button className='burger' onClick={handleShowLinks}>
            <span className='burger-bar'></span>
          </button>
        </div>
        <div className="title-others">
        <h1 className="title">{props.title} <span className='red'>{props.titleColorRed}</span> <span className='blue'>{props.titleColorBlue}</span></h1>
        </div>
      </div>
    </>
  )
}

export default Header
