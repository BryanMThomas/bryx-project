import React from "react";
import { Form, Button } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div``;
export const Filter = () => {
  return (
    <Styles>
      <Form inline>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Min Price</Form.Label>
          <Form.Control as="select" defaultValue="No Min">
            <option>No Min</option>
            <option>$200,000</option>
            <option>$300,000</option>
            <option>$400,000</option>
            <option>$500,000</option>
            <option>$600,000</option>
          </Form.Control>
          <Form.Label>Max Price</Form.Label>
          <Form.Control as="select" defaultValue="No Max">
            <option>No Max</option>
            <option>$300,000</option>
            <option>$400,000</option>
            <option>$500,000</option>
            <option>$600,000</option>
            <option>$700,000</option>
          </Form.Control>
          </Form.Group>
        </Form>
      <Form>
      <Form.Group controlId="exampleForm.ControlSelect1">
        <Button className="applyButton" size="lg" variant="secondary">
          Apply
        </Button>
        </Form.Group>
      </Form>
    </Styles>
  );
};
