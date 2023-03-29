
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import ListProducts from "./pages/ListProducts";
import Product from "./pages/Product";
import ShoppingCart from "./pages/ShoppingCart";

import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer";
import Body from "./Layout/Body";

function App() {
  return (
    <Router>
     <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ListProducts />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/shopping/cart" element={<ShoppingCart />} />
          </Routes>
      <Body/>
      <Footer/>
    </Router>
  )
}

export default App;
