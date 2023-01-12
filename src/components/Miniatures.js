import loki from '../assets/images/loki.png'

const Miniatures = () => (
  <div className='vilainpictures'>
    <div className='cards'>
      <div className='card-body'>
        <div className='pseudo'>
          <h2>LOKI</h2>
        </div>

        <div className='picture'>
          <img className='frame' src={loki} alt='Photo du vilain' />
        </div>

        <div className='description'>
          <h3>POUVOIR: BLABLA </h3>
          <h3>PRIX: 10000000 $ </h3>
        </div>
      </div>
    </div>
  </div>
)

export default Miniatures
