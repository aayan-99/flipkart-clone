import React from "react";
import logo from "../assets/logos/Logo-1.png";
import { RiShoppingCartLine } from "react-icons/ri";
import { useRecoilState } from "recoil";
import productToCartAtom from "../recoil/productToCartAtom";
import { Link } from "react-router-dom";

const Header = () => {
  // Global Variable
  const [productToCart, setProductToCart] = useRecoilState(productToCartAtom);
  return (
    <div className=" h-[4.5rem] flex items-center justify-between bg-blue-600">
      <div className="ml-8 ">
        {/* <p className="font-semibold italic text-white text-3xl">Flipkart</p> */}
        <span>
          <img src={logo} alt="flipkart" className="w-[150px]" />
        </span>
      </div>

      <Link to="/cart">
        <div className="mr-8  relative cursor-pointer">
          {productToCart.length > 0 && (
            <div className="w-[10px] h-[10px] rounded-full bg-red-500 absolute -top-1 -right-1 animate-bounce"></div>
          )}

          <RiShoppingCartLine className="text-white text-2xl " />
        </div>
      </Link>
    </div>
  );
};

export default Header;
