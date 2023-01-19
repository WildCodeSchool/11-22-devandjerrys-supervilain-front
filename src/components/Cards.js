import React from 'react'

import Approved from '../assets/images/approved.png'

function Cards({ closeModal, vilain }) {
  return (
    <div className='backgroundModal'>
      <div className='containerModal'>
        <header>
          <button onClick={() => closeModal(false)}>X</button>
          <h1 className='wanted'>{vilain.pseudo}</h1>
          <ul className='powerList'>
            <li>{vilain.powerAndStats.power[0]}</li>
            <li>{vilain.powerAndStats.power[1]}</li>
            <li>{vilain.powerAndStats.power[2]}</li>
          </ul>
        </header>
        <div className='bodyCards'>
          <div className='profilPicture'>
            <img src={vilain.images.lg} alt='mechant' />
          </div>
          <div>
            <ul className='caractPerso'>
              <li className='l1'>
                <h3>PRIX</h3>
                <p>{vilain.price}</p>
              </li>
              <li className='l2'>
                <h3>CRUAUTE</h3>
                <p>{vilain.powerAndStats.cruelty}/100</p>
              </li>
              <li className='l3'>
                <h3>FORCE</h3>
                <p>{vilain.powerAndStats.strength}/100</p>
              </li>
              <li className='l4'>
                <h3>INTELLIGENCE</h3>
                <p>{vilain.powerAndStats.intelligence}/100</p>
              </li>
              <li className='l5'>
                <h3>ESPECE</h3>
                <p>{vilain.appearance.species}</p>
              </li>
              <li className='l6'>
                <h3>TAILLE</h3>
                <p>{vilain.appearance.height}</p>
              </li>
              <li className='l7'>
                <h3>POPULARITE</h3>
                <p>{vilain.powerAndStats.populary}/100</p>
              </li>
              <li className='l8'>
                <img src={Approved} alt='tampon'></img>
              </li>
            </ul>
          </div>
        </div>
        <footer className='footer'>
          <div className='descriptions'>
            <p>
              {vilain.description}
            </p>
          </div>
          <div className='highFooter'>
            <h3>DO NOT APPROACH</h3>
            <h3>EXTREMELY DANGEROUS</h3>
          </div>
          <div className='blockButtonShop'>
            <button className='buttonShop' onClick={() => closeModal(false)}>
              ADD TO SHOPPING CART
            </button>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Cards
