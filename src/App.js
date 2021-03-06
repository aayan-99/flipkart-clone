import "./App.css";
import AllProducts from "./components/AllProducts";
import Filters from "./components/Filters";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Home from "./components/Home.jsx";
import ProductDetails from "./components/ProductDetails";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route
          exact
          path="/productDetails"
          element={<ProductDetails />}
        ></Route>
        <Route exact path="/cart" element={<Cart />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
