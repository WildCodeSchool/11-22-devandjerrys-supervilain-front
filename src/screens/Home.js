import Header from '../components/Header'
import Footer from '../components/Footer'
const Home = () => (
  <div className='home-container'>
    <Header />
    <div className='home'>
      <h3>
        " Vous souhaitez recruter des super-vilain ? <br />
        Inscrivez-vous et faites votre choix ! "
      </h3>
      <h3>
        " Vous souhaitez intégrer notre catalogue de super-vilain ? <br />
        Inscrivez-vous et passez le test ! "
      </h3>
      <div className='image-superhéros'></div>
      <div className='image-supervilain'></div>
      <button type='button' className='btn-superheros'>
        Vous êtes un super-héros
      </button>
      <button type='button' className='btn-supervilain'>
        Vous êtes un super-vilain
      </button>
      {/* <Footer /> */}
    </div>
  </div>
)

export default Home
