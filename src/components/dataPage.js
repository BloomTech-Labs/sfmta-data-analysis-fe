import React, { useState, useEffect } from "react";
import axios from 'axios'
import createPlotlyComponent from "react-plotly.js/factory";

import { connect } from "react-redux";
import { fetchRoutesInfo, fetchTypeAndRoute } from "../actions/index";

import Loading from "./Loading";
import { Input, Form, Button } from "reactstrap";
import styled from "styled-components";

//Importing Plot.ly react
var Plotly = require("plotly.js/lib/core");
Plotly.register([require("plotly.js/lib/scattermapbox")]);
const Plot = createPlotlyComponent(Plotly);

//Component
function RouteList(props) {

  //State for OnChange when a type is selected
  const [selectedType, setSelectedType] = useState("");

  //State for the list of routes that get displayed when type is selected
  const [routesBasedOnType, setRoutesBasedOnType] = useState({
    typeNames: [],
    typeIds: []
  });

  //State for the specific route that get's selected
  const [selectedRoute, setSelectedRoute] = useState("");
  
  //State for Plotly map
  const [routeData, setRouteData] = useState([{
    lat: [],
    lon: [],
    marker: {"color": "blue"},
    mode: "lines",
    type: "scattermapbox"
  }]);
  const [stopData, setStopData] = useState({
    lat: [],
    long: [],
    marker: {},
    mode: "",
    type: ""
  });
    
  //State to hold the type/route data
  const [typeAndRouteData, setTypeAndRouteData] = useState({})
  //Gets the routes and type data for the dropdowns
  useEffect(() => {
    props.fetchTypeAndRoute()
    .then(res => {
      setTypeAndRouteData(res)
    })
  }, []);
  
  //State to hold the ID of the selected route
  const [routeID, setRouteID] = useState("") 
  //On change handler for the route selection
  const handleRouteSelect = e => {
    setSelectedRoute(e.target.value)

    let routeId = e.target.selectedOptions[0].id
    setRouteID(routeId)
  };
  
  //On change handler for the type selection
  const handleTypeSelect = e => {
    setSelectedType(e.target.value)
    
    //Set the state of the routes list to the correct array based on type selection
    typeAndRouteData.type.find((name, index) => {
      if(name === e.target.value){
        setRoutesBasedOnType({
        typeNames: typeAndRouteData.name[index],
        typeIds: typeAndRouteData.id[index]
      })
     }
   })
  };
  
  //Validation State
  const [inputValidationState, setInputValidationState] = useState({
    typeValidation: false,
    routeValidation: false
  })

  //Displaying the route that is selected on the Plotly
  const handleRouteSubmit = e => {
    e.preventDefault();

    let traceData = []
    
    //Simple validation for type/route. In order: (Neither selected, only type selected, only route selected, both selected) <-- This is to reset state if everything passes
    if(!selectedType && !selectedRoute){
      setInputValidationState({
        typeValidation: true,
        routeValidation: true
      })
      return 
    }

    if(!selectedType){
    setInputValidationState({
      typeValidation: true,
      routeValidation: false
      })
      return 
    }

    if(!selectedRoute){ 
      setInputValidationState({
      typeValidation: false,
      routeValidation: true
      })
      return 
    }

    //Reset Validation
    setInputValidationState({
      typeValidation: false,
      routeValidation: false
    })

    props.fetchRoutesInfo(routeID)
    .then(res => {
        if(!res){return}
        res.traces.map(trace => {
          //Check if it's stop data, and set state if it is
          if (trace.mode === "markers") {
            setStopData({
              ...stopData,
              lat: trace.lat,
              long: trace.lon,
              marker: trace.marker,
              mode: trace.mode,
              type: trace.type
            });
          }
          //Take each trace object and add it to the traces array
          return traceData.push(trace)
        });
      
      //Add the stops state to the end of the traces
      traceData.push(stopData)
      
      //Set route data state to the traces array which is get's displayed on the map
      setRouteData(traceData) 
    })
    .catch(err => console.log(err))

  };
  
  //Grabbing plotly API key
  require("dotenv").config();

  return (
    <div className="dataPage">
      {props.isFetching ? (
        <Loading />
      ) : (
      <Wrapper>
        {props.error && <div>{props.error.message}</div>}

        <StyledForm onSubmit={handleRouteSubmit}>
          <h1>Data Analysis</h1>
          <Input
            type="select"
            onChange={handleTypeSelect}
            name="selectedType"
            value={selectedType}
          >
            <option name="selectedType">Select a type</option>
            {typeAndRouteData.type && 
            typeAndRouteData.type.map(typeName => (
              <option key={typeName}>{typeName}</option>))
            }
          </Input>
            {inputValidationState.typeValidation && <div style={{color: "red"}}>Please Enter a Type</div>}

          <Input
            type="select"
            value={selectedRoute}
            onChange={handleRouteSelect}
            name="selectedRoute"
          >
          {routesBasedOnType.typeNames.length === 0 && <option>Select type to see routes</option>}
          {routesBasedOnType.typeNames.length > 0 && <option>Select a route!</option>}
            { routesBasedOnType.typeNames.length > 0 && 
              routesBasedOnType.typeNames.map((routeName, index) => (
                <option key={routeName} id={routesBasedOnType.typeIds[index]}>{routeName}</option>))
            }
          </Input>
          {inputValidationState.routeValidation && <div style={{color: "red"}}>Please Enter a Type</div>}
          <StyledButton type="submit">Get Data</StyledButton>
        </StyledForm>
        <PlotWrapper>
        <Plot
          data={routeData}
          layout={{
            height: 600,
            mapbox: {
              accesstoken: process.env.REACT_APP_PLOTLY_API_KEY,
              style: "dark",
              center: { lat: 37.746, lon: -122.45 },
              zoom: 11.25
            },
            margin: { b: 0, l: 0, r: 0, t: 0 },
            showlegend: false,
            width: 750
          }}
        />
        </PlotWrapper>
      </Wrapper>
      )}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    routesInfo: state.routesInfo,
    typeAndRouteInfo: state.typeAndRouteInfo,
    error: state.error,
    isFetching: state.isFetching
  };
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
`

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 30%;
  padding: 0 1%;
`

const StyledButton = styled(Button)`
  color: black;
  background-color: #FFC72C;
  margin-right: 5%;

  &:hover{
    background-color: #deaf2f;
  }

  &:active{
    background-color: #deaf2f !important;
  }

  &:focus{
    background-color: #deaf2f;
  }
`

const PlotWrapper = styled.div`
  display: flex; 
  justify-content: center;
  margin: 0.5% 0;
`

const ButtonDiv = styled.div`
  display: flex;
  margin: 2.5% 0;
`

export default connect(mapStateToProps, { 
  fetchRoutesInfo, fetchTypeAndRoute
})(RouteList);