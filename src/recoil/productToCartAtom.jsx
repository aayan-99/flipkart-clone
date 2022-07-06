import { atom } from "recoil";

const productToCartAtom = atom({
  key: "productToCartAtom", // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});

export default productToCartAtom;
