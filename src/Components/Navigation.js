import React,{useContext} from 'react'
import { Outlet,Link } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';
import { signOutUser } from '../Firebase/FirebaseUtils';
import './NavigationStyles.scss';
import Navlinks from './NavLinks';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import "./Header.scss";
import "react-toastify/dist/ReactToastify.css";
import Footer from './Footer'
import { CartContext } from '../Context/CartContext';


function NavigationBar(){
    const {currentUser, setCurrentUser} = useContext(UserContext);
    const {cartItems} = useContext(CartContext)
    const signOutHandler = async () => {
        await signOutUser();
        setCurrentUser(null);
    }
    return (
        <>
        <nav className="header">
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
          alt="logo"
          className="header__logo"
        />
      </Link>
      <div className="header__search">
        <input type="text" name="" id="" className="header__searchbar" />
        <SearchIcon className="header__searchIcon"/>
      </div>
      <div className="header__nav">
        <div className='nav-links-container'>
              
            </div>
        <Link to='/auth' className="header__link">
          <div className="header__option" >
            <span className="header__option__lineOne">Hello,</span>
            <span>
            {currentUser?  <Link className="header__option__lineTwo" onClick={signOutUser} to='/auth'>
                    SignOut
                </Link> : <Link className="header__option__lineTwo" to='/auth'>
                    SignIn
                </Link> }
            </span>
          </div>
        </Link>

        <Link to="" className="header__link">
          <div className="header__option">
            <span className="header__option__lineOne">Returns</span>
            <span className="header__option__lineTwo">& Orders</span>
          </div>
        </Link>
        <Link to="" className="header__link">
          <div className="header__option" >
            <span className="header__option__lineOne">Your</span>
            <span className="header__option__lineTwo">Prime</span>
          </div>
        </Link>
        <Link to="/checkout" className="header__link">
          <div className="header__option__basket">
            <ShoppingCartOutlinedIcon style={{ fontSize: 30 }} />
            <span className="header__option__lineTwo header__basket__count">
        {cartItems.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
        <Navlinks/>
          <Outlet/>
         <Footer/>
        </>
    )
}

export default NavigationBar;