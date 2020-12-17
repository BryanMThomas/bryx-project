import React from "react";
import DataDisplay from "../DataDisplay/DataDisplay";
import { Filter } from "./Filter/Filter";
import styled from "styled-components";

const Styles = styled.div`
  .iltertooo {
    background-color: grey;
    width: 30%;
    max-width: 300px;
    display: inline-block;
    float: left;
  }

  .-h {
    width: 70%;
    float: left;
    display: inline-block;
    padding: 15px;
    background-color: black;
  }
`;
export const Listings = () => {
  return (
    <Styles>
      <h2 className="h">Listings Page</h2>
      <Filter className="listingsFilter" />
      <DataDisplay className ="listingsData"/>
    </Styles>
  );
};
