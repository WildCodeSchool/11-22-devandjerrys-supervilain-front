import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import smoke from '../assets/images/smokesvg.svg'
import superhome from '../assets/images/superhomesvg.svg'
import line from '../assets/images/Line.svg'

const Home = () => {
  useEffect(() => {
    document.body.classList.add('home-layout')
    return () => {
    document.body.classList.remove('home-layout')
    }
  }, [])

  return (
    <>
      <div className='home-container'>
        <div className="welcome-container">
          <h1>Bienvenue à la DEAD AGENCY</h1>
          <img className='line' src={line} alt='a line'></img>
            <p>Vous êtes un super-héros en manque de popularité ?</p>
            <p>ou</p>
            <p>Vous êtes un super-vilain et vous souhaitez financer votre projet qui est de régner sur le monde ?</p>
        </div>
        <div className='text-container'>
          <div className='text-super-vilain'>
            <Link to="/catalogue"><h2>Inscrivez-vous et passez le test !</h2></Link>
            <p>" Vous souhaitez intégrer notre catalogue de super-vilain ? "</p>
          </div>
          <div className='text-super-heros'>
            <Link to="/Connectezvous"><h2>Inscrivez-vous et faites votre choix !</h2></Link>
            <p>" Vous souhaitez recruter des super-vilain ? "</p>
          </div>
        </div>  
        <div className="img-container">
          <img src={smoke} alt="smoke" className="smoke"></img>
          <img src={superhome} alt="super-héros" className="superhome"></img>
        </div>
      </div>
    </>
  )
}

export default Home
