import { atom } from "recoil";

const selectedCategoryAtom = atom({
  key: "selectedCategoryAtom", // unique ID (with respect to other atoms/selectors)
  default: "All", // default value (aka initial value)
});

export default selectedCategoryAtom;
