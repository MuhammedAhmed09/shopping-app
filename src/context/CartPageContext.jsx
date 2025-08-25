import { createContext, useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext([]);

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem("cartItems")) || [];
        } catch (error) {
            console.error("Failed to parse cart data:", error);
            return [];
        }
    });
    
    const addToCart = (product) => {
        setCartItems((prevItems) => {
            const existing = prevItems.find((item) => item.id === product.id);
            
            if(existing) {
                return prevItems.map((item) => 
                item.id === product.id 
                    ? {...item, quantity: item.quantity + (product.quantity || 1)} 
                    : item
                )
            } else {
                return [...prevItems, { ...product, quantity: product.quantity || 1 }]
            }
        }) 
    };

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    const increaseQuantity = (productId) => {
        setCartItems((prevItems) => 
            prevItems.map((item) =>
                item.id === productId 
                ? { ...item, quantity: item.quantity + 1 } 
                : item
            )
        )
    }

    const decreaseQuantity = (productId) => {
        setCartItems((prevItems) => 
            prevItems
            .map((item) => 
                item.id === productId 
                ? { ...item, quantity: item.quantity -1 }
                : item
            )
            .filter(item => item.quantity > 0)
        )
    }

    const updateQuantity = (productId, newQuantity) => {
        setCartItems((prevItems) => 
            prevItems  
            .map((item) => 
                item.id === productId
                ? { ...item, quantity: newQuantity > 0 ? newQuantity : 1}
                : item
            )
        )
    }

    const removeItem = (productId) => {
        setCartItems((prevItems) => 
            prevItems.filter((item) => item.id !== productId)
        )
    }

    const quantityInCart = () => {
        return cartItems.reduce((acc, item) => acc + item.quantity, 0);
    }

    return (
        <CartContext.Provider value={{ cartItems, addToCart, increaseQuantity, decreaseQuantity, updateQuantity, removeItem, quantityInCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;