import React from 'react';

const Cart = (props) => {
    // console.log(props);
    const cart = props.cart;
    // console.log(cart);
    const totalPopulation = cart.reduce((sum,countries) => sum + countries.population,0)

    // let totalPopulation = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const country = cart[i];
    //     totalPopulation += country.population;
    // }
    return (
        <div>

            <h4>Country added:{cart.length} </h4>
            <p>total population: {totalPopulation}</p>
        </div>
    );
};

export default Cart;