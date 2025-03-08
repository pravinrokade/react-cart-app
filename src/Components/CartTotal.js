import React from 'react'

function CartTotal(props) {
    const isCartEmpty = props.details.every(item => item.Item === 0);
  return (
    !isCartEmpty?
    (<div style={{margin:'40px 20% 0 20%', color:'blue'}}>
        <hr />
        <div style={{display:'flex', justifyContent:'space-between',fontSize:'20px', fontWeight:'700'}}>
            <p style={{color:'black' }}>Total</p>
            <p>${props.total}</p>
        </div>
        <div style={{display:'flex', alignItems:'center', justifyContent:'center', margin:'50px'}}>
        <button style={{ all:'unset', cursor:'pointer', backgroundColor:'rgb(100,92,255)', padding:'10px 20px', color:'white', borderRadius:'5px'}} onClick={()=>props.clearCart()}>Clear Cart</button>
        </div>
    </div>) : (<div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>is currently empty</div>)
  )
}

export default CartTotal