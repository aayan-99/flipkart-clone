import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import productToCartAtom from "../recoil/productToCartAtom";

const Cart = () => {
  // Global variables
  const [productToCart, setProductToCart] = useRecoilState(productToCartAtom);

  //   Local variables
  const [totalCost, setTotalCost] = useState(0);

  //   truncating description if it contains more then desired no. of characters
  function truncate(string, n) {
    return (
      <span>
        {string?.length > n && (
          <span>
            {string.substr(0, n - 1)}{" "}
            <span className="text-[10px] text-gray-500 cursor-pointer">
              {" "}
              ...
            </span>
          </span>
        )}
        {string?.length <= n && <span>{string}</span>}
      </span>
    );
  }

  useEffect(() => {
    if (productToCart?.length > 0) {
      //   for (let i = 0; i <= productToCart?.length; i++) {
      //     const a = productToCart[i]?.price + totalCost;
      //     setTotalCost(a);
      //     console.log(a);
      //   }
      let a;
      for (let i = 0; i < productToCart?.length; i++) {
        a = a + parseInt(productToCart[i]?.price);
      }
      setTotalCost(a);
    }
  }, [productToCart]);

  useEffect(() => {
    console.log("totalCost:");
    console.log(totalCost);
  }, [totalCost]);

  return (
    <div className="min-h-[80vh]">
      {productToCart?.length === 0 ? (
        <div className="h-[90vh] border border-red-500 w-full flex flex-col justify-center items-center">
          <div className="text-center text-gray-400 text-2xl mb-2">
            Your cart is empty
          </div>
          <div className="text-center text-blue-600 underline">
            <Link to="/">Continue shopping</Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-[150px__150px_80px] border-b gap-5 w-fit   mx-auto mt-5">
            <div className="col-span-2 ">Product</div>
            <div className="text-center">Cost</div>
          </div>

          <div className="w-fit  mx-auto h-[500px] overflow-y-scroll">
            {productToCart?.map((data, index) => (
              <div
                key={index}
                className="grid grid-cols-[150px__150px_80px] gap-5 place-items-center w-fit  min-h-[200px]    mx-auto"
              >
                <div>
                  <img
                    src={data?.image}
                    alt={data?.title}
                    className="w-[100px] "
                  />
                </div>
                <div>
                  <div className="font-semibold text-sm">{data?.title}</div>
                  <div className="text-xs text-gray-400">
                    {truncate(data?.description, 80)}
                  </div>
                </div>
                <div>${data?.price}</div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-[150px__150px_80px] gap-5 w-fit   mx-auto mt-5">
            <div className="col-span-2 font-semibold text-2xl">Total Cost:</div>
            <div className="text-center font-semibold text-2xl">$1024</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
