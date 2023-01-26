import { useState } from 'react'
import Modalpaiement from './ModalPaiement'

const Panier = () => {
  const [openModal, setOpenModal] = useState(false)
  return (
    <>
      <div className='panier'>
        <div className='panier-header'>
          <h2>VOTRE PANIER</h2>
          <h3 className='titre'>
            {' '}
            VOICI LES SUPER-VILAINS QUE VOUS AVEZ SELECTIONNES
          </h3>
          <div className='panier-bloc'>
            <div className='panier-list'>
              <img className='image' src='' alt='' />
              <p className='description'>
                Name <br />
                Price <br />
              </p>
            </div>
            <div className='panier-list'>
              <img className='image' src='' alt='' />
              <p className='description'>
                Name <br />
                Price <br />
              </p>
            </div>
            <div className='panier-list'>
              <img className='image' src='' alt='' />
              <p className='description'>
                Name <br />
                Price <br />
              </p>
            </div>
          </div>
        </div>
        <div className='total'>
          <div className='total-panier'> TOTAL :</div>
          <button
            href='#'
            className='button'
            onClick={() => {
              setOpenModal(true)
            }}
          >
            VALIDEZ
          </button>
        </div>
      </div>
      {openModal && <Modalpaiement closeModal={setOpenModal} />}
    </>
  )
}
export default Panier
