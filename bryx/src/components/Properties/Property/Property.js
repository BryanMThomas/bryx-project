import React from "react";
import { Card } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  margin-top: 2%;
  cursor: pointer;
  .priceLabel{
    color: white;
  }
`;

export const Property = (props) => {

  const getPrice = (price) =>{
    return "$"+price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } 
  console.log(props.state.minPrice, props.item.price);
  if (props.state.minPrice > props.item.price) {
    console.log("hello");
    return null;
  }
  return (
    <Styles>
      <Card
        style={{ width: "18rem" }}
        key={props.item.propertyId}
        onClick={() => {
          console.log("Clicked ", props.item.propertyId);
        }}
      >
        <Card.Img variant="top" src={props.item.imgAddress} />
        <Card.ImgOverlay>
          <Card.Title className="priceLabel"><strong>{getPrice(props.item.price)}</strong></Card.Title>
        </Card.ImgOverlay>
        <Card.Body>
          <Card.Title>{props.item.address}</Card.Title>
          <Card.Text>
            {`${props.item.city}, ${props.item.state} ${props.item.zipcode}`}
          </Card.Text>
          <p>{`Beds: ${props.item.bedrooms} Baths: ${props.item.bathrooms}`}</p>
        </Card.Body>
      </Card>
    </Styles>
  );
};
