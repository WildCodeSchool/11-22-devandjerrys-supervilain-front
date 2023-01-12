const Panier = () => {
  function handleClick(e) {
    e.preventDefault()
  }
  return (
    <div className='panier'>
      <div className='panier-header'>
        <h2>VOTRE PANIER</h2>
        <h3> VOICI LES SUPER-VILAINS QUE VOUS AVEZ SELECTIONNES</h3>
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
        <button href='#' className='button' onClick={handleClick}>
          VALIDEZ
        </button>
      </div>
    </div>
  )
}
export default Panier
