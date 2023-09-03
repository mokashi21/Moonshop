import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Forget from "./components/Forget";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Welcome from "./components/Welcome";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CartMain from "./pages/CartMain";
import MainProduct from "./components/MainProduct";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import Pay from "./pages/Pay";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/resetpassword" element={<Forget />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Checkout />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<CartMain />} />
        <Route path="/product-list" element={<MainProduct />} />
        <Route path="/payment/:totalAmount" element={<Payment />} />
        <Route path="/pay/:orderId" element={<Pay />} />
      </Routes>
    </Router>
  );
}

export default App;
