import React from 'react'

export default function ItemListContainer (props) {
  return (
    <div>
        <p>{props.saludo}</p>
        <p> {props.greetings}</p>    
    </div>
  )
}
