import { Route, Routes } from 'react-router-dom'
import Home from './screens/Home'
import BlockFilterCatalogue from './components/BlockFilterCatalogue.js'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/filtre' element={<BlockFilterCatalogue />} />
      </Routes>
    </div>
  )
}

export default App
