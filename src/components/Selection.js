import PanierSelectionMiniature from '../components/PanierSelectionMiniature'

const Selection = ({ panier }) => {
  return (
    <ul className='blockSelection'>
      {panier.map((vilain, i) => (
        <PanierSelectionMiniature vilain={vilain} key={i} />
      ))}
    </ul>
  )
}

export default Selection
