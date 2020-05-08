import React from 'react'

const Char = props => {
  const chars = props.textInput

  const style = {
    display: 'inline-block',
    padding: '16px',
    textAlign: 'center',
    margin: '16px',
    border: '1px solid black',
    cursor: 'pointer',
    userSelect: 'none'
  }

  return (
    <div>
      {
        chars.split('').map((letter, index) => {
          return (
            <span
              style={style}
              onClick={() => props.clicked(chars, index)}
              key={index}
            >
              {letter}
            </span>
          )
        })
      }
    </div>
  )
}

export default Char