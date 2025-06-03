import { useParams } from "react-router-dom";
import { sales } from "../data/salesData";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { MdAddShoppingCart } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, selectCartItem } from "../redux/cart/cartSlice";
import toast, { Toaster } from "react-hot-toast";
const ProductDetailsPage = () => {
  const items = useSelector(selectCartItem);
  console.log(items);
  const dispatch = useDispatch();
  const { id } = useParams();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success("Product Added successfully !");
  };
  const product = sales.find((p) => p.id === parseInt(id));
  if (!product) return <div className="p-6">Product not found.</div>;
  return (
    <div>
      <Header />
      <div className="w-[100%] mx-auto flex flex-col items-center justify-center bg-[#E5E7EB]">
        <div className="w-[80%] mx-auto bg-white rounded h-50  shadow mt-4 p-8">
          <img src={product.imgPth} className="w-[25%] h-full mx-auto" />
        </div>
        <div className="w-[80%] bg-white rounded mb-2 shadow mt-4 p-4">
          <h3 className="md:text-xl my-4">{product.title}</h3>
          <h5 className="font-bold text-xl flex items-center gap-x-4">
            ksh. {product.price}
            <span className="bg-[#DCFCE7] rounded p-1 font-bold flex items-center justify-center text-[14px] text-[#15803D] ">
              {product.batch}%
            </span>
          </h5>
        </div>
        <div className="w-[80%] bg-white rounded mb-2 shadow mt-4 px-4 py-4">
          <button
            className="relative w-full flex items-center justify-center px-6 py-4 bg-[#E0DF67] text-white rounded uppercase cursor-pointer"
            onClick={() => handleAddToCart(product)}
          >
            <span className="absolute left-4">
              <MdAddShoppingCart size={30} />
            </span>
            <span className="text-center text-xl">Add to Cart</span>
          </button>
        </div>
      </div>

      <div className="mt-6">
        <Footer />
      </div>
    </div>
  );
};

export default ProductDetailsPage;
