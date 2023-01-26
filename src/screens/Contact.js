const Contact = (props) => {
  props.setTitle('THE DEAD AGENCY -')
  props.setTitleColorRed('CON')
  props.setTitleColorBlue('TACT')

  return (
    <div>
      <h2 className='tittle'> UNE QUESTION ? ECRIVEZ-NOUS !</h2>
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
  )
}
export default Contact
