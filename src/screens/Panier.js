import Selection from '../components/Selection'
import Description from '../components/Description'
import { useState, useEffect } from 'react'
const Panier = () => {
  const [panierStorage, setPanierStorage] = useState([])
  const [panierTotal, setPanierTotal] = useState(0)

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cart'))

    if (items) {
      setPanierStorage(items)
    }
  }, [])

  useEffect(() => {
    setPanierTotal(panierStorage.map(e => e.price).reduce((a, b) => a + b, 0))
  }, [panierStorage])
  useEffect(() => {
    document.body.classList.add('panier-layout')
    return () => {
      document.body.classList.remove('panier-layout')
    }
  }, [])
  return (
    <div className='globalScreen'>
      <Selection panier={panierStorage} />
      <Description
        panier={panierStorage}
        setPanier={setPanierStorage}
        total={panierTotal}
      />
    </div>
  )
}
export default Panier
