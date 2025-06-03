import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { menuData } from "../data/menuData";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false); // mobile menu toggle
  const [openSubmenus, setOpenSubmenus] = useState({}); // mobile submenu toggles

  const toggleSubmenu = (name) => {
    setOpenSubmenus((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <nav className=" text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          {/* Hamburger for Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none cursor-pointer hover:text-primary"
            >
              {isOpen ? <AiOutlineClose size={20} /> : <BiMenu size={30} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-secondary">
          {menuData.map((item) =>
            item.submenu ? (
              <div key={item.name}>
                <button
                  onClick={() => toggleSubmenu(item.heading)}
                  className="w-full text-left px-4 py-2  flex justify-between items-center "
                >
                  <span>{item.heading}</span>
                  <IoIosArrowDown
                    className={`w-4 h-4 transition-transform ${
                      openSubmenus[item.heading] ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openSubmenus[item.heading] && (
                  <div>
                    {item.submenu.map((sub) => (
                      <a
                        key={sub.title}
                        href={sub.link}
                        className="block px-6 py-2 hover:text-primary cursor-pointer"
                      >
                        {sub.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={item.name}
                href={item.link}
                className="block px-4 py-2 border-b border-gray-600 hover:bg-gray-600"
              >
                {item.name}
              </a>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default MobileNavbar;
