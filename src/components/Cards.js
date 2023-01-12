import React from "react";
import SuperVilain from "../assets/images/SuperVilain.png"


function Cards({closeModal}) {
    return (
      <div className="backgroundModal">
        <div className="containerModal">
            <header>
                <button onClick={()=>closeModal(false)}>X</button>
                <h1 className="wanted">WANTED</h1>
                <ul className="powerList">
                    <li>pouvoir 1</li>
                    <li>pouvoir 2</li>
                    <li>pouvoir 3</li>
                </ul>
            </header>
            <body>
                <div className="profilPicture">
                    <img src={SuperVilain} alt="mechant"/>
                </div>
                <div>
                    <ul>
                        <li>pseudo</li>
                        <li>cruauté</li>
                        <li>force</li>
                        <li>intelligence</li>
                        <li>espece</li>
                        <li>taille</li>
                        <li>popularité</li>
                    </ul>
                    <div>
                        <p>descritption</p>
                    </div>
                </div>  
            </body>
            <footer>
                <div>
                    <h3>DO NOT APPROACH</h3>
                    <h3>EXTREMELY DANGEROUS</h3>
                </div>
                <h2>NAME OF VILAINT</h2>
            </footer>
        </div>
        <div>
            <button>ADD TO SHOPPING CART</button>
        </div>
      </div>
    )
  }
  
  export default Cards
  