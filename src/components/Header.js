import { Link } from 'react-router-dom'
import { useState } from 'react'

const Header = () => {
  const [showLinks, setShowLinks] = useState(false)

  const handleShowLinks = () => {
    setShowLinks(!showLinks)
  }

  return (
    <>
      <div className='header-container'>
        <div
          className={`menu__burger ${showLinks ? 'show-burger' : 'hide-nav'} `}
        >
          <ul className='menu__links'>
            <li className='menu__item slideInLeft-1'>
              <Link to='/' className='menu__link'>
                Home
              </Link>
            </li>
            <li className='menu__item slideInLeft-2'>
              <Link to='/news-jeux' className='menu__link'>
                News | Jeux
              </Link>
            </li>
            <li className='menu__item slideInLeft-3'>
              <Link to='/qui-sommme-nous?' className='menu__link'>
                Qui somme-nous ?
              </Link>
            </li>
            <li className='menu__item slideInLeft-4'>
              <Link to='/contact' className='menu__link'>
                Contact
              </Link>
            </li>
          </ul>
          <button className='burger' onClick={handleShowLinks}>
            <span className='burger-bar'></span>
          </button>
        </div>
        <h1 className='title-home'>
          THE <span className='red'>DEAD</span> <span className='blue'>AGENCY</span>
        </h1>
      </div>
    </>
  )
}

export default Header
