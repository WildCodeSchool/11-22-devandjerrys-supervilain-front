import axios from 'axios'
import { useState, useEffect } from 'react'
const ResultatCatalogue = props => {
  const [poulet, setPoulet] = useState('a')
  const [isLoading, setLoading] = useState(true)
  /*   const test = () => {
    axios
      .get('http://localhost:4242/catalogue/vilain')
      .then(res => res.data)
      .then(data =>
        setPoulet(
          data.filter(
            e =>
              e.powerAndStats.power.includes('Vol') &&
              e.powerAndStats.intelligence > 90 &&
              e.price > 900000
          )
        )
      )
  } */
  const test = () => {
    axios
      .get('http://localhost:4242/catalogue/vilain')
      .then(res => res.data)
      .then(data => {
        if (props.filterCatalogueResult[0].power) {
          setPoulet(
            data.find(e => {
              console.log('data', data)
              console.log('condition1', e.powerAndStats.power)
              console.log('condition2', props.filterCatalogueResult[0].power[0])
              console.log(
                'filter',
                e.powerAndStats.power.includes(
                  props.filterCatalogueResult[0].power[0]
                )
              )
              e.powerAndStats.power.includes(
                props.filterCatalogueResult[0].power[0]
              )
            })
          )
        }
      })
      .then(res => setLoading(false))
  }
  useEffect(() => {
    test()

    console.log('poulet', poulet)
  }, [props.filterCatalogueResult])

  return <div>{/* !isLoading ? <p>{poulet.pseudo}</p> : <p></p> */}</div>
}
export default ResultatCatalogue
