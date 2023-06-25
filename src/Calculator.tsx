import React from 'react'

function Calculator() {

    const container = {
        border: '1px solid',
        borderRadius: "20%",
        padding: "5px",
        display: "flex",
        flexWrap: "wrap"
    }
    const button = {
        border: '1px solid',
        borderRadius: "15%",
        padding: "25px",
    }
  return (

    <div style={container}>
<div style={button}></div>
<div style={button}></div>
<div style={button}></div>
<div style={button}></div>
<div style={button}></div>
<div style={button}></div>
<div style={button}></div>
<div style={button}></div>
<div style={button}></div>
<div style={button}></div>
<div style={button}></div>
<div style={button}></div>
<div style={button}></div>

    </div>
  )
}

export default Calculator