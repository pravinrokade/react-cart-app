import React from 'react'
import { FiShoppingCart } from "react-icons/fi";
import './CartHeader.css'

function CratHeader(props) {
  return (
    <div className='HeaderClass'>
        <p>useReducer</p>
        <div className='cartIcon'>
            <p><FiShoppingCart className='cartIconClass' size={30} />
            <sup className='supClass'>{props.count}</sup></p>
        </div>
    </div>
  )
}

export default CratHeader