import Carte from '../assets/images/cb_visa.png'

const ModalPaiement = () => {
  function handleClick(e) {
    e.preventDefault()
  }
  return (
    <div className='background'>
      <div className='modalPaiement'>
        <form className='description'>
          <div className='label1'>
            <input type='text' name='name' placeholder=' Nom sur la carte' />
          </div>

          <div className='label'>
            <img className='visaCarte' src={Carte} alt='logo' />
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
          <button href='#' className='button-paiement' onClick={handleClick}>
            &#128274; PAYEZ
          </button>
        </form>
      </div>
    </div>
  )
}
export default ModalPaiement