import { useState } from 'react'
import Cards from './Cards'

const Miniatures = ({ pseudo, power, price, miniatures, vilain }) => {
  const [openModal, setOpenModal] = useState(false)
  return (
    <>
      <div className='vilainpictures'>
        <div className='cards'>
          <div
            className='card-body'
            onClick={() => {
              setOpenModal(true)
            }}
          >
            <div className='pseudo'>
              <h2>{pseudo}</h2>
            </div>

            <div className='picture'>
              <img className='frame' src={miniatures} alt='Photo du vilain' />
            </div>

            <div className='description'>
              <h3>POUVOIR: {power} </h3>
              <h3>PRIX: {price} $ </h3>
            </div>
          </div>
        </div>
      </div>
      {openModal && <Cards closeModal={setOpenModal} vilain={vilain} />}
    </>
  )
}
export default Miniatures
