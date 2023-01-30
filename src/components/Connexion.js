import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Message from './Message'

const Connexion = () => {
  const [pseudo, setPseudo] = useState('')
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
  const [password, setPassword] = useState('')
  // const [vilain, setVilain] = useState('')
  const [messageConf, setMessageConf] = useState('')
  const [vilainPseudo, setVilainPseudo] = useState('')
  const [vilainPassword, setVilainPassword] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (vilainPseudo.includes(pseudo) && vilainPassword.includes(password)) {
      localStorage.setItem('perso', JSON.stringify(pseudo))
      setMessageConf(
        <Link to='/profilVilain'>WELCOME {pseudo} ! Cliquez ici</Link>
      )
    } else {
      setMessageConf(`Username or password is incorrect `)
    }
    setIsUserLoggedIn(prevState => !prevState)
  }
  useEffect(() => {
    axios
      .get('http://localhost:4242/catalogue/vilain')
      .then(response => response.data)
      .then(data => {
        setVilainPassword(data.map(element => element.password))
        setVilainPseudo(data.map(element => element.pseudo))
      })
    // .then(data => {
    //   setVilain(data.map(element => element.password))
    // })
  }, [])
  function myFunction() {
    const x = document.getElementById('MDP')
    if (x.type === 'password') {
      x.type = 'text'
    } else {
      x.type = 'password'
    }
  }
  return (
    <div className='AllC'>
      <h2 className='connexion'>CONNEXION</h2>
      <div className='Connexion-form'></div>
      <div className='Connexion'>
        <div className='Connexion-pseudo'>
          <form onSubmit={handleSubmit}>
            <label>
              <div className='Connexion-pseudo'>
                <input
                  className='connect-pseudo'
                  type='text'
                  required
                  placeholder=' pseudo'
                  value={pseudo}
                  onChange={e => setPseudo(e.target.value)}
                />
              </div>
              <div className='Connexion-MDP'>
                <input
                  className='connect-mdp'
                  type='password'
                  size='8'
                  required
                  placeholder=' mot de passe'
                  value={password}
                  id='MDP'
                  onChange={e => setPassword(e.target.value)}
                />
                <input
                  className='check'
                  type='checkbox'
                  onClick={() => myFunction()}
                />
              </div>
            </label>
            <button className='connect' type='submit' value='submit'>
              Validez
            </button>
          </form>
          {isUserLoggedIn && <Message messageConf={messageConf} />}
        </div>
      </div>
    </div>
  )
}

export default Connexion
