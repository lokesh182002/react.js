import React from 'react'

export default function Andhrabank(props) {
    return (
        <div>
           <h1>Andhrabank is located at {props.location} with
           account name of {props.data.name}</h1> 
        </div>
    )
}
