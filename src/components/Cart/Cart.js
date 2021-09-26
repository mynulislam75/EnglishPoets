import React from 'react';
import './Cart.css'

const Cart = (props) => {
const{cart}=props;
let total=0;
let name=''
for(const singlePoet of cart){
    name=singlePoet.name;
    total=total + singlePoet.price;
}

    return (
        <div className="cart-poet">
            <h2>All poets</h2>
            <p>Cart:{props.cart.length}</p>
            <p>Name:{name}</p>
            <p>Total:{total}</p>
        </div>
    );
};

export default Cart;