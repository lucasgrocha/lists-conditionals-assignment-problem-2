import React from 'react'

const Validation = props => {
  return (
    <div>
      <p>{props.inputLength <= 5 ?
        'Text too short' :
        'Text long enough'}</p>
    </div>
  )
}

export default Validation