import React from "react"
import { Spinner } from 'reactstrap';

function Loading(props) {
    console.log("RouteList", props);
    return (
      <>
        <Spinner color='dark' />
        <Spinner color="dark" />
        <Spinner color="dark" />
        <Spinner color="dark" />
      </>
    );
  }
  export default Loading;