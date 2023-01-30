import { useEffect } from 'react'
import Inscription from '../components/Inscription'
import Connexion from '../components/Connexion'

const Hero = () => {
  useEffect(() => {
    document.body.classList.add('insch-layout')
    return () => {
      document.body.classList.remove('insch-layout')
    }
  }, [])

  return (
    <div className='ih-page'>
      <Inscription />
      <div className='connexion-hero'>
        <Connexion super='heros' />
      </div>
    </div>
  )
}

export default Hero
