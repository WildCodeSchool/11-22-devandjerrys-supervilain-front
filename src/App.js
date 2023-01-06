import { Route, Routes } from 'react-router-dom'
import Catalogue from './screens/Catalogue'

import Home from './screens/Home'


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
