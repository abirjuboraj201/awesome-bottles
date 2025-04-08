import React, { use, useState, useEffect } from 'react';
import Bottle from '../Bottle/Bottle';
import '../Bottles/Bottles.css'
import { addToStoredCart, getStoreCart, removeFromCart } from '../../utilities/localStorage';
import Cart from '../cart/Cart';





const Bottles = ({bottlePromise}) => {
    
    const [cart, setCart] = useState([]);
    const bottles = use(bottlePromise);

    //useEffect

    useEffect( () => {
        const storedCartIds = getStoreCart();
        // console.log(storedCartIds, bottles);
        const storedCart = [];

        for(const id of storedCartIds)
        {
            // console.log(id);
            const cartBottle =  bottles.find(bottle => bottle.id === id);

            if(cartBottle)
            {
                storedCart.push(cartBottle);
            }
        }
        setCart(storedCart);

    }, [bottles])




    const handleAddToCart = (bottle) =>
    {
        const newCart = [...cart, bottle];
        setCart(newCart);
        //save the id to local storage

        addToStoredCart(bottle.id);

    }

    const handleRemoveFromCart = id =>
    {
        // console.log("Removed", id);

        const remainCart = cart.filter(bottle => bottle.id !== id);

        setCart(remainCart);
        removeFromCart(id);

    }
    // console.log(bottles);
    
    return (
        <div>
            <h3>Bottles: {bottles.length}</h3>
            <p>Added to cart: {cart.length}</p>
        <Cart cart = {cart} handleRemoveFromCart= {handleRemoveFromCart}></Cart>
            <div className='bottles-container'>
            {
                bottles.map(bottle => <Bottle key = {bottle.id} bottle = {bottle} handleAddToCart= {handleAddToCart}></Bottle>)
            }
            </div>
        </div>
    );
};

export default Bottles;