

const DataItem = (props) => {
  return (
    <p key ={props.item.propertyId} id = {"item-"+props.item.propertyId}>{JSON.stringify(props.item)}</p>
  )
}

export default DataItem;