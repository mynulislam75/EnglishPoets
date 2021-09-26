import React from 'react';
import './Poet.css'

const Poet = (props) => {
    // console.log(props)
    const { name, born, died, img, notablebook, price, nationality, gem } = props.poet;
    return (
        <div className="poets-container">

            <div className="poet-name-img-style">
                <img className="img-cls" src={img} alt="" />
                <h2>{name}</h2>
            </div>

            <div className="poets-details">
                <p><small>Born:{born}</small></p>
                <p><small> Died:{died}</small></p>
                <p><small> Nationality:{nationality}</small></p>
                <h4>Notable Books:{notablebook}</h4>
                <h4>Price Of The Books:${price}</h4>
                <p>Diamonds required for virtual poets commetee:{gem}</p>

                <button
                    className="simple-btn"
                    onClick={() => props.handleAdd(props.poet)}
                > <i class="fas fa-shopping-cart"></i>Add to cart</button>

                <div className="font-awesome-container">
                    <p>Know this poet and read notable poems:</p>
                    <i class="fab customize fa-twitter"></i><i class="fab customize fa-facebook-square"></i><i class="fab customize fa-wikipedia-w"></i><i class="fab customize fa-quora"></i>
                </div>
            </div>


        </div>
    );
};

export default Poet;