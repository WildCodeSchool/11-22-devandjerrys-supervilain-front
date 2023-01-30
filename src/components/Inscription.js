import { useState, useEffect } from 'react'
import axios from 'axios'
// import Blood from '../assets/images/blood.png'
import { Link } from 'react-router-dom'
import Message from './Message'
import Line from '../assets/images/Line.svg'

const Inscription = () => {
  const [pseudo, setPseudo] = useState('')
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
  const [password, setPassword] = useState('')
  const [passwordConf, setPasswordConf] = useState('')
  const [vilain, setVilain] = useState('')
  const [messageConf, setMessageConf] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (vilain.includes(pseudo) || password !== passwordConf) {
      setMessageConf(`Username or password is incorrect `)
    } else {
      setMessageConf(`WELCOME   ${pseudo} !`)
    }
    setIsUserLoggedIn(prevState => !prevState)
  }
  useEffect(() => {
    axios
      .get('http://localhost:4242/catalogue/vilain')
      .then(response => response.data)
      .then(data => {
        setVilain(data.map(element => element.pseudo))
      })
  }, [])
  function myFunctionInsc() {
    const x = document.getElementById('MDPI')
    if (x.type === 'password') {
      x.type = 'text'
    } else {
      x.type = 'password'
    }
  }
  function myFunctionConf() {
    const x = document.getElementById('MDPII')
    if (x.type === 'password') {
      x.type = 'text'
    } else {
      x.type = 'password'
    }
  }
  return (
    <div className='All'>
      <div className='Inscription-form'>
        <div className='ih-title'>
          The Dead Agency -{' '}
          <span className='red blue'> Inscription / connexion</span>
        </div>
        <img className='Line' src={Line} alt='ligne blanche'></img>
      </div>
      <div className='responsive'>
        <div className='inscrip'>INSCRIPTION</div>

        <div className='Inscription'>
          <div className='Inscription-pseudo'>
            <form onSubmit={handleSubmit}>
              <label className='insc-form'>
                <div className='Inscription-pseudo'>
                  <input
                    className='inpForm'
                    type='text'
                    required
                    placeholder=' pseudo'
                    value={pseudo}
                    onChange={e => setPseudo(e.target.value)}
                  />
                </div>
                <div className='confirm'></div>
                <div className='Inscription-MDP'>
                  <input
                    className='inpForm'
                    type='password'
                    size='8'
                    required
                    placeholder='mot de passe'
                    value={password}
                    id='MDPI'
                    onChange={e => setPassword(e.target.value)}
                  />
                  <div className='check1'>
                    <input type='checkbox' onClick={() => myFunctionInsc()} />
                  </div>
                </div>
                <div className='Inscription-MDP2'>
                  <input
                    className='inpForm'
                    type='password'
                    required
                    size='8'
                    placeholder=' confirmer le mot de passe'
                    value={passwordConf}
                    id='MDPII'
                    onChange={e => setPasswordConf(e.target.value)}
                  />
                  <div className='check2'>
                    <input type='checkbox' onClick={() => myFunctionConf()} />
                  </div>
                </div>
              </label>
              <Link to='/catalogue'>
                <button className='I-button' type='submit' value='submit'>
                  VALIDEZ
                </button>
              </Link>
            </form>
            {isUserLoggedIn && <Message messageConf={messageConf} />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Inscription
