import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import InscriptionSuperVilain from './screens/inscriptionSuperVilain'
import Home from './screens/Home'
import Connect from './screens/Connectez-vous'
import Header from './components/Header'
import Footer from './components/Footer'
import Catalogue from './screens/Catalogue'
import Cards from './components/Cards'
import NewsAndGame from './screens/NewsAndGame'
import Test from './components/Test'
import Contact from './screens/Contact'
import ModalPaiement from './components/ModalPaiement'

function App() {
  const [titleColorRed, setTitleColorRed] = useState('')
  const [titleColorBlue, setTitleColorBlue] = useState('')

  
  return (
    <div className='App'>
      <Header  titleColorRed={titleColorRed} titleColorBlue={titleColorBlue} setTitleColorRed={setTitleColorRed} setTitleColorBlue={setTitleColorBlue}/>
      <Routes>
        
        <Route path='/' element={<Home />}/>
        <Route path='/Connectezvous' element={<Connect />} />
        <Route path='/catalogue' element={<Catalogue />} />
        <Route path='/cards' element={<Cards />} />
        <Route path='/news-game' element={<NewsAndGame />} />
        <Route path='/Test' element={<Test/>} />
        <Route path='/inscription' element={<InscriptionSuperVilain />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/modalPaiement' element={<ModalPaiement />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
