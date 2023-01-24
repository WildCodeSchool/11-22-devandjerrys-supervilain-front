import { Link } from 'react-router-dom'
import { useState } from 'react'


const Header = (props) => {
  const [showLinks, setShowLinks] = useState(false)

  const handleShowLinks = () => {
    setShowLinks(!showLinks)
  }

  return (
    <>
      <nav className='header-container'>
        <h1 className='title'><Link to='/'><span className='red'>DEAD</span> <span className='blue'>AGENCY</span></Link></h1>
        <div className='nav__links'>
          <ul>
            <li onClick={handleShowLinks}>
              <Link to='/' className='nav__link'>Home</Link>
            </li>
            <span className='border'></span>
            <li onClick={handleShowLinks}>
              <Link to='/news-jeux' className='nav__link'>News | Jeux</Link>
            </li>
            <span className='border'></span>
            <li onClick={handleShowLinks}>
              <Link to='/about' className='nav__link'>A Propos</Link>
            </li>
            <span className='border'></span>
            <li onClick={handleShowLinks}>
              <Link to='/contact' className='nav__link'>Contact</Link>
            </li>
          </ul>
        </div>
          <button className='burger' onClick={handleShowLinks}>
            <span className='burger-bar'></span>
          </button>
      </nav>
    </>
  )
}

export default Header
