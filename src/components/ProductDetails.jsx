import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import selectedProductAtom from "../recoil/atom/selectedProductAtom";
import { HiArrowNarrowLeft } from "react-icons/hi";

const ProductDetails = () => {
  const [selectedProductId, setSelectedProductId] =
    useRecoilState(selectedProductAtom);

  const [productDetailResponse, setProductDetailResponse] = useState();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${selectedProductId}`)
      .then((res) => res.json())
      .then((json) => {
        setProductDetailResponse(json);
        console.log(json);
      });
  }, [selectedProductId]);

  return (
    <div>
      <div className="w-12 inline-block ml-4 mt-4">
        <Link className="text-xl font-bold underline" to="/">
          <HiArrowNarrowLeft />
        </Link>
      </div>
      <div className="h-[80vh] flex  justify-center items-center">
        <div className="flex flex-col sm:flex-row gap-10  w-[90%] md:w-[80%] lg:w-[70%]  mx-auto">
          {/*Product Image */}
          <img
            src={productDetailResponse?.image}
            alt={productDetailResponse?.title}
            className="w-[200px] md:w-[300px] mx-auto"
          />
          {/* Product details */}
          <div className="flex flex-col  justify-between">
            <div>
              <h1 className="text-xl md:text-2xl font-semibold">
                {productDetailResponse?.title}
              </h1>
              <p className="text-xs  md:text-base p-2 my-2 text-gray-600 border rounded-md w-fit">
                {productDetailResponse?.category}
              </p>
              <p className="text-xs mb-2 md:text-sm">
                {productDetailResponse?.description}
              </p>
            </div>

            <div className="flex justify-between items-end  ">
              <p className="text-2xl font-semibold">
                ${productDetailResponse?.price}
              </p>
              <p className="flex gap-1 items-end text-2xl font-semibold ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  viewBox="0 0 20 20"
                  fill="#ff930f"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                {productDetailResponse?.rating?.rate}
                <span className="text-lg text-gray-500">
                  ({productDetailResponse?.rating?.count} reviews)
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
