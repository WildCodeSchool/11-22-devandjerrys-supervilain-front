import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './screens/Home'
import Header from './components/Header'
import Footer from './components/Footer'



function App() {
  const [titre, setTitre] = useState('test')
  return (
    <div className='App'>
      <Header titre={titre}/>
      <Routes>
        <Route path='/' element={<Home titre={titre} setTitre={setTitre} />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
