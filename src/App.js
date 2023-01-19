import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './screens/Home'
import Connect from './components/Connectez-vous'
import Header from './components/Header'
import Footer from './components/Footer'
import Catalogue from './screens/Catalogue'
import Cards from './components/Cards'
import Test from './components/Test'
import ModalTest from './components/ModalTest'

function App() {
  const [titre, setTitre] = useState('test')
  return (
    <div className='App'>
      <Header titre={titre}/>
      <Routes>
        <Route path='/' element={<Home titre={titre} setTitre={setTitre} />}/>
        <Route path='/Connectezvous' element={<Connect/>} />
        <Route path='/Test' element={<Test/>} />
        <Route path='/ModalTest' element={<ModalTest/>} />
        <Route path='/catalogue' element={<Catalogue />} />
        <Route path='/cards' element={<Cards />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
