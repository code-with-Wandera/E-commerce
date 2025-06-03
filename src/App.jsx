import { Route, Routes, BrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";
import toast, { Toaster } from "react-hot-toast";
import i18n from "./redux/cart/i18n";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  );
};

export default App;
