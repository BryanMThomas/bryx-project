import getAllPropertyData from '../../utilities/api'
import React, { useEffect, useState } from 'react'
import DataItem from './DataItem/DataItem'

const DataDisplay = () => {
  let [responseData, setResponseData] = useState({})
  let abc = [];
  let a = [];
  useEffect(() => {
    getAllPropertyData().then((response) => {
      setResponseData(response.data)
      console.log(response.data)

      response.data.forEach(element => {
        abc.push(<DataItem itemText={JSON.stringify(element)}></DataItem>)
      });


    }
    ).catch((error) => {
      console.log(error)
    })

  }, [])
  console.log("AAAA", responseData)
  if (Object.keys(responseData).length === 0) {
    return <p>LOADING DATA...</p>
  }
  else {
    return (
      <div>
        {responseData.map((element) => <p key ={element.propertyId} id = {"item-"+element.propertyId}>{JSON.stringify(element)}</p>)}
      </div>)
  }
}

export default DataDisplay;