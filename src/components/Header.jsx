import React from "react";
import logo from "../assets/logos/Logo-1.png";

const Header = () => {
  return (
    <div className=" h-[4.5rem] flex items-center justify-between bg-blue-600">
      <div className="ml-8 ">
        <p className="font-semibold italic text-white text-3xl">Flipkart</p>
        {/* <span>{logo}</span> */}
      </div>
      <div className="mr-8">
        <p className="font-semibold text-yellow-300 text-2xl">Sale Live</p>
      </div>
    </div>
  );
};

export default Header;
