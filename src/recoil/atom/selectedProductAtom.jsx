import { atom } from "recoil";

const selectedProductAtom = atom({
  key: "selectedProductAtom", // unique ID (with respect to other atoms/selectors)
  default: null, // default value (aka initial value)
});

export default selectedProductAtom;
