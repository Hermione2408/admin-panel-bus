import React, { Component, useState } from "react";
import "./search.scss";
import Map from "../../components/map";
import RectangleContainer from "../../components/rectangle-container";
import { state_arr, s_a } from "../../utils/city";
import Select from "react-select";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
let stateList = state_arr.map((el,i) => {
  return { value: el, label: el , id:i};
});

function KnowyourAquifer() {

  const [selectedStateIndex,SetSelectedStateIndex] = useState(0)
  let districtList = s_a[selectedStateIndex+1].split("|")
  let districtData = districtList.map((el,i)=>{
    return { value: el, label: el,id:i };

  })
  return (
    <div className="aquifer">
      <Sidebar />
      <div className="aquiferContainer">
        <Navbar />
        <div>
            <div className="a-flex">
              <div className="ml-16 a-hfull p8">
                <RectangleContainer>
                  <div className="a-flex a-fdc a-jcsb a-hfull">
                    <div className="state-text">Select State</div>
                    <Select options={stateList} onChange={(val)=>SetSelectedStateIndex(val.id)} />
                  </div>
                </RectangleContainer>
              </div>
              <div className="ml-16 a-hfull p8">
                <RectangleContainer >
                <div className="a-flex a-fdc a-jcsb a-hfull">
                    <div className="state-text">Select District</div>
                    <Select options={districtData} />
                  </div>
                </RectangleContainer>
              </div>
              <div className="ml-16 a-hfull p8">
                <RectangleContainer >
                <div className="a-flex a-fdc a-jcsb a-hfull">
                    <div className="state-text">Total Principal Aquifer in Regions</div>
                    <div>98</div>
                  </div>
                </RectangleContainer>
              </div>
              <div className="ml-16 a-hfull p8">
                <RectangleContainer >
                <div className="a-flex a-fdc a-jcsb a-hfull">
                    <div className="state-text">Know any aquifer</div>
                    <div>Report?</div>
                  </div>
                </RectangleContainer>
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
