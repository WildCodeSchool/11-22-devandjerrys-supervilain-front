import { Route, Routes } from 'react-router-dom'
import Inscription from './screens/inscriptionSuperVilain'
import Home from './screens/Home'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/inscriptionSuperVilain' element={<Inscription />} />
      </Routes>
    </div>
  )
}

export default App
