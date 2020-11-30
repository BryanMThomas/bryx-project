import getAllPropertyData from '../utilities/api'
import React, { useEffect, useState } from 'react'


const DataDisplay = () => {
  let [responseData, setResponseData] = useState('')
  useEffect(() => {
    getAllPropertyData().then((response) => {
      setResponseData(response.data)
      console.log(response)
    }).catch((error) => {
      console.log(error)
    })
  }, [])
  return (
    <div>
      <h1>bryx</h1>
      <p>{JSON.stringify(responseData)}</p>
    </div>
  )
}

export default DataDisplay;