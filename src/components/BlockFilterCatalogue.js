import { useState } from 'react'
import FilterCatalogue from './FilterCatalogue.js'
const BlockFiltreCatalogue = () => {
  const [filterCatalogueArray, setFilterCatalogueArray] = useState([])

  const addFilter = () => {
    // ajoute une ligne de filtre
    filterCatalogueArray.push(
      <FilterCatalogue
        key={filterCatalogueArray.length}
        id={'filterChoise' + filterCatalogueArray.length}
        test={filterCatalogueArray}
      />
    )
    setFilterCatalogueArray(filterCatalogueArray.map(e => e)) // Met à jour l'affichage
  }
  return (
    <div className='blockFilterCatalogue'>
      {filterCatalogueArray}
      <div className='blockButtonFilterCatalogue'>
        <button className='addFilter' onClick={() => addFilter()}>
          <span>+</span> ajoutez un filtre
        </button>
        <button className='search'>RECHERCHER</button>
      </div>
    </div>
  )
}

export default BlockFiltreCatalogue
