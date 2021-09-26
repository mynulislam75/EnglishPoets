import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    console.log(cart)
    let total = 0;
    for (const singlePoet of cart) {
        total = total + parseInt(singlePoet.gem);
    }

    return (
        <div className="cart-poets">
            <h1 className="cart-heading">Cart History</h1>
            <h3>Make Your Favourite Poets Commette</h3>
            <h2><i class="fas fa-shopping-cart"></i>Cart:{props.cart.length}</h2>

            {
                cart.map(singlePoetD => <li>
                    <div className="cart-div">

                        <img className="cart-img" src={singlePoetD.img} alt="" />
                        <h5>{singlePoetD.name}</h5>

                    </div>
                </li>

                )
            }
            <h4><i class="far fa-gem"></i>Total Diamonds:{total}</h4>
            <button className="apply-btn">Apply</button>
        </div>
    );
};

export default Cart;