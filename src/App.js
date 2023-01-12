import { Route, Routes } from 'react-router-dom'
import Home from './screens/Home'
import Catalogue from './screens/Catalogue'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalogue' element={<Catalogue />} />
      </Routes>
    </div>
  )
}

export default App
