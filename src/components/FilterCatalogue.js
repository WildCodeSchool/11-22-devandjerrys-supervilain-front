import { useEffect, useState } from 'react'

const FilterCatalogue = () => {
  const power = [
    'Vol',
    'Télékinésie',
    'Télépathie',
    'Génie',
    'Magnétisme',
    'Champs de force',
    'Multimilliardaire',
    'Téléportation',
    'Immortalité',
    'Arts martiaux'
  ]
  const especes = ['Human', 'Mutant', 'Entité cosmique', 'Asgardian', 'New God']
  const filterNameForUser = [
    'Pouvoir principal',
    'Espèces',
    'Prix',
    'Popularité',
    'Cruauté',
    'Force',
    'Intelligence'
  ]
  const filterNameInJson = [
    'power',
    'species',
    'price',
    'populary',
    'cruelty',
    'strength',
    'intelligence'
  ]
  const [listFilterCategory, setlistFilterCategory] = useState()
  const [listChoice, setListChoice] = useState()
  const [inputChoice, setInputChoice] = useState()
  const [deletable, setDeletable] = useState(false)

  const showListChoise = e => {
    // Se lance lors de la selection de la catégorie de filtre
    if (e.firstChild.value === 'default') {
      // Supprime la phrase par défault
      e.removeChild(e.firstChild)
    }
    switch (
      e.value //Vérifie la catégorie choisie
    ) {
      case 'power':
        addListChoice(power)
        break
      case 'species':
        addListChoice(especes)
        break
      case 'price':
        addInputChoice('price')
        break
      case 'populary':
        addInputChoice('populary')
        break
      case 'cruelty':
        addInputChoice('cruelty')
        break
      case 'strength':
        addInputChoice('strength')
        break
      case 'intelligence':
        addInputChoice('intelligence')
        break
      default:
        console.log(e)
        break
    }
  }
  const addListChoice = nameList => {
    // Se lance après qu'une catégorie de filtre qui doit afficher une liste a été sélectionné
    setInputChoice() // Supprime les inputs
    setListChoice(nameList.map(e => <option key={e}>{e}</option>)) // Affiche les éléments corespondant à la liste choisie
    setDeletable(true) //Affiche le bouton delete
  }
  const addInputChoice = nameInput => {
    // Se lance après qu'une catégorie de filtre qui doit afficher un input a été sélectionné
    setListChoice() // Supprime la liste
    setInputChoice(
      // Affiche les éléments corespondant à la catégorie
      <div className={`filterChoice ${nameInput}`}>
        <input placeholder='Min' />
        <input placeholder='Max' />
      </div>
    )
    setDeletable(true) //Affiche le bouton delete
  }

  const addListFilterCategory = () => {
    // Affiche la liste des catégories de filtres
    setlistFilterCategory(
      filterNameForUser.map((e, i) => (
        <option key={e} value={filterNameInJson[i]}>
          {e}
        </option>
      ))
    )
  }
  useEffect(() => {
    addListFilterCategory()
  }, [])
  const deleteFilter = e => {
    // Supprime la ligne de filtre séléctionné
    e.preventDefault()
    e.target.parentElement.remove()
  }

  return (
    <div className='filterRow'>
      <select
        name='filtercategory'
        className='filterListcategory filter'
        onChange={e => showListChoise(e.target)}
      >
        <option value='default'>Choisissez un filtre</option>
        {listFilterCategory}
      </select>
      {listChoice ? <select className='filter'>{listChoice}</select> : null}
      {inputChoice ? <>{inputChoice}</> : null}
      {deletable ? (
        <button onClick={e => deleteFilter(e)} className='delete'>
          Delete
        </button>
      ) : null}
    </div>
  )
}

export default FilterCatalogue
