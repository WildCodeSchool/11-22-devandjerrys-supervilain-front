import logo from '../components/styles/Bouton panier total.png'

const Description = () => {
  const price = 50
  const name = 'Joker'
  return (
    <div className='blockDescription'>
      <div className='modalDescription'>
        <h2 className='title'> VOTRE PANIER</h2>
        <img className='logo' src={logo} alt='logo' />
        <div className='globalPanier'>
          <ul className='listPanier'>
            <li>
              {name} .....................................................
              {price} €
            </li>
            <li>
              {name} .....................................................
              {price} €
            </li>
            <li>
              {name} .....................................................{' '}
              {price} €
            </li>
          </ul>
          <p>
            TOTAL ...................................... {price + price + price}
            €
          </p>
        </div>
        <div className='buttonG'>
          <button className='buttonP'> PAYER </button>
          <button className='buttonA'> ANNULER </button>
        </div>
      </div>
    </div>
  )
}

export default Description
