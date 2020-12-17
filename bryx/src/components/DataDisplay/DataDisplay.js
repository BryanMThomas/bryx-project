import getAllPropertyData from '../../utilities/api'
import React, { useEffect, useState } from 'react'
import DataItem from './DataItem/DataItem'

const DataDisplay = () => {
  let [responseData, setResponseData] = useState({})
  useEffect(() => {
    getAllPropertyData().then((response) => {
      if(response.data.statusCode !== 200){ //verify succesful call
        setResponseData({"error": true})
      }
      else{
        setResponseData(JSON.parse(response.data.body))
      }
    }
    ).catch((error) => {
      console.log(error)
    })

  }, [])

  if (Object.keys(responseData).length === 0) {
    //Waiting for property data to be returned
    return <p>LOADING DATA...</p>
  }
  else if(responseData.hasOwnProperty("error")){
    return <p>Failed to Retrieve Data</p>
  }
  else {
    return (
      <div>
        {responseData.map((element,index) => <DataItem item = {element} key = {`dataitem-${index}`}></DataItem>)}
      </div>)
  }
}

export default DataDisplay;