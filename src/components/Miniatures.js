// import '../screens/Miniatures.scss'
//
const Miniatures = props => (
  <div className='vilainpictures'>
    <p>
      SELECTIONNEZ LES SUPER-VILAINS
      <br />
      QUE VOUS SOUHAITEZ
    </p>

    <div className='cards'>
      <img className='cards-photo' src={props.image} />
      <h4>Pouvoir:{props.power}</h4>
      <h4>Prix:{props.price}</h4>
    </div>
  </div>
)

export default Miniatures
