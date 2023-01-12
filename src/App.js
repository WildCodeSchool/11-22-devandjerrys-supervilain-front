import { Route, Routes } from 'react-router-dom'
import InscriptionSuperVilain from './screens/InscriptionSuperVilain'
import Home from './screens/Home'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/inscription' element={<InscriptionSuperVilain />} />
      </Routes>
    </div>
  )
}

export default App
