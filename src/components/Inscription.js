import { useState, useEffect } from 'react'
import axios from 'axios'

const user = {
  pseudo: { pseudo: 'Joker' },
  picture: {
    md: 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/370-joker.jpg'
  },
  passWord: 'IloveBatou',
  passWordConf: { passWord: 'IloveBatou' }
}
// constructor (props) {
//   super(props)
//   this.state = {
//     pseudo: '',
//     passWord:'',
//     passWord2 :''
//   }
//     this.handleChange = this.handleChange.bind(this)
// }
const Inscription = () => {
  const [pseudo, setPseudo] = useState('')
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
  const [passWord, setPassWord] = useState('')
  const [passWordConf, setPassWordConf] = useState('')
  const handleSubmit = e => {
    e.preventDefault()
  }
  useEffect(() => {
    // console.log(pseudo)
  }, [pseudo])

  const [userVerif, setUserVerif] = useState(user)

  const verifUser = () => {
    // Send the request
    axios
      .get(
        'https://github.com/WildCodeSchool/11-22-devandjerrys-supervilain-p2-back.git'
      )
      // Extract the DATA from the received response
      .then(response => response.data)
      // Use this data to update the state
      .then(data => {
        // console.log(data)

        setUserVerif(data.results[0])
      })

    return (
      <div className='App'>
        <button type='button' onClick={verifUser}>
          User
        </button>

        <Inscription
          pseudo={userVerif.pseudo}
          images={userVerif.images.md}
          passWord={userVerif.passWord}
        />
      </div>
    )
  }

  return (
    <div className='Inscription'>
      <h3>INSCRIVEZ-VOUS !</h3>
      <div className='Inscription-pseudo'>
        <form onSubmit={handleSubmit}>
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
              size='8'
              required
              placeholder=''
              value={passWordConf}
              onChange={e => setPassWordConf(e.target.value)}
            />
          </div>
          <button
            type='submit'
            value='submit'
            onClick={
              () => setIsUserLoggedIn(prevState => !prevState)
              // .then(value =>  'reset')
            }
          >
            GO
          </button>
        </form>
        {isUserLoggedIn && <Message />}
      </div>
    </div>
  )
}
function Message() {
  useEffect(() => {
    // console.log('User is log in')
    // return () => console.log('Bye')
  }, [])
  return <h1 className='welcome'>HI, YOU'RE WELCOME</h1>
}
// function Message() {
//   const theMessage =
//     ( pseudo  !== 0 &&  passWordConf  !== 0 &&  passWordConf  !== 0) = true
//     ( value={pseudo}  !== 0 &&  value={passWord}  !== 0 &&  value={passWordConf}  !== 0) = true
//     ( input.value.pseudo  !== 0 &&  passWordConf  !== 0 &&  passWordConf  !== 0) = true

//   {
//     if (theMessage) {
//       return <p className='welcome'>HI, YOU'RE WELCOME</p>
//     }
//     return <p className='No'>NOPE!!!</p>
//   }
// }
// {studentList.filter((student) => !showFailedOnly || student.note < 10).map((student, index) => (
//   <li key={index}>
//     Name: {student.name} Note: {student.note}
//   </li>
// ))}

export default Inscription
