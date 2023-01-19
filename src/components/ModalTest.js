import React from 'react'

const Testmodal = ({ closeModal }) => {
  return (
    <>
      <div className='modalbackground'>
        <div className='modalcontainer'>
          <div>
            <button onClick={() => closeModal(false)}>X</button>
          </div>
          <h1>Félicitation ! Vous êtes admis !</h1>
        </div>
      </div>
    </>
  )
}

export default Testmodal
