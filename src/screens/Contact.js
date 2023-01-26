import { useEffect } from "react"

const Contact = () => {
  useEffect(() => {
    document.body.classList.add('contact-layout')
    return () => {
    document.body.classList.remove('contact-layout')
    }
}, [])

  return (
    <div>
      <div className="contact-container">
      <h2 className='tittle'>" Laisser nous votre message ! "</h2>
      <br />
      <div className='formulaire'>
        <form className='cadre'>
          <input className='texte' type='text' placeholder='Nom' />
          <br />
          <input className='texte' type='text' placeholder='Prénom' />
          <br />
          <input className='texte' type='text' placeholder='Mail' />
          <br />
          <textarea
            className='message'
            type='text'
            rows='5'
            placeholder=' Votre message...'
          />
        </form>
        <button
          href='#'
          className='button-envoyez'
          onClick={() => {
            alert('Votre message a bien été envoyé')
          }}
        >
          ENVOYEZ
        </button>
      </div>
      </div>
    </div>
  )
}
export default Contact
