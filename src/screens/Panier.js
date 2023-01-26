import Selection from '../components/Selection'
import Description from '../components/Description'
import { useEffect } from 'react'
const Panier = () => {
  useEffect(() => {
    document.body.classList.add('panier-layout')
    return () => {
      document.body.classList.remove('panier-layout')
    }
  }, [])
  return (
    <div className='globalScreen'>
      <Selection />
      <Description />
    </div>
  )
}
export default Panier
