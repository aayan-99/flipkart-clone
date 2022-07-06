import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import displayedProductsAtom from "../recoil/atom/displayedProductsAtom";
import PuffLoader from "react-spinners/PuffLoader";
import selectedCategoryAtom from "../recoil/atom/selectedCategoryAtom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import selectedProductAtom from "../recoil/atom/selectedProductAtom";

const AllProducts = () => {
  // Global variables
  const [allProducts, setAllProducts] = useRecoilState(displayedProductsAtom);
  const [selectedCategory, setSelectedCategory] =
    useRecoilState(selectedCategoryAtom);
  const [selectedProductId, setSelectedProductId] =
    useRecoilState(selectedProductAtom);

  // Get all products
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setAllProducts(json);
        console.log(json);
      });
  }, []);

  useEffect(() => {
    console.log("selectedProductId: ", selectedProductId);
  }, [selectedProductId]);

  let navigate = useNavigate();

  return (
    <div>
      {allProducts ? (
        <div className="grid grid-cols-2 gap-4  md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {allProducts
            ?.filter((filtered_value) => {
              if (selectedCategory === "All") {
                return filtered_value;
              } else if (
                filtered_value?.category
                  ?.toLowerCase()
                  ?.includes(selectedCategory.toLowerCase())
              ) {
                return {
                  filtered_value,
                };
              }
            })
            .map((data, index) => (
              <div
                key={data?.id}
                className="p-3 rounded-md cursor-pointer hover:shadow-md min-h-[300px] border w-[95%] mx-auto"
                onClick={() => {
                  setSelectedProductId(data?.id);
                  navigate("/productDetails");
                }}
              >
                <div className=" flex justify-center items-center w-full h-[60%] ">
                  <img
                    src={data?.image}
                    alt={data?.title}
                    className="w-[100px]"
                  />
                </div>

                <div className=" h-[40%] flex flex-col justify-between">
                  <h1 className="font-semibold text-sm mb-2">{data?.title}</h1>
                  <div className="flex justify-between items-end  ">
                    <p className="text-green-600">${data?.price}</p>
                    <p className="flex gap-1 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="#ff930f"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      {data?.rating?.rate}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      ) : (
        <div className="h-[100vh] w-full flex justify-center items-center">
          <PuffLoader color="#00ac69" size={50} />
        </div>
      )}
    </div>
  );
};

export default AllProducts;
