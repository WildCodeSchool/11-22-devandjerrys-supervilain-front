import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import BlockFiltreCatalogue from '../components/BlockFilterCatalogue'
import ResultatCatalogue from '../components/ResultatCatalogue'
import logoPanierTotal from '../assets/icons/icoPanierTotal.png'

const Catalogue = () => {
  useEffect(() => {
    document.body.classList.add('catalogue-layout')
    return () => {
      document.body.classList.remove('catalogue-layout')
    }
  }, [])

  
  const [filterCatalogueResult, setFilterCatalogueResult] = useState([])
  const [vilains, setVilains] = useState([])
  const [test, setTest] = useState([])
  const [cart, setCart] = useState([])
  const [removeOnCart, setRemoveOnCart] = useState('')
  useEffect(() => {
    setCart(cart.filter(item => item !== removeOnCart))
    setRemoveOnCart('')
  }, [removeOnCart])

  const items = JSON.parse(localStorage.getItem('cart'))
  useEffect(() => {
    if (items) {
      setCart(items)
    }
  }, [])
  useEffect(() => {
    if (cart.length !== 0) {
      let uniqueArray = []
      for (let i = 0; i < cart.length; i++) {
        let exists = false
        for (let j = 0; j < uniqueArray.length; j++) {
          if (JSON.stringify(cart[i]) === JSON.stringify(uniqueArray[j])) {
            exists = true
            break
          }
        }
        if (!exists) {
          uniqueArray.push(cart[i])
        }
      }
      localStorage.setItem('cart', JSON.stringify(uniqueArray))
    }
  }, [cart])

  
  return (
    <div className='blocCatalogue'>
      <h1>SELECTIONNEZ LES SUPER-VILAINS</h1>
      <BlockFiltreCatalogue
        test={test}
        setTest={setTest}
        setVilains={setVilains}
        setFilterCatalogueResult={setFilterCatalogueResult}
      />

      <div className='globalcontainer'>
      
        <div className='container'>
          <ResultatCatalogue
            filterCatalogueResult={filterCatalogueResult}
            vilains={vilains}
            setVilains={setVilains}
            test={test}
            cart={cart}
            setCart={setCart}
            setRemoveOnCart={setRemoveOnCart}
          />
        </div>
        <div className='blockLogoPanierTotal'>
          <Link to='/panier'>
            <img
              className='logoPanierTotal'
              src={logoPanierTotal}
              alt="icone d'un panier bleu permettant d'accéder à la page panier"
            />
          </Link>
        </div>
      </div>
  
    </div>
  )
}

export default Catalogue
