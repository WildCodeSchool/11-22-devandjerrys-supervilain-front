import { Link } from 'react-router-dom'
import instagram from '../assets/icons/insta.png'
import snapchat from '../assets/icons/snap.png'
import facebook from '../assets/icons/fb.png'

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
              <a href='https://snapchat.com/'>
                <img src={snapchat} alt='twitter'></img>
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
