import './DirectoryComponentStyles.scss'
import { Link } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'
import { useContext } from 'react'
import { ToastContainer } from 'react-toastify';
import image from '../homeimage.png'
export default function DirectoryComponent({products}){
  const {addItemToCart} = useContext(CartContext)
return(
    <div className="home">
      <img className='home-img' src={image} alt={image}/>
        {products.map(product => (
          <div className='home-container'>
            <div className="home__row" >
              <div className="product" >
                <div className="product__info">
                <Link className='links' to={`/details/${product.id}`} key={product.id} >
                <p className="title">{product.title}</p>
                <p className="product__price">
                  <small>₹</small>
                  <strong>{product.price}</strong>
                  </p>
              </Link>
         <div className="product__rating">
          {Array(product.rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={product.image} alt={product.title} />
      <button onClick={() => addItemToCart(product)}>Add to Basket</button>
      <ToastContainer/>
      </div>
    </div>
          </div>
        
    ))}
  </div>
)
}


 