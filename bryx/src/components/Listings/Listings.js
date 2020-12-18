import React, { useState } from "react";
import { Properities } from "../Properties/Properties";
import { Filter } from "./Filter/Filter";
import styled from "styled-components";

const Styles = styled.div`
  margin-top: 2%;
  margin-left: 3%;
  .listingsFilter {
    width: 30%;
    max-width: 425px;
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
  const [state, setState] = useState({
    minPrice: 0,
    maxPrice: null,
    minBeds: 0,
    maxBeds: null,
    minBaths: 0,
    firstFloorPrimary: null,
    hvacAgeRange: 10,
    waterHeaterAgeRange: 10,
  });

  return (
    <Styles>
      <div className="listingsFilter">
        <Filter state={state} setState={setState} />
      </div>
      <div className="listingsData">
        <Properities state={state} setState={setState} />
      </div>
    </Styles>
  );
};
