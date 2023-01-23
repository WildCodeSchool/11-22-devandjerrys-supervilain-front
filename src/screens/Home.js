

import { Link } from 'react-router-dom'

const Home = () => {
  
  return (
    <>
    <div className='home-container'>
      <div className='text-container'>
        <h3 className="text-superheros">" Vous souhaitez recruter des super-vilain ? <br />Inscrivez-vous et faites votre choix ! "</h3>
        <h3 className="text-supervilain">" Vous souhaitez integrer notre catalogue de super-vilain ? <br />Inscrivez-vous et passez le test ! "</h3>
      </div>  
      
      <div className="btn-container">
      <Link to="/catalogue"><button type='button' className='btn-superheros'>Vous etes un super-heros</button></Link>
      <Link to="/Connectezvous"><button type='button' className='btn-supervilain'>Vous etes un super-vilain</button></Link>
      </div>
      <div className="smoke-container">
        {/* <img src={bluesmoke} alt="blue smoke" className="bluesmoke"></img>
        <img src={redsmoke} alt="red smoke" className="redsmoke"></img> */}
      </div>
    </div> 
  </>
  )
}

export default Home
