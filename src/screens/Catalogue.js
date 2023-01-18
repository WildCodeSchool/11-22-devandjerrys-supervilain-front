import BlockFiltreCatalogue from '../components/BlockFilterCatalogue'
import Miniatures from '../components/Miniatures'
import Panier from '../components/Panier'

const Catalogue = (props) => {

  props.setTitle('THE DEAD AGENCY -')
  props.setTitleColorRed('CATALOGUE')
  props.setTitleColorBlue('')

  return(
    <>
      <BlockFiltreCatalogue />
        <div className='globalcontainer'>
          <div className='container'>
            <div className='choose'>
              <h2>
                SELECTIONNEZ LES SUPER-VILAINS
                <br />
                QUE VOUS SOUHAITEZ
              </h2>
            </div>

            <Miniatures />
            <Miniatures />
            <Miniatures />
            <Miniatures />
          </div>
          <Panier />
        </div>
    </>
  )
}

export default Catalogue
