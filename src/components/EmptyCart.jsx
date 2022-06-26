import React from 'react';

const Empty = (props) => {
    return ( 
        <div className="empty">
            <h1>Sorry, but cart is empty... :c</h1>
            <p>Add one more product to see it in cart</p>
            <button className='green-btn' onClick={props.onCloseCart} >Go back</button>
        </div>
     );
}
 
export default Empty;