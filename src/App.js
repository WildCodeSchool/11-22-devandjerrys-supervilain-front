import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import InscriptionSuperVilain from './screens/InscriptionSuperVilain'
import Home from './screens/Home'
import Connect from './components/Connectez-vous'
import Header from './components/Header'
import Footer from './components/Footer'
import Catalogue from './screens/Catalogue'
import ModalPaiement from './components/ModalPaiement'
import InscriptionHeros from './screens/InscriptionHeros'

function App() {
  const [titre, setTitre] = useState('test')
  return (
    <div className='App'>
      {/* <Header titre={titre} /> */}
      <Routes>
        <Route path='/inscription' element={<InscriptionSuperVilain />} />
        <Route path='/' element={<Home titre={titre} setTitre={setTitre} />} />
        <Route path='/Connectezvous' element={<Connect />} />
        <Route path='/catalogue' element={<Catalogue />} />
        <Route path='/modalPaiement' element={<ModalPaiement />} />
        <Route path='/InscriptionHero' element={<InscriptionHeros />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  )
}

export default App
