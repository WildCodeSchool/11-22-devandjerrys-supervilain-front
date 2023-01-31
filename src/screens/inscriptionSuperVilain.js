import { useEffect } from 'react'
import Connexion from '../components/Connexion'
import Inscription from '../components/Inscription'


const SuperVilain = () => {
  useEffect(() => {
    document.body.classList.add('insVi-layout')
    return () => {
      document.body.classList.remove('insVi-layout')
    }
  }, [])

  return (
    <div className='isv-page'>
      {/* <h2 className='isv-title'>The Dead Agency - Inscription / connexion</h2> */}
      {/* <div className='isv-container'> */}
      <Inscription />
      <div className='connexion-sv'>
        <Connexion />
      </div>
    </div>
    // </div>
  )
}
export default SuperVilain
