import { Link } from 'react-router-dom'
import { useState } from 'react'

const MenuBurger = () => {
const [showLinks, setShowLinks] = useState(false)

const handleShowLinks = () => {
    setShowLinks(!showLinks)
}

    return (
        <>
            <div className={`menu__burger ${showLinks ? 'show-burger' : 'hide-nav'} `}>
                <ul className='menu__links'>
                    <li className='menu__item slideInLeft-1' onClick={handleShowLinks}>
                        <Link to='/' className='menu__link'>Home</Link>
                    </li>
                    <li className='menu__item slideInLeft-2' onClick={handleShowLinks}>
                        <Link to='/news' className='menu__link'>News</Link>
                    </li>
                    <li className='menu__item slideInLeft-3' onClick={handleShowLinks}>
                        <Link to='/qui-sommme-nous?' className='menu__link'>A Propos</Link>
                    </li>
                    <li className='menu__item slideInLeft-4' onClick={handleShowLinks}>
                        <Link to='/contact' className='menu__link'>Contact</Link>
                    </li>
                </ul>

                <button className='burger' onClick={handleShowLinks}>
                    <span className='burger-bar'></span>
                </button>
            </div>
        </>
    )
}

export default MenuBurger
