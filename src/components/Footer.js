import { Link } from 'react-router-dom'
import instagram from '../assets/icons/instagram.png'
import twitter from '../assets/icons/twitter.png'
import facebook from '../assets/icons/facebook.png'

const Footer = () => {
  return (
    <>
      <div className='footer-container'>
        <div className='logo-container'>
          <ul>
            <li>
              <a href='https://www.instagram.com/'>
                <img src={instagram} alt='instagram'></img>
              </a>
            </li>
            <li>
              <a href='https://twitter.com/'>
                <img src={twitter} alt='twitter'></img>
              </a>
            </li>
            <li>
              <a href='https://www.facebook.com/'>
                <img src={facebook} alt='facebook'></img>
              </a>
            </li>
          </ul>
        </div>
        <div className='contact'>
          <Link to='/contact'>Nous contacter</Link>
        </div>
      </div>
    </>
  )
}

export default Footer
