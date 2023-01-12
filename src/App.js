import { Route, Routes } from 'react-router-dom'
import Home from './screens/Home'
import BlockFilterCatalogue from './components/BlockFilterCatalogue.js'
import Header from './components/Header'
// import { useState } from 'react'

function App() {
  /* 
  const [titre, setTitre] = useState('')
  const [titreColor, setTitreColor] = useState('') */
  return (
    <div className='App'>
      <Header /* titre={titre} titreColor={titreColor} */ />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/filtre'
          element={
            <BlockFilterCatalogue /* {
              setTitre={setTitre}
              setTitreColor={setTitreColor} }*/
            />
          }
        />
      </Routes>
    </div>
  )
}

export default App
