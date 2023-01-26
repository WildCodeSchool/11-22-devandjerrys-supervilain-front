import axios from "axios";
import React, {useEffect, useState} from "react";
import Loki from "../assets/images/superVilains/loki.png"


const Profilvilain = () => {
    useEffect(() => {
        document.body.classList.add('profilVilain-layout')
        return () => {
          document.body.classList.remove('profilVilain-layout')
        }
      }, [])
      const [vilain, setVilain] = useState('')
      const [isLoding, setIsLoding] = useState(true)
      useEffect(()=> {
        axios
            .get('http://localhost:4242/catalogue/vilain')
            .then(response => (response.data))
            .then(data => setVilain(data))
            .then(() => setIsLoding(false))
      },[])
      const handleSaveButton = () => {
        if (window.confirm("Voulez-vous sauvegarder les modifications ?")) {
            // Code pour sauvegarder les modifications ici
        }
    }
    return (
        <>
        {console.log(vilain)}
            <div className="page">
                <div className="title">
                    <h1>VOTRE PROFIL</h1>
                </div>
                <img src={Loki} className="picProfil"></img>
                {!isLoding? ( <div className="cadre">
                    <div className="underCadre">
                        <div className="imageLine">
                            <div className="encart">
                                <h3>Votre Pseudo :</h3>
                                <textarea type="text" className="texteMod" defaultValue={vilain[0].pseudo}></textarea>
                            </div>
                            
                        </div>
                        <div className="encart">
                            <h3>Vos Pouvoirs :</h3>
                            <textarea type="text" className="texteMod" defaultValue={vilain[0].powerAndStats.power}></textarea>
                        </div>
                        <div className="caract">
                            <div className="encart">
                                <h3>Intelligence :</h3>
                                <textarea type="text" className="texteMod" defaultValue={vilain[0].powerAndStats.intelligence}></textarea>
                            </div>
                            <div className="encart">
                                <h3>Force :</h3>
                                <textarea type="text" className="texteMod" defaultValue={vilain[0].powerAndStats.strength}></textarea>
                            </div>
                        </div>
                        <div className="caract">
                            <div className="encart">
                                <h3>Cruauté :</h3>
                                <textarea readonly="readonly" className="texteMod" name="cruauté" defaultValue={vilain[0].powerAndStats.cruelty}></textarea>
                            </div>
                            <div className="encart">
                                <h3>Popularité :</h3>
                                <textarea type="text" className="texteMod" defaultValue={vilain[0].powerAndStats.populary} ></textarea>
                            </div>
                        </div>
                        <div className="encart">
                            <h3>Description :</h3>
                            <textarea type="text" className="texteMod1" defaultValue={vilain[0].description}></textarea>
                        </div>
                        <div className="caract">
                            <div className="encart">
                                <h3>Tarif :</h3>
                                <textarea type="text" className="texteMod" defaultValue={vilain[0].price}></textarea>
                            </div>
                            <div className="encart">
                                <h3>Mot de passe :</h3>
                                <textarea type="password" className="texteMod" defaultValue={vilain[0].password}></textarea>
                            </div>
                        </div>
                    </div>    
                </div>): null
                            }
                <button className="saveButton" onClick={handleSaveButton}>Sauvegarder</button>
            </div>
        </>
    );
};

export default Profilvilain