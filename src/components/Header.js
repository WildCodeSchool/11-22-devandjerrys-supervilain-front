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
            <li className='menu__item slideInLeft-1'>
              <Link to='/' className='menu__link' onClick={handleShowLinks} >
                Home
              </Link>
            </li>
            <li className='menu__item slideInLeft-2'>
              <Link to='/news-game' className='menu__link' onClick={handleShowLinks} >
                News | Jeux
              </Link>
            </li>
            <li className='menu__item slideInLeft-3'>
              <Link to='/qui-sommme-nous?' className='menu__link' onClick={handleShowLinks} >
                Qui somme-nous ?
              </Link>
            </li>
            <li className='menu__item slideInLeft-4'>
              <Link to='/contact' className='menu__link' onClick={handleShowLinks} >
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
