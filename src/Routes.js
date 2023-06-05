import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import NavigationBar from "./Components/Navigation";
import HomeRoute from "./routes/HomeRoute";
import AuthComponent from "./routes/AuthComponent";
import { UserContext } from "./Context/UserContext";
import Home from "./Components/HomeComponent";
import SignInForm from "./Components/SignInForm";
import ProductDetails from "./Components/ProductDetails";
import { Cart } from "./Components/CartComponent";
export default function Routers() {
  const { currentUser } = useContext(UserContext);
  return (
    <div style={{ overflowX: "hidden" }}>
      <Routes>
        <Route path="/" element={<NavigationBar />}>
          <Route index element={<Home />} />
          <Route path="/details/:id" element={<ProductDetails />} />
          <Route path="/checkout" element={<Cart />} />
          <Route
            path="home"
            element={currentUser ? <HomeRoute /> : <Navigate to="/" />}
          />
          <Route
            path="/auth"
            element={!currentUser ? <AuthComponent /> : <Navigate to="/home" />}
          />
          <Route
            path="/create"
            element={!currentUser ? <SignInForm /> : <Navigate to="/home" />}
          />
        </Route>
      </Routes>
    </div>
  );
}
