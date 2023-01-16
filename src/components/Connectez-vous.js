import React from 'react'

function Connect({ closeModal }) {
  return (
    <div className='Card'>
      <h1>Connectez-vous !</h1>

      <div className='Script'>
        <div className='User'>
          <h2>Nom d'utilisateur :</h2>
          <textarea></textarea>{' '}
        </div>

        <div className='Password'>
          <h2>Mot de passe :</h2>
          <textarea></textarea>
        </div>
      </div>
      <div className='Container-bouton'>
        <button onClick={() => closeModal(false)}>VALIDER</button>
      </div>
    </div>
  )
}

export default Connect
