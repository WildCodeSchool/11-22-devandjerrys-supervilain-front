import { useState } from 'react'
import Testmodal from './ModalTest'

const Test = () => {
  const [question1, setQuestion1] = useState('')
  const [question2, setQuestion2] = useState('')
  const [question3, setQuestion3] = useState('')
  const [question4, setQuestion4] = useState('')
  const [question5, setQuestion5] = useState('')

  const handleSubmit = () => {
    event.preventDefault()
    const result =
      (parseInt(question1) +
        parseInt(question2) +
        parseInt(question3) +
        parseInt(question4) +
        parseInt(question5)) *
      4
    console.log(result)
  }

  const [openModal, setOpenModal] = useState(false)
  return (
    <>
      <div className='Test-hover'>
        <div className='Card-Test'>
          <h1>Test de sélection </h1>
          {/* <form> */}
          <form onSubmit={handleSubmit}>
            <ul className='Container'>
              <li className='Question'>
                Question 1 : Sauverais-tu un homme suspendu dans le vide ?
              </li>
              <div
                className='bloc-bouton'
                onChange={e => setQuestion1(e.target.value)}
              >
                <label htmlFor='q1Y'> Yes </label>
                <input type='radio' id='q1Y' name='q1' value='4' />
                <input type='radio' id='q1N' name='q1' value='0' />
                <label htmlFor='q1N'> No</label>
              </div>

              <li className='Question'>
                Question 2 : Sauverais-tu un homme suspendu dans le vide ?{' '}
              </li>
              <select
                value={question2}
                onChange={e => setQuestion2(e.target.value)}
              >
                <option value='0'>--Choisis une réponse--</option>
                <option value='0'>reponse1</option>
                <option value='1'>reponse2</option>
                <option value='3'>reponse3</option>
                <option value='2'>reponse4</option>
                <option value='4'>reponse5</option>
              </select>

              <li className='Question'>
                Question 3 : Sauverais-tu un homme suspendu dans le vide ?{' '}
              </li>
              <div
                className='bloc-bouton'
                onChange={e => setQuestion3(e.target.value)}
              >
                <input type='radio' name='q3' value='0'></input>
                <label htmlFor='q3Yest'>Yes</label>
                <input type='radio' name='q3' value='4'></input>
                <label htmlFor='q3No'>No</label>
              </div>

              <li className='Question'>
                Question 4 : Sauverais-tu un homme suspendu dans le vide ?{' '}
              </li>
              <select
                value={question4}
                onChange={e => setQuestion4(e.target.value)}
              >
                <option value='0'>--Choisis une réponse--</option>
                <option value='2'>reponse1</option>
                <option value='4'>reponse2</option>
                <option value='1'>reponse3</option>
                <option value='0'>reponse4</option>
                <option value='3'>reponse5</option>
              </select>

              <li className='Question'>
                Question 5 : Sauverais-tu un homme suspendu dans le vide ?{' '}
              </li>
              <div
                className='bloc-bouton'
                onChange={e => setQuestion5(e.target.value)}
              >
                <input type='radio' name='q5' value='0'></input>
                <label htmlFor='q5Yest'>Yes</label>
                <input type='radio' name='q5' value='4'></input>
                <label htmlFor='q5No'>No</label>
              </div>
            </ul>
            <div className='Container-Valid'>
              <button
                onClick={() => {
                  setOpenModal(true)
                }}
                className='Valid'
              >
                VALIDER
              </button>
            </div>
          </form>
        </div>
      </div>
      {openModal && <Testmodal closeModal={setOpenModal} />}
    </>
  )
}

export default Test
