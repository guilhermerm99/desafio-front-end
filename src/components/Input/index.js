import React from 'react'
import * as C from './styles'

const Input = ({ type, placehoder, value, onChange }) => {
  return (
    <C.Input
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placehoder}
    />
  )
}

export default Input