import { createContext, useState } from "react";

export const AnuntContext = createContext(null)

export const CartProvider = ({children}) => {
    const [cartCars, setCartCars] = useState([])


const addToCart = (product) => {
    const existingItem = cartCars.find((item)=>item == product)
    if(existingItem){
        alert("Product already added to the cart")
        return 
    }
    setCartCars([...cartCars, product])
}
const removeFromCart = (product) => {
    setCartCars(cartCars.filter((el) => el !== product))
}
 
  return (
    <AnuntContext.Provider value={{addToCart, cartCars,removeFromCart}}>
        {children}
    </AnuntContext.Provider>
  )
}

