import Header from '../components/Header'
import Miniatures from '../components/Miniatures'

const Catalogue = () => (
  <div>
    <Header />
    <div className='container'>
      <div className='choose'>
        <h2>
          SELECTIONNEZ LES SUPER-VILAINS
          <br />
          QUE VOUS SOUHAITEZ
        </h2>
      </div>
      <Miniatures />
      <Miniatures />
      <Miniatures />
      <Miniatures />
    </div>
  </div>
)

export default Catalogue
