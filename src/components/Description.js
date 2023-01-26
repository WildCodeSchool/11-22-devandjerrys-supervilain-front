import { Link } from 'react-router-dom'
import { useState } from 'react'

import logo from '../components/styles/Bouton panier total.png'
import Modalpaiement from '../components/ModalPaiement'
const Description = ({ panier, setPanier, total }) => {
  const [openModal, setOpenModal] = useState(false)

  const deleteOnCart = i => {
    const panierTemp = [...panier]
    panierTemp.splice(i, 1)
    setPanier(panierTemp)
    localStorage.setItem('cart', JSON.stringify(panierTemp))
  }
  return (
    <>
      <div className='blockDescription'>
        {console.log(panier)}
        <div className='modalDescription'>
          <h2 className='title'> VOTRE PANIER</h2>
          <img className='logo' src={logo} alt='logo' />
          <div className='globalPanier'>
            <ul className='listPanier'>
              {panier.map((vilain, i) => (
                <li key={i}>
                  {vilain.pseudo}
                  .....................................................
                  {vilain.price} €
                  <button
                    className='buttonDelete'
                    onClick={() => deleteOnCart(i)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
            <p>TOTAL ...................................... {total}€</p>
          </div>
          <div className='buttonG'>
            <button
              className='buttonP'
              href='#'
              onClick={() => {
                setOpenModal(true)
              }}
            >
              {' '}
              PAYER{' '}
            </button>
            <Link to='/catalogue'>
              <button className='buttonA'> ANNULER </button>
            </Link>
          </div>
        </div>
      </div>
      {openModal && <Modalpaiement closeModal={setOpenModal} />}
    </>
  )
}

export default Description
