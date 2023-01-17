import { Route, Routes } from 'react-router-dom'
import Home from './screens/Home'
import Catalogue from './screens/Catalogue'
import ModalPaiement from './components/ModalPaiement'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalogue' element={<Catalogue />} />
        <Route path='/modalPaiement' element={<ModalPaiement />} />
      </Routes>
    </div>
  )
}

export default App
