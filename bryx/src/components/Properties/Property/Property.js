import React from "react";
import { Card } from "react-bootstrap";
import styled from "styled-components";
import homeImg from '../../../assets/home.jpeg'

const Styles = styled.div`
  margin-top: 2%;
  cursor: pointer;
`;

export const Property = (props) => {
  return (
    <Styles>
      <Card style={{ width: "18rem" }} key={props.item.propertyId} onClick ={()=>{console.log("Clicked ",props.item.propertyId)}}>
        <Card.Img variant="top" src={homeImg} />
        <Card.Body>
          <Card.Title>{props.item.address}</Card.Title>
          <Card.Text>
          {`${props.item.city}, ${props.item.state} ${props.item.zipcode}`}
          </Card.Text>
          <p>{`Beds: ${props.item.bedrooms} Baths: ${props.item.bathrooms}` }</p>
        </Card.Body>
        {/* <p key={props.item.propertyId} id={"item-" + props.item.propertyId}>
        {JSON.stringify(props.item)}
      </p> */}
      </Card>
    </Styles>
  );
};
