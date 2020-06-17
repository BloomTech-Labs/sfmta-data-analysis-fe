import React from 'react'

const Route = (props) => {
    console.log(props)
    return (
        <h1>{props.route.route_name}</h1>
    )
}

export default Route