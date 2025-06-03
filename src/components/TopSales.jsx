import { sales, picks, holiday } from "../data/salesData";
import { Link } from "react-router-dom";
const TopSales = () => {
  return (
    <div className="bg-primary w-screen">
      {/* Top Sales */}
      <div className="max-w-[100%] md:max-w-[90%] w-full mx-auto bg-white rounded p-6 pb-6 mb-6 cursor-pointer">
        <h1 className="text-[18px] mb-6 font-bold">Top Sales</h1>
        <div className="grid md:grid-cols-4  lg:grid-cols-6 grid-cols-2">
          {sales.map((item, index) => {
            return (
              <Link to={`/product/${item.id}`} className="relative" key={index}>
                <span className="absolute -top-2 right-8 bg-[#DCFCE7] rounded p-1 font-bold flex items-center justify-center text-[14px] text-[#15803D] ">
                  {item.batch}%
                </span>
                <img src={item.imgPth} className="w-36 h-28" />
                <h3>{item.title}</h3>
                <h5 className="font-bold">ksh. {item.price}</h5>
              </Link>
            );
          })}
        </div>
      </div>
      {/* Hot Picks */}
      <div className="max-w-[100%] md:max-w-[90%] w-full mx-auto bg-white rounded p-6 pb-6 mb-6 cursor-pointer">
        <h1 className="text-[18px] mb-6 font-bold">Hot Picks</h1>
        <div className="grid md:grid-cols-4  lg:grid-cols-6 grid-cols-2">
          {picks.map((item, index) => {
            return (
              <div className="relative" key={index}>
                <span className="absolute -top-2 right-8 bg-[#DCFCE7] rounded p-1 font-bold flex items-center justify-center text-[14px] text-[#15803D] ">
                  {item.batch}%
                </span>
                <img src={item.imgPth} className="w-36 h-28" />
                <h3>{item.title}</h3>
                <h5 className="font-bold">ksh. {item.price}</h5>
              </div>
            );
          })}
        </div>
      </div>
      {/* Holiday Officer */}
      <div className="max-w-[100%] md:max-w-[90%] w-full mx-auto bg-white rounded p-6 pb-6 mb-6 cursor-pointer">
        <h1 className="text-[18px] mb-6 font-bold">Holiday Offers</h1>
        <div className="grid md:grid-cols-4  lg:grid-cols-6 grid-cols-2">
          {holiday.map((item, index) => {
            return (
              <div className="relative" key={index}>
                <span className="absolute -top-2 right-8 bg-[#DCFCE7] rounded p-1 font-bold flex items-center justify-center text-[14px] text-[#15803D] ">
                  {item.batch}%
                </span>
                <img src={item.imgPth} className="w-36 h-28" />
                <h3>{item.title}</h3>
                <h5 className="font-bold">ksh. {item.price}</h5>
              </div>
            );
          })}
        </div>
      </div>
      {/*Deals you can't miss */}
      <div className="max-w-[100%] md:max-w-[90%] w-full mx-auto bg-white rounded p-6 pb-6 mb-6 cursor-pointer">
        <h1 className="text-[18px] mb-6 font-bold">Deals you can't miss !</h1>
        <div className="grid md:grid-cols-4  lg:grid-cols-6 grid-cols-2">
          {sales.map((item, index) => {
            return (
              <div className="relative" key={index}>
                <span className="absolute -top-2 right-8 bg-[#DCFCE7] rounded p-1 font-bold flex items-center justify-center text-[14px] text-[#15803D] ">
                  {item.batch}%
                </span>
                <img src={item.imgPth} className="w-36 h-28" />
                <h3>{item.title}</h3>
                <h5 className="font-bold">ksh. {item.price}</h5>
              </div>
            );
          })}
        </div>
      </div>
      {/*Our latest products */}
      <div className="max-w-[100%] md:max-w-[90%] w-full mx-auto bg-white rounded p-6 pb-6 cursor-pointer">
        <h1 className="text-[18px] mb-6 font-bold bg-[#063263] text-white p-2">
          Our Lates products
        </h1>
        <div className="grid md:grid-cols-4  lg:grid-cols-6 grid-cols-2">
          {picks.map((item, index) => {
            return (
              <div className="relative" key={index}>
                <span className="absolute -top-2 right-8 bg-[#DCFCE7] rounded p-1 font-bold flex items-center justify-center text-[14px] text-[#15803D] ">
                  {item.batch}%
                </span>
                <img src={item.imgPth} className="w-36 h-28" />
                <h3>{item.title}</h3>
                <h5 className="font-bold">ksh. {item.price}</h5>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TopSales;
