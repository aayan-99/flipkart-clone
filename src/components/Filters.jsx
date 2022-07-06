import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import displayedProductsAtom from "../recoil/atom/displayedProductsAtom";
import selectedCategoryAtom from "../recoil/atom/selectedCategoryAtom";

const Filters = () => {
  // Global variables
  const [selectedCategory, setSelectedCategory] =
    useRecoilState(selectedCategoryAtom);
  const [selectedCategoryResponse, setSelectedCategoryResponse] =
    useRecoilState(displayedProductsAtom);

  // Local variables
  const [allCategories, setAllCategories] = useState();

  // All Categories call
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => {
        setAllCategories(json);
      });
  }, []);

  return (
    <div className="flex items-center justify-between flex-row-reverse gap-2 my-4 mx-1">
      <div>
        {allCategories && (
          <div
            className="p-2 rounded-md border cursor-pointer active:scale-95 transition text-xs text-gray-500 hover:text-gray-900"
            onClick={() => setSelectedCategory("All")}
          >
            clear filter
          </div>
        )}
      </div>

      <div className="flex items-center gap-2">
        {allCategories?.map((data, index) => (
          <div
            className="p-2 rounded-md border cursor-pointer active:scale-95 transition text-xs text-gray-500 hover:text-gray-900"
            key={index}
            onClick={() => setSelectedCategory(data)}
          >
            {data}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filters;
