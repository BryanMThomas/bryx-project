import getAllPropertyData from '../../utilities/api'
import React, { useEffect, useState } from 'react'
import DataItem from './DataItem/DataItem'

const DataDisplay = () => {
  let [responseData, setResponseData] = useState({})
  useEffect(() => {
    getAllPropertyData().then((response) => {
      setResponseData(response.data)
    }
    ).catch((error) => {
      console.log(error)
    })

  }, [])

  if (Object.keys(responseData).length === 0) {
    //Waiting for property data to be returned
    return <p>LOADING DATA...</p>
  }
  else {
    return (
      <div>
        {responseData.map((element) => <DataItem item = {element}></DataItem>)}
      </div>)
  }
}

export default DataDisplay;