import { useState, useEffect } from 'react'
import logoPanier from '../assets/icons/icoPanier.png'
import logoPanierClic from '../assets/icons/icoPanierTotal.png'
import ModalCatalogue from './ModalCatalogue'
const Miniatures = props => {
  const [panierButtonAdd, setPanierButtonAdd] = useState(true)
  const addOnCart = e => {
    e.target.nextElementSibling.classList.toggle('logoPanierClic')
    e.target.nextElementSibling.classList.toggle('none')
    props.setCart(prevState => [...prevState, props.vilain])
    setPanierButtonAdd(false)
  }
  // const deleteOnCart = () => {
  //   props.setRemoveOnCart(props.vilain)
  //   setPanierButtonAdd(true)
  // }
  useEffect(() => {
    if (panierButtonAdd === false) {
      localStorage.setItem(props.vilain.pseudo, JSON.stringify(panierButtonAdd))
    }
  }, [panierButtonAdd])
  const [openModal, setOpenModal] = useState(false)
  return (
    <>
      <div className='vilainMignature'>
        <div className='picture'>
          <img onClick={() => {setOpenModal(true)}} src={props.miniatures} alt='Photo du vilain' />
        </div>
        <div className='vilainPolygon'>
          <h2>{props.pseudo}</h2>
          <p>{props.description} </p>
          <h3>
            {props.price >= 1000000
              ? props.price / 1000000 + 'M'
              : props.price / 1000 + 'K'}{' '}
            $
          </h3>
        </div>
        <div className='blockButtonCart'>
          <img
            onClick={e => {
              panierButtonAdd ? addOnCart(e) : null
            }}
            className='logoPanier'
            src={logoPanier}
            alt="Icone d'un panier, qui permet d'ajouter le vilain au panier"
          />
          <img
            className='logoPanierAnim none'
            src={logoPanierClic}
            alt="Icone d'un panier, qui permet d'ajouter le vilain au panier"
          />
        </div>
      </div>
      {openModal && <ModalCatalogue closeModal={setOpenModal} vilain = {props.vilain} />}
    </>
  )
}
export default Miniatures
