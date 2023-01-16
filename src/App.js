import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './screens/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Catalogue from './screens/Catalogue'
import Cards from './components/Cards'
import Miniatures from './components/Miniatures'

function App() {
  const [titre, setTitre] = useState('test')
  return (
    <div className='App'>
      <Header titre={titre}/>
      <Routes>
        <Route path='/' element={<Home titre={titre} setTitre={setTitre} />} />
        <Route path='/catalogue' element={<Catalogue />} />
        <Route path='/cards' element={<Cards />} />
        <Route path='/miniature' element={<Miniatures/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
