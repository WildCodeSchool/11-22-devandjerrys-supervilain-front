import { useEffect, useState } from 'react'

const FilterCatalogue = props => {
  const power = ['Vol', 'Télékinésie', 'génie']
  const especes = ['Humain', 'Mutant', 'Entité cosmique', 'Asgardian']
  const filter = [
    'Pouvoir principal',
    'Espèces',
    'Prix',
    'Popularité',
    'Cruauté',
    'Force',
    'Intelligence'
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
      case 'Pouvoir principal':
        addListChoice(power)
        break
      case 'Espèces':
        addListChoice(especes)
        break
      case 'Prix':
        addInputChoice('price')
        break
      case 'Popularité':
        addInputChoice('populary')
        break
      case 'Cruauté':
        addInputChoice('cruelty')
        break
      case 'Force':
        addInputChoice('strength')
        break
      case 'Intelligence':
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
      filter.map(e => (
        <option key={e} value={e}>
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
    e.target.form.remove()
  }

  return (
    <form className='filterCatalogue' id={props.id}>
      <select
        name='filtercategory'
        className='filterListcategory'
        onChange={e => showListChoise(e.target)}
      >
        <option value='default'>Choisissez un filtre</option>
        {listFilterCategory}
      </select>
      {listChoice ? <select>{listChoice}</select> : null}
      {inputChoice ? <>{inputChoice}</> : null}
      {deletable ? (
        <button onClick={e => deleteFilter(e)} className='delete'>
          Delete
        </button>
      ) : null}
    </form>
  )
}

export default FilterCatalogue
