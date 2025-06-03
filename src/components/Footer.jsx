import React from "react";

const Footer = () => {
  return (
    <div className="bg-black pt-8 pb-4 text-white">
      <div className="w-full h-[1px] bg-white" />
      <div className=" px-8 md:px-0 w-[100%] md:w-[40%] mx-auto flex items-center justify-between">
        <div className="text-[12px] my-2 flex flex-col items-center justify-center">
          <a href="">CHAT WITH US</a>
          <a href="">REPORT A PRODUCT</a>
          <a href="">CONTACT US</a>
        </div>
        <div className="text-[12px] my-2 flex flex-col items-center justify-center">
          <a href="">RETURN POLICY</a>
          <a href="">TERMS AND CONDITIONS</a>
          <a href="">PRIVACY POLICY</a>
          <a href="">SHIPPING AND DELIVERY</a>
        </div>
      </div>
      <div className="w-full h-[0.5px] bg-white" />
      <p className="text-[11px] text-center text-[#FFFFFF]">
        Buytica © All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
