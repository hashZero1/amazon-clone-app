import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import './CheckOutStyles.scss'

export default function Checkout(){
    const {cartItems ,cartTotal} = useContext(CartContext);
    return(
        <>
        <div className="box">
            <div className="box-heading">
                <p>your order is eligible for FREE delivery</p>
            </div>
            <div className="box-total">
                <h2>Subtotal ({cartItems.length} item) : ₹ {cartTotal}</h2>
                <input type="checkbox"/>
                <span>This order contains a gift</span>
            </div>
            <Link to='/auth' className="link-button">Proceed To Buy</Link>
            <button className="extra-button">Select EMI option</button>
        </div>
      
        </>
    )
}