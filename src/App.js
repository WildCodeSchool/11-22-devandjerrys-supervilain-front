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
import Panier from './screens/Panier'

function App() {
  const [title, setTitle] = useState('')
  const [titleColorRed, setTitleColorRed] = useState('')
  const [titleColorBlue, setTitleColorBlue] = useState('')

  return (
    <div className='App'>
      <Header
        title={title}
        titleColorRed={titleColorRed}
        titleColorBlue={titleColorBlue}
        setTitle={setTitle}
        setTitleColorRed={setTitleColorRed}
        setTitleColorBlue={setTitleColorBlue}
      />
      <Routes>
        <Route path='/' element={<Home title={title} setTitle={setTitle} />} />
        <Route path='/Connectezvous' element={<Connect />} />
        <Route
          path='/catalogue'
          element={
            <Catalogue
              setTitle={setTitle}
              setTitleColorRed={setTitleColorRed}
              setTitleColorBlue={setTitleColorBlue}
            />
          }
        />
        <Route path='/cards' element={<Cards />} />
        <Route
          path='/news-game'
          element={
            <NewsAndGame
              setTitle={setTitle}
              setTitleColorRed={setTitleColorRed}
              setTitleColorBlue={setTitleColorBlue}
            />
          }
        />
        <Route path='/Test' element={<Test />} />
        <Route path='/inscription' element={<InscriptionSuperVilain />} />
        <Route
          path='/Contact'
          element={
            <Contact
              setTitle={setTitle}
              setTitleColorRed={setTitleColorRed}
              setTitleColorBlue={setTitleColorBlue}
            />
          }
        />
        <Route path='/modalPaiement' element={<ModalPaiement />} />
        <Route path='/panier' element={<Panier />} />
      </Routes>
    </div>
  )
}

export default App
