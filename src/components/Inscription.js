import { useState, useEffect } from 'react'
import axios from 'axios'
import Blood from '../assets/images/blood.png'
import Message from './Message'

const Inscription = () => {
  const [pseudo, setPseudo] = useState('')
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
  const [passWord, setPassWord] = useState('')
  const [passWordConf, setPassWordConf] = useState('')
  const [vilain, setVilain] = useState('')
  const [messageConf, setMessageConf] = useState('')
  const [imageBlood, setImageBlood] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    if (vilain.includes(pseudo) || passWord !== passWordConf) {
      setMessageConf(
        `NOPE !!! le pseudo est deja present ou le mot de passe n'est pas conforme `
      )
    } else {
      setMessageConf(`WELCOME   ${pseudo}`)
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
  function blood() {
    setImageBlood(!imageBlood)
  }

  return (
    <div className='All'>
      <div className='Inscription'>
        <h3>INSCRIVEZ-VOUS !</h3>
        <div className='Inscription-pseudo'>
          <form onSubmit={handleSubmit}>
            <label>
              <div className='Inscription-pseudo'>
                pseudo :
                <input
                  type='text'
                  required
                  placeholder='Enter'
                  value={pseudo}
                  onChange={e => setPseudo(e.target.value)}
                />
              </div>
              <div className='Inscription-MDP'>
                mot de passe :
                <input
                  type='text'
                  size='8'
                  required
                  placeholder=''
                  value={passWord}
                  onChange={e => setPassWord(e.target.value)}
                />
              </div>
              <div className='Inscription-MDP2'>
                {' '}
                confirmer le mot de passe :
                <input
                  type='text'
                  required
                  size='8'
                  placeholder=''
                  value={passWordConf}
                  onChange={e => setPassWordConf(e.target.value)}
                />
              </div>
            </label>
            <button onMouseEnter={blood} type='submit' value='submit'>
              GO
              {imageBlood && <img className='bloodSplatter' src={Blood} />}
            </button>
          </form>
          {isUserLoggedIn && <Message messageConf={messageConf} />}
        </div>
      </div>
    </div>
  )
}

export default Inscription
