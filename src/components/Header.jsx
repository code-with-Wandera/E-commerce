import { useEffect, useRef, useState } from "react";
import logo from "../assets/logo.png";
import { FaCartShopping } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { menuData } from "../data/menuData";
import user from "../assets/user.png";
import MobileNavbar from "./MobileNavbar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartTotalPrice, selectCartItem } from "../redux/cart/cartSlice";
const Header = () => {
  const cartItem = useSelector(selectCartItem);
  const cartPrice = useSelector(selectCartTotalPrice);
  const navRef = useRef(null);
  const [open, setOpen] = useState(false);
  const toggleDropdown = () => {
    setOpen(!open);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div>
      {/* Top Navbar */}
      <div className="flex items-center justify-center gap-4 bg-primary w-screen h-[60px]">
        <img src={logo} className="w-20" />
        <p className="text-[14px] md:text-xl font-bold">
          Buytica, Shop in peace, Save money
        </p>
        <p>
          <FaCartShopping />
        </p>
      </div>
      {/* Middle Navbar desktop */}
      <div className="hidden md:flex items-center justify-between px-8 bg-black">
        {/* lgo */}
        <div className="flex items-center justify-center gap-2">
          <Link to={"/"}>
            <img src={logo} className="w-24" />
          </Link>
          <Link to={"/"} className="text-primary">
            BUYTICA
          </Link>
        </div>
        {/* Search bar */}
        <div className="bg-[#FFFFFF] w-[50%] rounded-full flex items-center justify-between pl-4 pr-1 h-12">
          <input
            type="text"
            placeholder="Search products, brand and category"
            className="border-none outline-none w-full"
          />
          <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white cursor-pointer hover:bg-black/80">
            <IoIosSearch size={20} />
          </div>
        </div>
        {/* icons */}
        <div className="text-white flex items-center justify-center gap-8">
          <Link
            to={"/login"}
            className="flex items-center justify-center gap-2 font-bold cursor-pointer"
          >
            <FaUser />
            Account
          </Link>
          <Link
            to={"/cart"}
            className="flex items-center justify-center gap-2 font-bold cursor-pointer relative"
          >
            <FaCartShopping />
            Cart
            <span className="absolute -top-2 right-0 w-4 h-4 bg-primary rounded-full text-[12px] text-center text-black">
              {cartItem.length}
            </span>
          </Link>
        </div>
      </div>
      {/* Middle Navbar mobile */}
      <div className=" md:hidden flex items-center  bg-black">
        {/* lgo */}
        <div className="flex items-center justify-center gap-1">
          <Link to={"/"}>
            <img src={logo} className="w-20" />
          </Link>
        </div>
        {/* Search bar */}
        <div className="bg-[#FFFFFF] w-[60%]  md:w-[50%] rounded-full flex items-center justify-between pl-4 pr-1 h-8">
          <input
            type="text"
            placeholder="Search products, brand"
            className="border-none outline-none w-full"
          />
          <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white cursor-pointer hover:bg-black/80">
            <IoIosSearch size={20} />
          </div>
        </div>
        {/* icons */}
        <div
          className="w-8 h-8 bg-white rounded-full ml-2 group relative z-50 cursor-pointer"
          onClick={toggleDropdown}
        >
          <img src={user} className="" />
          {open && (
            <div
              className=" absolute top-full right-1 rounded-lg p-3 mt-1 shadow-md bg-white text-black w-26  duration-200"
              ref={navRef}
            >
              <div className="flex flex-col items-center justify-center gap-y-2">
                <Link
                  to={"/login"}
                  className="hover:bg-gray-200 rounded w-full px-1 p-1 transition duration-300"
                >
                  Account
                </Link>
                <Link
                  to={"/cart"}
                  href="#"
                  className="hover:bg-gray-200 rounded w-full px-1 p-1 transition duration-300 relative"
                >
                  Cart
                  <span className="absolute -top-1 left-6 w-4 h-4 bg-primary rounded-full text-[12px] text-center text-black">
                    {cartItem.length}{" "}
                  </span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Bottom Navbar */}
      <div className="hidden bg-black text-white pl-10 pb-1 md:flex items-center space-x-8 justify-center">
        {menuData.map((item, index) => {
          return (
            <div className="relative group py-4 z-50" key={index}>
              <div className="cursor-pointer hover:text-primary">
                <span className="font-bold">{item.heading}</span>
              </div>
              <div className="absolute hidden group-hover:block bg-secondary mt-1 shadow-lg w-60">
                <ul className="flex flex-col p-6 gap-4">
                  {item.submenu.map((data, index) => {
                    return (
                      <li key={index}>
                        <a
                          href=""
                          className="hover:text-primary font-bold text-[14px]"
                        >
                          {data.title}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
      {/* Bottom Mobile Navbar */}
      <div className="bg-black text-white pl-10 pb-2 block md:hidden">
        <MobileNavbar />
      </div>
    </div>
  );
};

export default Header;
