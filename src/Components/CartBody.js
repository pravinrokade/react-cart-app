import React from 'react'
import './CartBody.css'

function CartBody(props) {
  return (
    <div className='Body'>
        <p className='Heading' style={{display:'flex', justifyContent:"center"}}>YOUR BAG</p>
        {
            props.details.map((val,ind)=>
                val.Item > 0 ? (
                <div className='CartItem'>
                    <div className='cartItemSub'>
                        <img src={val.Img} alt="" />
                        <div className='CartDetails' >
                            <p style={{fontWeight:'700', fontSize:'20px'}}>{val.Name}</p>
                            <p>${val.Amount}</p>
                            <button className='btn' onClick={()=>props.removeItem(ind)}>remove</button>
                    </div>
                    </div>
                    <div style={{fontWeight:'700', fontSize:'20px'}}>
                        <button className='btn' onClick={()=>props.increment(ind)}>^</button>
                        <p>{val.Item}</p>
                        <button className='btn' onClick={()=>props.decrement(ind)}>⌄</button>
                    </div>
                </div>
            ) : null )}
    </div>
  )
}

export default CartBody




