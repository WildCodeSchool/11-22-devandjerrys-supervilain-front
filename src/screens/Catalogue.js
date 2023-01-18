import { useState } from 'react'
import BlockFiltreCatalogue from '../components/BlockFilterCatalogue'
import Panier from '../components/Panier'
import ResultatCatalogue from '../components/ResultatCatalogue.js'

const Catalogue = (props) => {

  props.setTitle('THE DEAD AGENCY -')
  props.setTitleColorRed('CATALOGUE')
  props.setTitleColorBlue('')
  
  const [filterCatalogueResult, setFilterCatalogueResult] = useState([])
  const [vilains, setVilains] = useState([])
  const [test, setTest] = useState([])
  return(
    <>
      <BlockFiltreCatalogue test={test}
        setTest={setTest}
        setVilains={setVilains}
        setFilterCatalogueResult={setFilterCatalogueResult}

        />
        <div className='globalcontainer'>
          <div className='container'>
            <div className='choose'>
              <h2>
                SELECTIONNEZ LES SUPER-VILAINS
                <br />
                QUE VOUS SOUHAITEZ
              </h2>
            </div>
            <ResultatCatalogue
            filterCatalogueResult={filterCatalogueResult}
            vilains={vilains}
            setVilains={setVilains}
            test={test}
          />
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
