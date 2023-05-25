import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import "./CartComponentStyles.scss";
import uuid from "react-uuid";
import Checkout from "./CheckoutComponent";
import { motion as m } from "framer-motion";

export const Cart = () => {
  const { cartItems, deleteItemCart } = useContext(CartContext);
  const [value, setValue] = useState();
  const handelChange = (e) => {
    const select = e.target.value;
    setValue(select);
  };
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="checkout"
    >
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
          className="checkout__ad"
        />
        {cartItems.length === 0 ? (
          <div className="checkout__empty" key={uuid()}>
            <h1>Your Amazon Cart is empty.</h1>
            <p>
              Your shopping cart is waiting. Give it purpose – fill it with
              groceries, clothing, household supplies, electronics and more.
              Continue shopping on the Amazon.in homepage, learn about today's
              deals, or visit your Wish List.
            </p>
          </div>
        ) : (
          <div className="item-present">
            <h1 className="item-heading">Shopping Cart</h1>
            {cartItems.map((item) => {
              const { id, title, quantity, image, price } = item;
              const totalPrice = price * quantity;

              return (
                <div className="item-container" key={id}>
                  <img className="item-image" src={image} alt={image} />
                  <div className="options">
                    <div className="item-title">
                      <h3>{title}</h3>
                      <p>Eligible for FREE Shipping</p>
                      <b>₹{totalPrice}</b>
                    </div>
                    <div className="extra-options">
                      <label>
                        Qty:
                        <select
                          value={value || quantity}
                          onChange={handelChange}
                          className="select-quantity"
                        >
                          <option value="0">0</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </label>
                      <button
                        onClick={() => deleteItemCart(item)}
                        className="extra-buttons"
                      >
                        Delete
                      </button>
                      <button className="extra-buttons">Save for later</button>
                      <button className="extra-buttons">
                        See more like this
                      </button>
                      <button className="extra-buttons">Share</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <Checkout />
    </m.div>
  );
};

// motion.div initial={{y:"100%"}}
//          animate={{y:"0%"}}
//          transition={{duration:0.75, ease: "linear"}}
//          exit={{opacity:1}}
