import { useEffect } from 'react'
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
      <Inscription page='vilain' />
    </div>
    // </div>
  )
}
export default SuperVilain
