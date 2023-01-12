
import superheros from '../assets/images/superheros.png'
import supervilain from '../assets/images/supervilain.png'
import redsmoke from '../assets/images/redsmoke.svg'
import bluesmoke from '../assets/images/bluesmoke.svg'
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
        <div ><img src={bluesmoke} alt="blue smoke" className="bluesmoke"></img></div>
        <div ><img src={redsmoke} alt="red smoke" className="redsmoke"></img></div>
      </div>
    </div> 
  </>
  )
}

export default Home




 

/* 
// .home-container {
//     width: 100vw;
//     height: 100vh;
//     position: relative;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     border: 2px solid blue;
// }
// .title-container {
//     position: absolute;
//     width: 100vw;
//     height: 100px;
//     border: 2px solid red;
//     h3 {
//         text-transform: uppercase;
//         font-size: 0.5em;
        
//     }
// }
// .title-superheros {
//     position: absolute;
//     width: 155px;
//     height: 66px;
//     left: 33px;
//     top: 264px;
//     color: $white;
//     font-family: $fontTitre;
//     font-size: 12px;
//     line-height: 15px; 
// }
// .title-supervilain {
//     position: absolute;
//     width: 150px;
//     height: 52px;
//     left: 272px;
//     top: 265px;
//     color: $white;
//     font-family: $fontTitre;
//     font-size: 12px;
//     line-height: 15px; 
// }
// .image-container {
//     width: 100vw;
//     height: 20vh;
// }
// .image-superhéros {
//     position: absolute;
//     width: 500px;
//     height: 400px;
//     left: -130px;
//     top: 217px;
//     filter: drop-shadow(-18px -14px 0px rgba(0, 0, 0, 0.25));
//     z-index: 2;
// }
// .image-supervilain {
//     position: absolute;
//     width: 600px;
//     height: 400px;
//     left: 50px;
//     top: 217px;
//     filter: drop-shadow(18px -14px 0px rgba(0, 0, 0, 0.25));
//     z-index: 2;
// }
// .btn-container {
//     width: 100vw;
//     height: 20vh;
// }
// .btn-superheros {
//     position: absolute;
//     width: 136px;
//     height: 46px;
//     left: 37px;
//     top: 574px;
//     color: $white;
//     background: rgba(0, 18, 176, 0.5);
//     border: 1px solid #F7F7F7;
//     box-shadow: -4px 4px 2px rgba(0, 0, 0, 0.25);
//     border-radius: 8px;
//     z-index: 2;
// }
// .btn-supervilain {
//     position: absolute;
//     width: 136px;
//     height: 46px;
//     left: 270px;
//     top: 574px;
//     color: $white;
//     background: rgba(157, 0, 0, 0.5);
//     border: 1px solid #F7F7F7;
//     box-shadow: 4px 4px 2px rgba(0, 0, 0, 0.25);
//     border-radius: 7px;
//     z-index: 2;
// }
// .redsmoke {
//     position: absolute;
//     width: 100px;
//     height: 137px;
//     left: -317px;
//     top: 992px;
//     transform: matrix(1, 0, 0, -1, 0, 0);
// }
// .bluesmoke {
//     position: absolute;
//     width: 100px;
//     height: 200px;
//     left: -577px;
//     top: 361px;
*/