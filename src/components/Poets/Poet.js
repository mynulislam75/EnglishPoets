import React from 'react';
import './Poet.css'

const Poet = (props) => {
    // console.log(props)
    const {name,born,died,img,notablebook}=props.poet;
    return (
        <div className="grid">
            
            <img className="img-cls" src={img} alt="" />
            <h2>Name:{name}</h2>
            <p>Born:{born}</p>
            <p>Died:{died}</p>
            <h5>Notable Books:{notablebook}</h5>
        <button
        onClick={()=> props.handleAdd(props.poet)}
        >Add to cart</button>
           
        </div>
    );
};

export default Poet;