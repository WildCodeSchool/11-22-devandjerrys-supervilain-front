import { useState } from 'react'
import loki from '../assets/images/loki.png'
import Cards from './Cards'


const Miniatures = () =>{
 const [openModal, setOpenModal]= useState(false) 
  return (
    <>
  <div className='vilainpictures'>
    <div className='cards'>
      <div className='card-body' onClick={() => {setOpenModal(true);}}>
        <div className='pseudo'>
          <h2>LOKI</h2>
        </div>

        <div className='picture'>
          <img className='frame' src={loki} alt='Photo du vilain' />
        </div>

        <div className='description'>
          <h3>POUVOIR: BLABLA </h3>
          <h3>PRIX: 10000000 $ </h3>
        </div>
        
      </div>
    </div>
  </div>
  {openModal && <Cards closeModal={setOpenModal}/>}
  </>
)
}
export default Miniatures
