import { Route, Routes } from 'react-router-dom'
import Home from './screens/Home'
import Panier from './components/Panier'
import ModalPaiement from './components/ModalPaiement'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/panier' element={<Panier />} />
        <Route path='/modalPaiement' element={<ModalPaiement />} />
      </Routes>
    </div>
  )
}

export default App
