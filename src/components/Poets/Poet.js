import React from 'react';
import './Poet.css'

const Poet = (props) => {
    // console.log(props)
    const {name,born,died,img,notablebook,price,nationality}=props.poet;
    return (
        <div className="grid">
            
            <img className="img-cls" src={img} alt="" />
            <h2>{name}</h2>
            <p>Born:{born}</p>
            <p>Died:{died}</p>
            <p>Nationality:{nationality}</p>
            <h4>Notable Works:{notablebook}</h4>
            <h4>Price:{price}</h4>
        <button
        className="simple-btn"
        onClick={()=> props.handleAdd(props.poet)}
        > <i class="fas fa-shopping-cart"></i>Add to cart</button>
           
           <div className="font-awesome-container">
               <p>Know and read this poets notable poems</p>
               <i class="fab customize fa-twitter"></i><i class="fab customize fa-facebook-square"></i><i class="fab customize fa-wikipedia-w"></i><i class="fab customize fa-quora"></i>
           </div>
        </div>
    );
};

export default Poet;