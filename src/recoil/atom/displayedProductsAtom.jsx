import { atom } from "recoil";

const displayedProductsAtom = atom({
    key: 'displayedProductsAtom', // unique ID (with respect to other atoms/selectors)
    default: null, // default value (aka initial value)
  });


  export default displayedProductsAtom