import { Link } from "react-router-dom"

const ModalPaiement = ({ closeModal }) => {
  return (
    <div className='background'>
      <div className='modalPaiement'>
        <form className='description'>
          <div className='label1'>
            <input type='text' name='name' placeholder=' Nom sur la carte' />
          </div>
          <br />
          <div className='label'>
            <input type='text' name='name' placeholder=' N° de carte' />
          </div>
          <br />
          <div className='label'>
            <input type='text' name='name' placeholder=" Date d'expiration" />
          </div>
          <br />
          <div className='label'>
            <input type='text' name='name' placeholder=' Cryptogramme visuel' />
          </div>
          <br />
          <Link to='/catalogue'>
          <button
            href='#'
            className='button-paiement'
            onClick={() => closeModal(false)}
          >
            &#128274; PAYEZ
          </button></Link>
        </form>
      </div>
    </div>
  )
}
export default ModalPaiement
