import React from 'react';
import { connect } from "react-redux";
import { fetchRoutes } from "../actions/index";
import Loading from "./Loading";

function RouteList(props) {
  console.log(props.allroutes)
    return (
      <div>
        <button onClick={props.fetchRoutes}>Get Data</button>

        {props.isFetching && <div><Loading/></div>}
        {props.error && <div>{props.error.message}</div>}
        <select>
        {props.allroutes.map((route, index) =>
          <option>{index}</option>
        )}
        </select>
      </div>
)}
  
  const mapStateToProps = state => {
    return{
    allroutes: state.allroutes,
    error: state.error,
    isFetching: state.isFetching 
    }
  };
  
  export default connect( 
    mapStateToProps, {fetchRoutes}
  )(RouteList);

