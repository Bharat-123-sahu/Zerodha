import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./landing_page/home/HomePage";
import AboutPage from "./landing_page/about/AboutPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import SighUp from "./landing_page/signup/Signup";
import CreateTicket from "./landing_page/support/CreateTicket";
import Universe from "./landing_page/products/Universe";
import ProductPage from "./landing_page/products/ProductPage";
import Login from "./landing_page/login/login";

import Navebar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// Layout component to conditionally render Navbar/Footer
function Layout({ children }) {
  const location = useLocation();
  const hideNavFooter = ["/signup", "/login"].includes(location.pathname);

  return (
    <>
      {!hideNavFooter && <Navebar />}
      {children}
      {!hideNavFooter && <Footer />}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/signup" element={<SighUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/support" element={<CreateTicket />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);
