import { Route, Routes } from 'react-router-dom'
import Home from './screens/Home'
import Cards from './components/Cards'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Cards' element={<Cards />} />
      </Routes>
    </div>
  )
}

export default App
