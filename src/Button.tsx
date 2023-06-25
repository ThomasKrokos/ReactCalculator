import React from 'react'
import PropTypes from 'prop-types'

const Props = {
    value:String
}


const Button = (props: typeof Props) => {
  return (
    <div>{props.value}</div>
  )
}

Button.propTypes = {}

export default Button