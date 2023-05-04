import React from "react";
import MenuIcon from '@mui/icons-material/Menu';
import "./Navlinks.scss";
import { ToastContainer,toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


const Navlinks = () => {
  const notify = () => {
    toast.info(
      "This page is in Maintenance !!!",
      { position: toast.POSITION.TOP_CENTER },
      {}
    );
  };

  return (
    <div className="navlinks">
      <div className="navlinks__container">
        <div className="navlinks__left">
          <span className="navlinks__left__menu navlink__link" onClick={notify}>
            <ToastContainer/>
            <MenuIcon />
          </span>
          <span className="navlinks__left__all navlink__link" onClick={notify}>
            All
            <ToastContainer/>
          </span>
        </div>
        <div className="navlinks__fill">
          <span className="navlinks__fill__link navlink__link" onClick={notify}>
          <ToastContainer/>
            Mobiles
          </span>
          <span className="navlinks__fill__link navlink__link" onClick={notify}>
          <ToastContainer/>
            Computers
          </span>
          <span className="navlinks__fill__link navlink__link" onClick={notify}>
          <ToastContainer/>
            Amazon Pay
          </span>
          <span className="navlinks__fill__link navlink__link" onClick={notify}>
          <ToastContainer/>
            Prime
          </span>
          <span className="navlinks__fill__link navlink__link" onClick={notify}>
          <ToastContainer/>
            {" "}
            Best Sellers
          </span>
          <span className="navlinks__fill__link navlink__link" onClick={notify}>
          <ToastContainer/>
            Today's Deals
          </span>
          <span className="navlinks__fill__link navlink__link" onClick={notify}>
          <ToastContainer/>
            Buy Again
          </span>
          <span className="navlinks__fill__link navlink__link" onClick={notify}>
          <ToastContainer/>
            Customer Service
          </span>
          <span className="navlinks__fill__link navlink__link" onClick={notify}>
          <ToastContainer/>
            {" "}
            New Releases
          </span>
        </div>
        <div className="navlinks__right navlink__image">
        <ToastContainer/>
          {" "}
          <img
            onClick={notify}
            src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/Hello-Charlie/launch/400x39-SWM_with-disclaimer_JPN._CB656396748_.jpg"
            alt=""
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default Navlinks;
