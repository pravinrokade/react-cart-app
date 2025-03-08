import './App.css';
import { useState } from 'react';
import CartBody from './Components/CartBody';
import CratHeader from './Components/CratHeader';
import CartTotal from './Components/CartTotal';

function App() {
  const [details, setDetails] = useState([  {Name: 'Samsung Galaxy S8', Item:1, Amount: 399.99, Img:'https://www.course-api.com/images/cart/phone-1.png'},
                                            {Name: 'Google Pixel', Item:1, Amount: 499.99, Img:'https://www.course-api.com/images/cart/phone-2.png'},
                                            {Name: 'Xiaomi Redmi Note 2', Item:1, Amount: 699.99, Img:'https://www.course-api.com/images/cart/phone-3.png'},
                                            {Name: 'Samsung Galaxy S7', Item:1, Amount: 599.99, Img:'https://www.course-api.com/images/cart/phone-4.png'}
  ])

  const count = details.reduce( (acc,item) => acc + item.Item, 0)

  const increment = (ind) =>{
    const updateDetails=[...details];
    updateDetails[ind].Item += 1;
    setDetails(updateDetails);
  }

  const decrement = (ind) =>{
    const updateDetails=[...details];
    if(updateDetails[ind].Item > 0){
      updateDetails[ind].Item -= 1;
    }
    setDetails(updateDetails);
  }

  const removeItem = (ind) =>{
    const updateDetails=[...details];
    updateDetails[ind].Item=0;
    setDetails(updateDetails);
  }

  const total = details.reduce((acc,val)=>acc + (val.Item * val.Amount),0);

  const clearCart = ()=>{
    const updateDetails=[...details];
    updateDetails.forEach(val=> val.Item=0);
    setDetails(updateDetails);
  }

  return (
    <div className="appClass">
        <CratHeader count={count} />
        <CartBody details={details} increment={increment} decrement={decrement} removeItem={removeItem}/>
        <CartTotal total={total} clearCart={clearCart} details={details}/>
    </div>
  );
}

export default App;
