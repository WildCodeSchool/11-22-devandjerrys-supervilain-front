const PanierSelectionMiniature = ({ vilain }) => {
  return (
    <li className='selectionMiniature'>
      <img src={vilain.images.miniature} alt={vilain.pseudo} />
      <h3 className='titleH3'>{vilain.pseudo}</h3>
    </li>
  )
}

export default PanierSelectionMiniature
