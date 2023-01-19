import { useState, useEffect } from 'react'
import Miniatures from '../components/Miniatures'

const ResultatCatalogue = ({
  vilains,
  setVilains,
  filterCatalogueResult,
  test
}) => {
  const [vilainsResult, setVilainsResult] = useState([])

  useEffect(() => {
    setVilains(test)
    filterCatalogueResult.map(itemFiltre => {
      console.log('vilains', vilains)
      switch (Object.keys(itemFiltre)[0]) {
        case 'power': {
          const result = vilains.filter(vilain =>
            vilain.powerAndStats.power.includes(itemFiltre.power[0])
          )
          setVilains(result)
          break
        }
        case 'species': {
          const result = vilains.filter(vilain =>
            vilain.appearance.species.includes(itemFiltre.species[0])
          )
          setVilains(result)
          break
        }
        case 'price': {
          const result = vilains.filter(
            vilain =>
              vilain.price >= itemFiltre.price[0][0] &&
              vilain.price <= itemFiltre.price[0][1]
          )
          setVilains(result)
          break
        }
        case 'populary': {
          const result = vilains.filter(
            vilain =>
              vilain.powerAndStats.populary >= itemFiltre.populary[0][0] &&
              vilain.powerAndStats.populary <= itemFiltre.populary[0][1]
          )
          setVilains(result)
          break
        }
        case 'cruelty': {
          const result = vilains.filter(
            vilain =>
              vilain.powerAndStats.cruelty >= itemFiltre.cruelty[0][0] &&
              vilain.powerAndStats.cruelty <= itemFiltre.cruelty[0][1]
          )
          setVilains(result)
          break
        }
        case 'strength': {
          const result = vilains.filter(
            vilain =>
              vilain.powerAndStats.strength >= itemFiltre.strength[0][0] &&
              vilain.powerAndStats.strength <= itemFiltre.strength[0][1]
          )
          setVilains(result)
          break
        }
        case 'intelligence': {
          const result = vilains.filter(
            vilain =>
              vilain.powerAndStats.intelligence >=
                itemFiltre.intelligence[0][0] &&
              vilain.powerAndStats.intelligence <= itemFiltre.intelligence[0][1]
          )
          setVilains(result)
          break
        }
        default:
          break
      }
    })
  }, [filterCatalogueResult])

  useEffect(() => {
    setVilainsResult('')

    console.log(vilains)
    vilains
      ? vilains.map(vilain => {
          setVilainsResult(prevState => [
            ...prevState,
            <Miniatures
              key={vilain.pseudo}
              pseudo={vilain.pseudo}
              power={vilain.powerAndStats.power[0]}
              price={vilain.price}
              miniatures={vilain.images.miniature}
              vilain={vilain}
            />
          ])
        })
      : console.log('bug')
  }, [vilains])

  return <div className='resultatCatalogue'>{vilainsResult}</div>
}
export default ResultatCatalogue
