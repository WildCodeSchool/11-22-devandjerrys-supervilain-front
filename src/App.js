import { Route, Routes } from 'react-router-dom'
import Home from './screens/Home'
import Connect from './components/Connectez-vous'


function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Connectezvous' element={<Connect/>} />
      </Routes>
    </div>
  )
}

export default App
