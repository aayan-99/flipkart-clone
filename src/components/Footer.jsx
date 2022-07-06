import React from "react";

const Footer = () => {
  return (
    <div className="mt-8 bg-blue-600 flex justify-evenly items-start pt-[50px] h-[30vh]">
      <div>
        <p className="text-lg font-semibold text-gray-900">About</p>
        <li className="no-underline list-none text-white">Contact Us</li>
        <li className="no-underline list-none text-white">About Us</li>
        <li className="no-underline list-none text-white">Carrers</li>
        <li className="no-underline list-none text-white">Flipkart Stories</li>
        <li className="no-underline list-none text-white">Press</li>
      </div>
      <div>
        <p className="text-lg font-semibold text-gray-900">Help</p>
        <li className="no-underline list-none text-white">Payment</li>
        <li className="no-underline list-none text-white">Shipping</li>
        <li className="no-underline list-none text-white">
          Cancelation and Returns
        </li>
        <li className="no-underline list-none text-white">FAQ</li>
        <li className="no-underline list-none text-white">
          Report Infringement
        </li>
      </div>
      <div>
        <p className="text-lg font-semibold text-gray-900">Policy</p>
        <li className="no-underline list-none text-white">Return Policy</li>
        <li className="no-underline list-none text-white">Terms of Use</li>
        <li className="no-underline list-none text-white">Security</li>
        <li className="no-underline list-none text-white">Privacy</li>
        <li className="no-underline list-none text-white">Sitemap</li>
      </div>
      <div>
        <p className="text-lg font-semibold text-gray-900">Social</p>
        <li className="no-underline list-none text-white">Facebook</li>
        <li className="no-underline list-none text-white">Twitter</li>
        <li className="no-underline list-none text-white">Youtube</li>
      </div>
    </div>
  );
};

export default Footer;
