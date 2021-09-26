import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Poet from '../Poets/Poet';
import './Main.css'

const Main = () => {

    const [poetsInfo, setPOestsInfo] = useState([]);
    const[cart,setCart]=useState([])

    useEffect(() => {
        fetch('./fakedata.JSON')
            .then(res => res.json())
            .then(data => setPOestsInfo(data))
    }, [])

    const handleAdd = (poet) => {
        console.log(poet)
        const newCart=[...cart,poet]
        setCart(newCart)
    }


    // console.log(poetsInfo)
    return (
        <div className="main-section">
            <div className="all-poets-details">
                {
                    poetsInfo.map(poet => <Poet
                        poet={poet}
                        handleAdd={handleAdd}
                    ></Poet>)
                }
            </div>

            <div className="cart-div">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Main;