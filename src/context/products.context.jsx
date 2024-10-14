import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const productContext = createContext();

export function useProducts() {
    return useContext(productContext);
}

export function ProductsProvider({ children }) {
    const [allProducts, setallProducts] = useState([]);
    const [cart, setCart] = useState([]);
    
    const getAllProducts = async () => {
        const products = await axios.get(import.meta.env.VITE_BASE_URL + '/products');
        setallProducts(products.data);
    };

    const addToCart = (product) => {
        const productExists = cart.filter(_=> _.id == product.id);
        if(productExists.length < 1)
            setCart(prev => [...prev , {...product , quantity : 1}])
    };

    const changeQuantity = (id,quantity) => {
        if(isNaN(quantity)) return;
        setCart(prev => {
            return prev.map(_ => {
                if(_.id == id){
                    return {
                        ..._,
                        quantity
                    }
                }else {
                    return _
                }
            })
        })
    };

    const deleteFromCart = (id) => {
        const productsAfterDeleting = cart.filter(_ => _.id != id)
        setCart(productsAfterDeleting);
        localStorage.setItem('cart' , JSON.stringify(productsAfterDeleting))
    };

    useEffect(() => {
        getAllProducts();
        const existingCart = JSON.parse(localStorage.getItem('cart'));
        if(existingCart && existingCart.length > 0)
            setCart(existingCart)
    }, [])

    useEffect(() => {
        if(cart && cart.length > 0)
            localStorage.setItem('cart' , JSON.stringify(cart))
    }, [cart])

    const value = { products: allProducts, addToCart, cart, changeQuantity, deleteFromCart };

    return (
        <productContext.Provider value={value}>
            {children}
        </productContext.Provider>
    );
}