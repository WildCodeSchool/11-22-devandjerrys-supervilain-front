const ModalPaiement = () => {
  function handleClick(e) {
    e.preventDefault()
  }
  return (
    <div className='background'>
      <div className='modalPaiement'>
        <form className='description'>
          <label>
            Nom sur la carte
            <input type='text' name='name' />
          </label>
          <br />
          <label>
            N° de carte
            <input type='text' name='name' />
          </label>
          <br />
          <label>
            Date d'expiration
            <input type='text' name='name' />
          </label>
          <br />
          <label>
            Cryptogramme visuel
            <input type='text' name='name' />
          </label>
          <br />
          <button href='#' className='button-paiement' onClick={handleClick}>
            PAYEZ
          </button>
        </form>
      </div>
    </div>
  )
}
export default ModalPaiement
