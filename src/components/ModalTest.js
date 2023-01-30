import React from "react";
import Test from "./Test"
import { Link } from 'react-router-dom'

 const Testmodal = ({closeModal, result}) => {
    return (
        <>
        <div className="modalbackground">
            <div className="modalcontainer">
                <div className="buttonModalContainer">
                    <button className="buttonModal" onClick={()=>closeModal(false)}>X</button>
                </div>
                <div className="texteModal">
                    <h1 className="TitleModal">Félicitation ! Vous êtes admis !</h1>
                    <h2 className="TitleModal">Votre niveau de méchanceté est suffisant pour rejoindre notre catalogue</h2>
                    <div className="containerPourcentage">
                        <h3 className="TitleModal">VILAIN À {isNaN(result) ? "0" : result}%</h3>
                    </div>
                    <Link to='/inscription'>
                    <button className="inscript1" >INSCRIPTION</button>
                    </Link>
               </div>
            </div>
        </div>
    
        </>
    );
};

export default Testmodal;
