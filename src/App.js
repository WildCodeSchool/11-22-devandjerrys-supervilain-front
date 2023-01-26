import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './screens/Home'
import Connect from './components/Connectez-vous'
import Catalogue from './screens/Catalogue'
import ModalPaiement from './components/ModalPaiement'
import Panier from './screens/Panier'

function App() {
  const [titre, setTitre] = useState('test')
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home titre={titre} setTitre={setTitre} />} />
        <Route path='/Connectezvous' element={<Connect />} />
        <Route path='/catalogue' element={<Catalogue />} />
        <Route path='/modalPaiement' element={<ModalPaiement />} />
        <Route path='/panier' element={<Panier />} />
      </Routes>
    </div>
  )
}

export default App
