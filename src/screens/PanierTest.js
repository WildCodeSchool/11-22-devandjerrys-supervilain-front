import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Modalpaiement from '../components/ModalPaiement'

const PanierTest = () => {
  const [openModal, setOpenModal] = useState(false)
  const [panierStorage, setPanierStorage] = useState([])
  const [panierTotal, setPanierTotal] = useState(0)
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cart'))

    if (items) {
      setPanierStorage(items)
    }
  }, [])
  const deleteOnCart = i => {
    const panierTemp = [...panierStorage]
    panierTemp.splice(i, 1)
    setPanierStorage(panierTemp)
    localStorage.setItem('cart', JSON.stringify(panierTemp))
  }
  useEffect(() => {
    setPanierTotal(panierStorage.map(e => e.price).reduce((a, b) => a + b, 0))
  }, [panierStorage])
  return (
    <>
      <div style={{ backgroundColor: 'white' }}>
        {panierStorage.map((e, i) => (
          <p key={i}>
            Pseudo : {e.pseudo} prix : {e.price}
            <button onClick={() => deleteOnCart(i)}>Delete</button>
          </p>
        ))}
        <p>Total : {panierTotal}</p>
        <button
          href='#'
          onClick={() => {
            setOpenModal(true)
          }}
        >
          Payer
        </button>
        <Link to='/'>retour Home</Link>
        <Link to='/catalogue'>retour Catalogue</Link>
      </div>
      {openModal && <Modalpaiement closeModal={setOpenModal} />}
    </>
  )
}
export default PanierTest
