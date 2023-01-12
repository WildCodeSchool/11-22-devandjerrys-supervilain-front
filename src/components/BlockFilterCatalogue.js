import { useState, useEffect } from 'react'
import FilterCatalogue from './FilterCatalogue.js'
import ResultatCatalogue from './ResultatCatalogue.js'
const BlockFiltreCatalogue = () => {
  const [filterCatalogueArray, setFilterCatalogueArray] = useState([])
  const [filterCatalogueResult, setFilterCatalogueResult] = useState('')

  const addFilter = () => {
    // ajoute une ligne de filtre
    filterCatalogueArray.push(
      <FilterCatalogue
        key={filterCatalogueArray.length}
        id={'filterChoise' + filterCatalogueArray.length}
      />
    )
    setFilterCatalogueArray(filterCatalogueArray.map(e => e)) // Met à jour l'affichage
  }
  const filterCatalogue = () => {
    const filter = document.querySelectorAll('.filterRow')
    const result = []

    for (let i = 0; i < filter.length; i++) {
      const filterTemp = []
      for (let j = 1; j < filter[i].children.length - 1; j++) {
        if (filter[i].children[1].classList.contains('filterChoice')) {
          const inputFilterTemp = []
          inputFilterTemp.push(
            parseInt(filter[i].children[1].children[0].value)
          )
          inputFilterTemp.push(
            parseInt(filter[i].children[1].children[1].value)
          )
          filterTemp.push(inputFilterTemp)
        } else if (filter[i].children[j].value) {
          filterTemp.push(filter[i].children[j].value)
        }
      }
      const categoryTemp = { [filter[i].children[0].value]: filterTemp }

      result.push(categoryTemp)
    }
    setFilterCatalogueResult(result)
  }
  useEffect(() => {
    filterCatalogue()
  }, [])
  return (
    <>
      <div className='blockFilterCatalogue'>
        <form className='filterCatalogue'>{filterCatalogueArray}</form>
        <div className='blockButtonFilterCatalogue'>
          <button className='addFilter' onClick={() => addFilter()}>
            <span>+</span> ajoutez un filtre
          </button>
          <button onClick={() => filterCatalogue()} className='search'>
            RECHERCHER
          </button>
        </div>
      </div>
      <ResultatCatalogue filterCatalogueResult={filterCatalogueResult} />
    </>
  )
}

export default BlockFiltreCatalogue
