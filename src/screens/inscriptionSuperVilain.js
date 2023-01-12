import Header from '../components/Header'
import Inscription from '../components/Inscription'

const inscriptionSuperVilain = () => (
  <div>
    <Header />
    <div className='isv-container'>
      <h2>TEST REUSSI, INSCRIVEZ-VOUS POUR FAIRE PARTI DE NOTRE CATALOGUE!</h2>
      <div className='isv-card'></div>
      <Inscription />
    </div>
  </div>
)

export default inscriptionSuperVilain
