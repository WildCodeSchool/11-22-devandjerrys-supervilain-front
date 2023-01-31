import axios from 'axios'
import React, { useEffect, useState } from 'react'


const ModalCatalogue = ({closeModal, vilain}) => {
 
//   const [vilain, setVilain] = useState('')
  const [isLoding, setIsLoding] = useState(true)
//   const pseudo = JSON.parse(localStorage.getItem('perso'))

//   useEffect(() => {
//     axios
//       .get('http://localhost:4242/catalogue/vilain')
//       .then(response => response.data)
//       .then(data => setVilain(...data.filter(e => e.pseudo === pseudo)))
//       .then(() => setIsLoding(false))
//   }, [])

  return (
    <>
    {console.log(vilain)}
      <div onClick={() =>closeModal(false)} className='BackgroundModalCatalogue'>
          <>
            <img src={vilain.images.miniature} className='picProfilModal'></img>
            <div className='cadreModal'>
              <div className='underCadreModal'>
                <div className='imageLineModal'>
                  <div className='encartModal'>
                    <h3>Votre Pseudo :</h3>
                    <textarea
                      type='text'
                      readOnly='readonly'
                      className='texteMod'
                      defaultValue={vilain.pseudo}
                    ></textarea>
                  </div>
                </div>
                <div className='encartModal'>
                  <h3>Vos Pouvoirs :</h3>
                  <textarea
                    type='text'
                    readOnly='readonly'
                    className='texteMod'
                    defaultValue={vilain.powerAndStats.power}
                  ></textarea>
                </div>
                <div className='caractModal'>
                  <div className='encartModal'>
                    <h3>Intelligence :</h3>
                    <textarea
                      type='text'
                      readOnly='readonly'
                      className='texteMod'
                      defaultValue={vilain.powerAndStats.intelligence}
                    ></textarea>
                  </div>
                  <div className='encartModal'>
                    <h3>Force :</h3>
                    <textarea
                      type='text'
                      readOnly='readonly'
                      className='texteMod'
                      defaultValue={vilain.powerAndStats.strength}
                    ></textarea>
                  </div>
                </div>
                <div className='caractModal'>
                  <div className='encartModal'>
                    <h3>Cruauté :</h3>
                    <textarea
                      readOnly='readonly'
                      className='texteMod'
                      name='cruauté'
                      defaultValue={vilain.powerAndStats.cruelty}
                    ></textarea>
                  </div>
                  <div className='encartModal'>
                    <h3>Popularité :</h3>
                    <textarea
                      type='text'
                      readOnly='readonly'
                      className='texteMod'
                      defaultValue={vilain.powerAndStats.populary}
                    ></textarea>
                  </div>
                </div>
                <div className='encartModal'>
                  <h3>Description :</h3>
                  <textarea
                    type='text'
                    readOnly='readonly'
                    className='texteMod1'
                    defaultValue={vilain.description}
                  ></textarea>
                </div>
                <div className='caractModal'>
                  <div className='encartModal'>
                    <h3>Tarif :</h3>
                    <textarea
                      type='text'
                      readOnly='readonly'
                      className='texteMod'
                      defaultValue={vilain.price}
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </>
      </div>
    </>
  )
}

export default ModalCatalogue
