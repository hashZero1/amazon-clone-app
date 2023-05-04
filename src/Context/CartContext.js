import { createContext, useEffect, useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//helper to function to find the product
//FUNCTION TO ADDING ITEM FROM CART
const addCartItem = (cartItems, productToAdd) =>{
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  //if product is sxisting then increase quantity
  if(existingCartItem){
    return cartItems.map((cartItem) => cartItem.id === productToAdd.id? 
    {...cartItem, quantity: cartItem.quantity + 1}: cartItem)
  }
  //return with new cart item with quantity in it
  return [...cartItems, {...productToAdd, quantity: 1}];
}

//FUNCTION TO REMOVING ITEM FROM CART
// const removeCartItem = (cartItems, productToRemove) =>{
//   //to find the item if exist in cart
//   const existingCartItem = cartItems.find(
//     (cartItem) => cartItem.id === productToRemove.id
//   );
//   //to filter out the remaining
//   if(existingCartItem ===1){
//     return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id)
//   }
//   //if item exist then decrease quantity
//   return cartItems.map((cartItem) => cartItem.id === productToRemove.id? 
//     {...cartItem, quantity: cartItem.quantity- 1 }: cartItem)

// }
const deleteCart = (cartItems, deleteItem) => cartItems.filter((cart) => cart.id !== deleteItem.id)


//empty car and a function to add items in cart
//and calculate total amount
export const CartContext = createContext({
    cartItems: [],
    addItemToCart : () => {} ,
    cartTotal: 0 
  });

export const CartProvider =({children}) =>{
    const [cartItems, setCartItems] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);

    //to get the total price by comparing quantity
    useEffect(() =>{
      const newTotal = cartItems.reduce(
        (total, cartItem) => total + cartItem.quantity* cartItem.price, 0);
      setCartTotal(newTotal);
    },[cartItems])

    //toast notification
    const notify = (statement) => {
      toast.success("Item added to Cart !", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    };


    //adding or removing item to cart using helper function
    const addItemToCart = (productToAdd) => {
      setCartItems(addCartItem(cartItems,productToAdd));
      notify();
    }
    // const removeItemToCart = (productToRemove) => {
    //   setCartItems(removeCartItem(cartItems,productToRemove));
    // }
    const deleteItemCart = (deleteItem) =>{
      setCartItems(deleteCart(cartItems, deleteItem));
    }

    
    return <CartContext.Provider value={{addItemToCart, cartItems,cartTotal,deleteItemCart }}>
      {children}
      </CartContext.Provider>
  }


