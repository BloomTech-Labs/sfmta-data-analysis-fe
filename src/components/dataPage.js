import React from 'react';
// import TestMap from './testMap';

// const DataPage = props => {
//     return (
//         <div>
//             Data Page with Bunches & Gaps
//             <div>
//                 <TestMap/>
//                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique nulla aliquet enim tortor at. Sit amet mauris commodo quis imperdiet massa tincidunt nunc. Magna sit amet purus gravida. Ultrices in iaculis nunc sed augue lacus. Consequat semper viverra nam libero justo laoreet sit amet cursus. Pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper. Adipiscing elit ut aliquam purus sit. Sit amet venenatis urna cursus eget nunc scelerisque viverra mauris. Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Pulvinar proin gravida hendrerit lectus. Odio aenean sed adipiscing diam. Tortor pretium viverra suspendisse potenti nullam ac tortor vitae purus. Magna etiam tempor orci eu lobortis elementum. Nec tincidunt praesent semper feugiat.</p>
//             </div>
//             <div>
//                 <TestMap/>
//                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique nulla aliquet enim tortor at. Sit amet mauris commodo quis imperdiet massa tincidunt nunc. Magna sit amet purus gravida. Ultrices in iaculis nunc sed augue lacus. Consequat semper viverra nam libero justo laoreet sit amet cursus. Pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper. Adipiscing elit ut aliquam purus sit. Sit amet venenatis urna cursus eget nunc scelerisque viverra mauris. Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Pulvinar proin gravida hendrerit lectus. Odio aenean sed adipiscing diam. Tortor pretium viverra suspendisse potenti nullam ac tortor vitae purus. Magna etiam tempor orci eu lobortis elementum. Nec tincidunt praesent semper feugiat.</p>
//             </div>
//         </div>
//     )
// }

import { connect } from "react-redux";
import { fetchRoutes } from "../actions/index";
import Loading from "./Loading";

function RouteList(props) {
    console.log("RouteList", props);
    return (
      <>
      
        <button onClick={props.fetchRoutes}>Get Data</button>
    {props.isFetching && <div><Loading/></div>}
        {props.error && <div>{props.error.message}</div>}
        <div>
          {props.allroutes.map(p => (
            
            <p className="allroutes" key={p.name}>
              {p.name}
              
            </p>
            
          ))}
        </div>
      </>
    );
  }
  
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

