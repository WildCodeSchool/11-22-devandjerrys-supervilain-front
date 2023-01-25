import axios from 'axios'
import { useState, useEffect } from 'react'
import FilterCatalogue from './FilterCatalogue.js'

const BlockFiltreCatalogue = props => {
  const [filterCatalogueArray, setFilterCatalogueArray] = useState([])
  // console.log(props.test)
  useEffect(() => {
    axios
      .get('http://localhost:4242/catalogue/vilain')
      .then(res => res.data)
      .then(data => {
        props.setVilains(data)
        props.setTest(data)
      })
  }, [])

  const addFilter = () => {
    setFilterCatalogueArray(prevState => [
      ...prevState,
      <FilterCatalogue
        key={filterCatalogueArray.length}
        id={'filterChoise' + filterCatalogueArray.length}
      />
    ]) // Met à jour l'affichage
  }
  const filterCatalogue = () => {
    // props.setVilains(props.test)
    const filter = document.querySelectorAll('.blockFilterChoise')
    const result = []

    for (let i = 0; i < filter.length; i++) {
      const filterTemp = []
      for (let j = 1; j < filter[i].children.length; j++) {
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

    props.setFilterCatalogueResult(result)
  }
  return (
    <>
      <div className='blockFilterCatalogue'>
        <form className='filterCatalogue'>{filterCatalogueArray}</form>
        <div className='blockButtonFilterCatalogue'>
          <button className='addFilter' onClick={() => addFilter()}>
            AJOUTEZ UN FILTRE
          </button>
          <button onClick={() => filterCatalogue()} className='search'>
            RECHERCHER
          </button>
        </div>
      </div>
    </>
  )
}

export default BlockFiltreCatalogue
