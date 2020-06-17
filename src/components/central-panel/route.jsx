import React from 'react'

const Route = (props) => {
    console.log("route", props)

    return (
        <div className="route">
            <p>{props.route.route_name}</p>
            {/* <p>{props.route.coverage}</p> */}
        </div>
    )
}

export default Route