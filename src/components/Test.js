import { useState, useEffect } from 'react'
import Testmodal from './ModalTest'
import lineTest from '../assets/images/Line.png'

const Test = () => {
  const [question1, setQuestion1] = useState('')
  const [question2, setQuestion2] = useState('')
  const [question3, setQuestion3] = useState('')
  const [question4, setQuestion4] = useState('')
  const [question5, setQuestion5] = useState('')
  const [result, setResult] = useState(0)
  const [cruauty, setCruauty] = useState(0)
  const [countActive, setCountActive] = useState(false)

  let inter
  const handleSubmit = () => {
    event.preventDefault()

    setResult(
      (parseInt(question1) +
        parseInt(question2) +
        parseInt(question3) +
        parseInt(question4) +
        parseInt(question5)) *
        5
    )
    setCountActive(true)
  }

  useEffect(() => {
    if (countActive) {
      inter = setInterval(() => {
        setCruauty(prevState => prevState + 1)
      }, 10)
    } else {
      clearInterval(inter)
    }
    return () => clearInterval(inter)
  }, [countActive])
  useEffect(() => {
    if (cruauty >= result) {
      clearInterval(inter)
      setCountActive(false)
    }
  }, [cruauty])

  const [openModal, setOpenModal] = useState(false)

  useEffect(() => {
    document.body.classList.add('test-layout')
    return () => {
      document.body.classList.remove('test-layout')
    }
  }, [])

  return (
    <>
      <div className='test-container'>
        <div className='title-page-test'>The Dead Agency -{' '}
          <span className='red blue'> Test / Inscription</span>
        </div>
        <div className='Image'>
          <img className='line-test' src={lineTest} alt="line"></img>
        </div>
        <h2 className='title-inscription'> Test d'Inscritpion</h2>
      <div className='Card-container'>
        <div className='Card-Test'>
          {/* <form> */}
          <form onSubmit={handleSubmit}>
            <ul className='Container'>
              <div className='cadre-question'>
                <li className='Question'>
                  Question 1 : Sauverais-tu un homme suspendu dans le vide ?
                </li>
                <div
                  className='bloc-bouton'
                  onChange={e => setQuestion1(e.target.value)}
                >
                  <input type='radio' id='q1Y' name='q1' value='0' />
                  <label htmlFor='q1Y'> Yes </label>
                  <input type='radio' id='q1N' name='q1' value='4' />
                  <label htmlFor='q1N'> No</label>
                </div>
              </div>
              <div className='cadre-question'>
                <li className='Question'>
                  Question 2 : quel est ton but final ?{' '}
                </li>
                <select
                  className='reponse-select'
                  value={question2}
                  onChange={e => setQuestion2(e.target.value)}
                >
                  <option value='-1'>--Choisis une réponse--</option>
                  <option value='0'>faire peur</option>
                  <option value='1'>être méchant</option>
                  <option value='3'>dominer le monde</option>
                  <option value='2'>répandre la terreur</option>
                  <option value='4'>détruire l'humanitée</option>
                </select>
              </div>
              <div className='cadre-question'>
                <li className='Question'>
                  Question 3 : Prenez-vous du plaisir dans vos actions ?{' '}
                </li>
                <div
                  className='bloc-bouton'
                  onChange={e => setQuestion3(e.target.value)}
                >
                  <input type='radio' name='q3' value='4'></input>
                  <label htmlFor='q3Yest'>Yes</label>
                  <input type='radio' name='q3' value='0'></input>
                  <label htmlFor='q3No'>No</label>
                </div>
              </div>
              <div className='cadre-question'>
                <li className='Question'>
                  Question 4 : quel arme choisirait tu ?{' '}
                </li>
                <select
                  className='reponse-select'
                  value={question4}
                  onChange={e => setQuestion4(e.target.value)}
                >
                  <option value='-1'>--Choisis une réponse--</option>
                  <option value='2'>pistolet</option>
                  <option value='4'>bombe atomique</option>
                  <option value='1'>fouet</option>
                  <option value='0'>une petite cuillere</option>
                  <option value='3'>poisons</option>
                </select>
              </div>

              <div className='cadre-question'>
                <li className='Question'>Question 5 : As tu des alliés ? </li>
                <div
                  className='bloc-bouton'
                  onChange={e => setQuestion5(e.target.value)}
                >
                  <input type='radio' name='q5' value='0'></input>
                  <label htmlFor='q5Yest'>Yes</label>
                  <input type='radio' name='q5' value='4'></input>
                  <label htmlFor='q5No'>No</label>
                </div>
              </div>
            </ul>
          </form>
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
        </div>
      </div>

      {openModal && <Testmodal closeModal={setOpenModal} result={result} />}
      </div>
    </>
  )
}

export default Test
