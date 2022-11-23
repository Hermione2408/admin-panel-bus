import React, { Component } from "react";
import "./search.css";
import Map from "../../components/map";
import RectangleContainer from "../../components/rectangle-container";
import { state_arr, s_a } from "../../utils/city";
import Select from "react-select";

let stateList = state_arr.map((el) => {
  return { value: el, label: el };
});

function KnowyourAquifer() {
  return (
    <div className="aquifer">
      <Sidebar />
      <div className="aquiferContainer">
        <Navbar />
        <div>
            <div className="a-flex">
              <div className="ml-16">
                <RectangleContainer>
                  <div className="a-flex a-fdc a-jcsb a-hfull p8">
                    <div className="state-text">Select State</div>
                    <Select options={stateList} />
                  </div>
                </RectangleContainer>
              </div>
              <div className="ml-16 a-hfull p8">
                <RectangleContainer >Hi</RectangleContainer>
              </div>
              <div className="ml-16 a-hfull p8">
                <RectangleContainer >Hi</RectangleContainer>
              </div>
            </div>
            <div className="map-container">
              <Map />
            </div>
          </div>
        </div>
    </div>
  );
}

export default KnowyourAquifer;
