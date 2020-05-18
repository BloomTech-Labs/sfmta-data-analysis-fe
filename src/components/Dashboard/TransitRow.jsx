import React from 'react'

const TransitRow = (props) => {
    console.log(props)
    return (
        <div>
            <p>{props.type}</p>
        </div>
    )
}

export default TransitRow