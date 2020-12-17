import React from "react";
import DataDisplay from "../DataDisplay/DataDisplay";
import { Filter } from "./Filter/Filter";
import styled from "styled-components";

const Styles = styled.div`
margin-top: 2%;
margin-left: 3%;
  .listingsFilter {
    width: 30%;
    max-width: 400px;
    display: inline-block;
    float: left;
    background-color: #d3d3d3;
    padding: 15px;
  }

  .listingsData {
    width: 70%;
    max-width: 200px;
    float: left;
    display: inline-block;
    padding: 15px;
    margin-left: 30px;
  }
`;
export const Listings = () => {
  return (

    <Styles>
      <div className="listingsFilter">
        <Filter />
      </div>
      <div className="listingsData">
        <DataDisplay />
      </div>
    </Styles>
  );
};
