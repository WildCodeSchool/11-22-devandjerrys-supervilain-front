import { Link } from 'react-router-dom'
import MenuBurger from './MenuBurger'

const Header = () => {


  return (
    <>
      <nav className='header-container'>
        <h1 className='title-header'><Link to='/'><span className='red'>DEAD</span> <span className='blue'>AGENCY</span></Link></h1>
        <div className='nav__links'>
          <ul>
            <li>
              <Link to='/' className='nav__link'>Home</Link>
            </li>
            <span className='border'></span>
            <li>
              <Link to='/news' className='nav__link'>News</Link>
            </li>
            <span className='border'></span>
            {/* <li>
              <Link to='/about' className='nav__link'>A Propos</Link>
            </li>
            <span className='border'></span> */}
            <li>
              <Link to='/contact' className='nav__link'>Contact</Link>
            </li>
          </ul>
        </div>
          <MenuBurger/>
      </nav>
    </>
  )
}

export default Header
