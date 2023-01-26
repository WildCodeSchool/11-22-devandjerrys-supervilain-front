import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Profilvilain = () => {
  useEffect(() => {
    document.body.classList.add('profilVilain-layout')
    return () => {
      document.body.classList.remove('profilVilain-layout')
    }
  }, [])
  const [vilain, setVilain] = useState('')
  const [isLoding, setIsLoding] = useState(true)
  const pseudo = JSON.parse(localStorage.getItem('perso'))

  useEffect(() => {
    axios
      .get('http://localhost:4242/catalogue/vilain')
      .then(response => response.data)
      .then(data => setVilain(...data.filter(e => e.pseudo === pseudo)))
      .then(() => setIsLoding(false))
  }, [])
  const handleSaveButton = () => {
    if (window.confirm('Voulez-vous sauvegarder les modifications ?')) {
      // Code pour sauvegarder les modifications ici
    }
  }
  return (
    <>
      <div className='page'>
        <div className='title'>
          <h1>VOTRE PROFIL</h1>
        </div>
        {!isLoding ? (
          <>
            <img src={vilain.images.miniature} className='picProfil'></img>
            <div className='cadre'>
              <div className='underCadre'>
                <div className='imageLine'>
                  <div className='encart'>
                    <h3>Votre Pseudo :</h3>
                    <textarea
                      type='text'
                      className='texteMod'
                      defaultValue={vilain.pseudo}
                    ></textarea>
                  </div>
                </div>
                <div className='encart'>
                  <h3>Vos Pouvoirs :</h3>
                  <textarea
                    type='text'
                    className='texteMod'
                    defaultValue={vilain.powerAndStats.power}
                  ></textarea>
                </div>
                <div className='caract'>
                  <div className='encart'>
                    <h3>Intelligence :</h3>
                    <textarea
                      type='text'
                      className='texteMod'
                      defaultValue={vilain.powerAndStats.intelligence}
                    ></textarea>
                  </div>
                  <div className='encart'>
                    <h3>Force :</h3>
                    <textarea
                      type='text'
                      className='texteMod'
                      defaultValue={vilain.powerAndStats.strength}
                    ></textarea>
                  </div>
                </div>
                <div className='caract'>
                  <div className='encart'>
                    <h3>Cruauté :</h3>
                    <textarea
                      readOnly='readonly'
                      className='texteMod'
                      name='cruauté'
                      defaultValue={vilain.powerAndStats.cruelty}
                    ></textarea>
                  </div>
                  <div className='encart'>
                    <h3>Popularité :</h3>
                    <textarea
                      type='text'
                      className='texteMod'
                      defaultValue={vilain.powerAndStats.populary}
                    ></textarea>
                  </div>
                </div>
                <div className='encart'>
                  <h3>Description :</h3>
                  <textarea
                    type='text'
                    className='texteMod1'
                    defaultValue={vilain.description}
                  ></textarea>
                </div>
                <div className='caract'>
                  <div className='encart'>
                    <h3>Tarif :</h3>
                    <textarea
                      type='text'
                      className='texteMod'
                      defaultValue={vilain.price}
                    ></textarea>
                  </div>
                  <div className='encart'>
                    <h3>Mot de passe :</h3>
                    <textarea
                      type='password'
                      className='texteMod'
                      defaultValue={vilain.password}
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
        <button className='saveButton' onClick={handleSaveButton}>
          Sauvegarder
        </button>
      </div>
    </>
  )
}

export default Profilvilain
