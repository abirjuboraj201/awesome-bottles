
const getCartFromLocalStorage = () => 
{
    const storedCartString = localStorage.getItem('cart');

    if(storedCartString)
    {
        const storedCart = JSON.parse(storedCartString);

        return storedCart;
    }
    return [];
}


const addItemToCartLocalStorage = id =>
{

const cart = getCartFromLocalStorage();

const newCart = [...cart, id];

saveCartToLocalStorage(newCart);


}

const saveCartToLocalStorage = cart => 
{
    const cartStringified = JSON.stringify(cart);

    localStorage.setItem('cart', cartStringified);
}



export {getCartFromLocalStorage as getStoreCart, addItemToCartLocalStorage as addToStoredCart}