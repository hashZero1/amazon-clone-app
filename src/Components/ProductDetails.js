import { Link, useParams } from "react-router-dom";
import { Products } from "../Products";
import "./ProductDetailStyles.scss";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import Checkout from "./CheckoutComponent";
import { motion as m } from "framer-motion";

export default function ProductDetails() {
  //extract id from params (convert string to number using parseInt) if undefined
  const { addItemToCart } = useContext(CartContext);
  const { id } = useParams();
  const productsData = Products.find((pd) => pd.id === parseInt(id));
  return (
    <>
      <m.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        className="product-info"
      >
        <div className="item-image-parent">
          <div className="item-list-vertical">
            <div className="thumb-box">
              <img src="https://i.ibb.co/VJf6fXm/thumb1.jpg" alt="thumbnail" />
            </div>
            <div className="thumb-box">
              <img src="https://i.ibb.co/Jt5zc58/thumb2.jpg" alt="thumbnail" />
            </div>
            <div className="thumb-box">
              <img src="https://i.ibb.co/Yf9LMpy/thumb3.jpg" alt="thumbnail" />
            </div>
            <div className="thumb-box">
              <img src="https://i.ibb.co/60hPGy2/thumb4.jpg" alt="thumbnail" />
            </div>
          </div>
          <div className="item-image-main">
            <img src={productsData.image} alt="default" />
          </div>
        </div>

        <div className="item-info-parent">
          <div className="main-info">
            <h2>{productsData.title}</h2>
            <div className="star-rating">
              <span>★★★★</span>★
            </div>
            <p>
              Price: <span className="price">₹ {productsData.price}</span>
            </p>
          </div>

          <div className="description">
            <Link
              to="/auth"
              onClick={() => addItemToCart(productsData)}
              className="buy-button"
            >
              Buy Now
            </Link>
            <button
              onClick={() => addItemToCart(productsData)}
              className="cart-button"
            >
              Add To Cart
            </button>
            <button
              onClick={() => addItemToCart(productsData)}
              className="cart-button-add"
            >
              Add+
            </button>
          </div>
          <div className="select-items">
            <div className="change-color">
              <label>
                <b>Colour:</b> Black
              </label>
              <br />
              <div className="thumb-box">
                <img
                  src="https://i.ibb.co/QjkJJk3/select1.jpg"
                  alt="thumbnail"
                />
              </div>
              <div className="thumb-box">
                <img
                  src="https://i.ibb.co/C297yD0/select2.jpg"
                  alt="thumbnail"
                />
              </div>
            </div>

            <div className="change-size">
              <label>
                <b>Size:</b>
              </label>
              <br />
              <select className="options">
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
                <option>2XL</option>
              </select>
              <div>
                <b>Details:</b>
              </div>
              <p>{productsData.info}</p>
            </div>
          </div>
        </div>
        <div>
          <Checkout />
        </div>
      </m.section>
    </>
  );
}
