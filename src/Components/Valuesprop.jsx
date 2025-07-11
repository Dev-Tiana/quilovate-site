import React from 'react'

const Valuesprop = ({image,  heading, body}) => {
  return (
    <div>
        <div>{image}</div>
        <h1>{heading}</h1>
        <p>{body}</p>
    </div>
  )
}

export default Valuesprop