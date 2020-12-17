import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .applyButton {
    background-color: #800000;
    border: 1px solid gray;
    box-shadow: none;
    &:hover {
      background-color: gray;
      color: white;
    }
    margin-top: 15px;
  }
  .headerLabel {
    margin-top: 5px;
  }
  .otherLabel {
    margin-top: 15px;
  }
  .selector {
    margin-top: 5px;
    margin-left: 5px;
  }
  .checkbox {
    margin-top: 5px;
    margin-left: 5px;
  }
`;
export const Filter = () => {
  let [state, setState] = useState({
    hvacAgeRange: 10,
    waterHeaterAgeRange: 10,
  });
  const handleStateChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  return (
    <Styles>
      <Form inline className="selecter">
        <Form.Group controlId="priceSelect">
          <Form.Label>Min Price</Form.Label>
          <Form.Control as="select" defaultValue="No Min" className="selector">
            <option>No Min</option>
            <option>$200,000</option>
            <option>$300,000</option>
            <option>$400,000</option>
            <option>$500,000</option>
            <option>$600,000</option>
          </Form.Control>
          <Form.Label>Max Price</Form.Label>
          <Form.Control as="select" defaultValue="No Max" className="selector">
            <option>No Max</option>
            <option>$300,000</option>
            <option>$400,000</option>
            <option>$500,000</option>
            <option>$600,000</option>
            <option>$700,000</option>
          </Form.Control>
        </Form.Group>
      </Form>
      <Form.Label className="headerLabel">Beds</Form.Label>
      <Form inline>
        <Form.Group controlId="bedSelect">
          <Form.Control as="select" defaultValue="No Min" className="selector">
            <option>No Min</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </Form.Control>
          <Form.Control as="select" defaultValue="No Max" className="selector">
            <option>No Max</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
      </Form>
      <Form.Label className="headerLabel">Bath</Form.Label>
      <Form inline>
        <Form.Group controlId="bathSelect">
          <Form.Control as="select" defaultValue="No Min" className="selector">
            <option>No Min</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </Form.Control>
        </Form.Group>
      </Form>
      <Form>
        <Form.Label className="otherLabel">Other Options</Form.Label>
        <Form.Check
          className="checkbox"
          type="checkbox"
          label="First Floor Primary"
        />
        <Form.Group controlId="formBasicRange">
          <Form.Label className="headerLabel">
            Max HVAC Age <strong>{state.hvacAgeRange}</strong> years
          </Form.Label>
          <Form.Control
            id="hvacAgeRange"
            type="range"
            min={1}
            max={10}
            defaultValue={10}
            onChange={handleStateChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicRange">
          <Form.Label className="headerLabel">
            Max Water Heater Age <strong>{state.waterHeaterAgeRange}</strong>{" "}
            years
          </Form.Label>
          <Form.Control
            id="waterHeaterAgeRange"
            type="range"
            min={1}
            max={10}
            defaultValue={10}
            onChange={handleStateChange}
          />
        </Form.Group>
        <Form.Group controlId="Apply">
          <Button className="applyButton" size="lg" variant="secondary">
            Apply
          </Button>
        </Form.Group>
      </Form>
    </Styles>
  );
};
