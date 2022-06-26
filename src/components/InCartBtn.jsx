import React from 'react';

const InCartBtn = (props) => {
    return ( 
        <button className="incart" onClick={props.addToCart}>
            <img src="img/product-card/checked.svg" alt="" />
        </button>
     );
}
 
export default InCartBtn;