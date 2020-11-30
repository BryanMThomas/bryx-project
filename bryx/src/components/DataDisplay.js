import getAllPropertyData from '../utilities/api'
import React, { useEffect, useState } from 'react'


const DataDisplay = () => {
  let [responseData, setResponseData] = useState({})
  let propertiesArray= [];
  useEffect(() => {
    getAllPropertyData().then((response) => {
        propertiesArray = response.data.map(element => {
          return <p>Hello</p>}).reduce((arr, el) => {
            return arr.concat(el)
        }, []);
      setResponseData(propertiesArray)
      console.log(response.data)}
    ).catch((error) => {
      console.log(error)
    })
  }, [])
  return (
    <div>
      {propertiesArray}
    </div>
  )
}

export default DataDisplay;