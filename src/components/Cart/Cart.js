import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    console.log(cart)
    let total = 0;
    let name = '';
    let notablebook = '';
    for (const singlePoet of cart) {
        name = singlePoet.name;
        total = total + parseInt(singlePoet.price);
        notablebook = singlePoet.notablebook;
    }

    return (
        <div className="cart-poet">
            <h1 className="cart-heading">Cart History</h1>
            <h3>Buy Book,Read Book and Stay Happy!</h3>
            <h4>Cart:{props.cart.length}</h4>

            {
                cart.map(singlePoetD => <li>
                    <div className="cart-div">

                        <img className="cart-img" src={singlePoetD.img} alt="" />
                        <h5>{singlePoetD.name}</h5>

                    </div>
                </li>

                )
            }
            <p>Total Price:{total}</p>
        </div>
    );
};

export default Cart;