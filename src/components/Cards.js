import React from "react";
import SuperVilain from "../assets/images/SuperVilain.png"
import Joker from "../assets/images/370-joker.jpg"
import Approved from "../assets/images/approved.png"

function Cards({closeModal}) {
    return (
      <div className="backgroundModal">
        <div className="containerModal">
            <header>
                <button onClick={()=>closeModal(false)}>X</button>
                <h1 className="wanted">WANTED</h1>
                <ul className="powerList">
                    <li>Genie Criminel</li>
                    <li>Chimiste</li>
                    <li>Folies</li>
                </ul>
            </header>
            <body>
                <div className="profilPicture">
                    <img src={Joker} alt="mechant"/>
                </div>
                <div>
                    <ul className="caractPerso">
                        <li className="l1"><h3>PRIX</h3>
                        <p>1000K</p></li>
                        <li className="l2"><h3>CRUAUTE</h3>
                        <p>100/100</p></li>
                        <li className="l3"><h3>FORCE</h3>
                        <p>10/100</p></li>
                        <li className="l4"><h3>INTELLIGENCE</h3>
                        <p>100/100</p></li>
                        <li className="l5"><h3>ESPECE</h3>
                        <p>Humain</p></li>
                        <li className="l6"><h3>TAILLE</h3>
                        <p>196cm</p></li>
                        <li className="l7"><h3>POPULARITE</h3>
                        <p>100/100</p></li>
                        <li className="l8"><img src={Approved} alt="tampon"></img></li>
                    </ul>
                </div>  
                
            </body>
            <footer className="footer">
            <div className="description">
                        <p >Le Joker affiche un goût particulier pour les farces macabres. Les armes chimiques n'ont pas de secret pour lui et il porte en permanence plusieurs sortes d’acides ainsi que son venin de Joker. Sans oublier le pistolet d'où sort un drapeau 'BANG!'</p>
                    </div>
                <div className="highFooter">
                    <h3>DO NOT APPROACH</h3>
                    <h3>EXTREMELY DANGEROUS</h3>
                </div>
                <h2>J    O    K    E    R</h2>
            </footer>
        </div>
        <div>
            <button className="buttonShop" onClick={()=>closeModal(false)}>ADD TO SHOPPING CART</button>
        </div>
      </div>
    )
  }
  
  export default Cards
  