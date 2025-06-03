import cartImg from "../assets/cart.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import {
  removeCart,
  addToCart,
  selectCartItem,
  removeSignalItem,
} from "../redux/cart/cartSlice";
import { useEffect, useState } from "react";
const Cart = () => {
  const [productPrice, setProductPrice] = useState(0);
  const dispatch = useDispatch();
  const cartItem = useSelector(selectCartItem);
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success("Product added successfully");
  };
  const removeSignalData = (product) => {
    dispatch(removeSignalItem(product));
  };
  const removeItems = (product) => {
    dispatch(removeCart(product));
    toast.success("Product Removed successfully !");
  };
  const total = () => {
    let productPrice = 0;
    cartItem.map((ele) => {
      productPrice = ele.price * ele.qty + productPrice;
    });
    setProductPrice(productPrice);
  };
  useEffect(() => {
    total();
  }, [total]);
  return (
    <div>
      <Header />
      <div className="w-screen  bg-[#E5E7EB] mb-8">
        {cartItem.length == 0 ? (
          <div className="w-[75%] mx-auto ">
            <div className="flex items-center justify-center flex-col">
              <div className="w-40 h-40 pt-16 mb-18">
                <img src={cartImg} className="rounded-full" />
              </div>
              <h3 className="text-xl">Your cart is empty!</h3>
              <h5>Browse our categories and discover our best deals!</h5>
              <Link
                to={"/"}
                className="my-10 bg-primary w-full py-2 rounded shadow font-semibold cursor-pointer tracking-wide text-center"
              >
                START SHOPPING
              </Link>
            </div>
          </div>
        ) : (
          <div className="w-[75%] mx-auto pt-10">
            <h2 className="">Cart Summery</h2>
            <div className="w-[100%] bg-white h-16 mt-1 px-4 flex  items-center justify-between">
              <h4>Subtotal</h4>
              <h4 className="font-bold">Ksh {productPrice}</h4>
            </div>
            <h3 className="mt-2">CART {`(${cartItem.length})`}</h3>
            <div className="w-[100%] p-6 mt-1 px-4">
              {cartItem.map((product) => {
                return (
                  <div className="mb-2 p-4 bg-white">
                    <div className="flex  justify-start gap-x-6 relative">
                      <img src={product.imgPth} className="w-22" />
                      <div>
                        <p>{product.title}</p>
                        <div className="flex items-center justify-start gap-x-2">
                          <p>Ksh {product.price}</p>
                          <span className="w-12 h-6 rounded bg-[#DCFCE7] text-center text-[#15803D] font-bold">
                            {product.batch}%
                          </span>
                        </div>
                      </div>
                      <span className="text-[10px] rounded md:text-[13px] absolute to-0% right-0 md:right-18 bg-primary md:px-4 md:py-2 px-1 py-1">
                        Price : {product.price * product.qty}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <button
                        className="flex items-center justify-center gap-x-2 mt-6 text-primary cursor-pointer"
                        onClick={() => removeItems(product.id)}
                      >
                        <MdDelete size={20} />
                        <span className="text-[14px]">REMOVE</span>
                      </button>
                      <button
                        className={`px-2 rounded py-2 ${
                          cartItem.length <= 1 ? "bg-[#EFEFB3]" : "bg-primary"
                        }  text-center cursor-pointer`}
                        onClick={
                          product.qty <= 1
                            ? () => removeItems(product.id)
                            : () => removeSignalData(product)
                        }
                      >
                        <FaMinus />
                      </button>
                      <span>{product.qty}</span>
                      <button
                        className="px-2 rounded mr-6 py-2 bg-primary text-center cursor-pointer"
                        onClick={() => handleAddToCart(product)}
                      >
                        <FaPlus />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Cart;
