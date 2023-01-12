
import superheros from '../assets/images/SuperHeros.png'
import supervilain from '../assets/images/SuperVilain.png'
import redsmoke from '../assets/images/RedSmoke.svg'
import bluesmoke from '../assets/images/BlueSmoke.svg'
import { Link } from 'react-router-dom'

const Home = (props) => {
  props.setTitre('THE DEAD AGENCY')
  return (
    <>
    <div className='home-container'>
        <h1 className="title">{props.titre}</h1>
      <div className='text-container'>
        <h3 className="text-superheros">" Vous souhaitez recruter des super-vilain ? <br />Inscrivez-vous et faites votre choix ! "</h3>
        <h3 className="text-supervilain">" Vous souhaitez integrer notre catalogue de super-vilain ? <br />Inscrivez-vous et passez le test ! "</h3>
      </div>  
      <div className="images-container">
        <img src={superheros} alt="superheros" className='image-superhéros'></img>
        <img src={supervilain} alt="supervilain" className='image-supervilain'></img>
      </div>
      <div className="btn-container">
      <Link to="/#"><button type='button' className='btn-superheros'>Vous etes un super-heros</button></Link>
      <Link to="/#"><button type='button' className='btn-supervilain'>Vous etes un super-vilain</button></Link>
      </div>
      <div className="smoke-container">
        <img src={bluesmoke} alt="blue smoke" className="bluesmoke"></img>
        <img src={redsmoke} alt="red smoke" className="redsmoke"></img>
      </div>
    </div> 
  </>
  )
}

export default Home