import { Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import NavBar from "./components/NavBar";
import ProductListing from "./components/pages/ProductListing";
import ProductDetails from "./components/pages/ProductDetails";
import AddProduct from "./components/pages/AddProduct";
import EditProduct from "./components/pages/EditProduct";
import Delete from "./components/Delete";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/delete-product/:id" element={<Delete />} />
        <Route path="/edit-product/:id" element={<EditProduct />} />
        {/* Add more routes here */}
      </Routes>
    </>
  );
}

export default App;
