import "./DirectoryComponentStyles.scss";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import { useContext } from "react";
import { ToastContainer } from "react-toastify";
import image from "../homeimage.png";
import { motion as m } from "framer-motion";

export default function DirectoryComponent({ products }) {
  const { addItemToCart } = useContext(CartContext);
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="home"
    >
      <img className="home-img" src={image} alt={image} />
      {products.map((product) => (
        <m.div
          whileHover={{ scale: 0.98 }}
          transition={{ duration: 0.2 }}
          className="home-container"
        >
          <div className="home__row">
            <div iv className="product">
              <Link
                className="links"
                to={`/details/${product.id}`}
                key={product.id}
              >
                <div className="product__info">
                  <p className="title">{product.title}</p>
                  <p className="product__price">
                    <small>₹</small>
                    <strong>{product.price}</strong>
                  </p>

                  <div className="product__rating">
                    {Array(product.rating)
                      .fill()
                      .map((_) => (
                        <p>⭐</p>
                      ))}
                  </div>
                </div>
                <img src={product.image} alt={product.title} />
                {/* <button onClick={() => addItemToCart(product)}>Add to Basket</button> */}
                <ToastContainer />
              </Link>
            </div>
          </div>
        </m.div>
      ))}
    </m.div>
  );
}
