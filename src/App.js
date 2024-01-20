import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./screens/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./screens/Login";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css";
import Signup from "./screens/Signup.js";
import { CartProvider } from "./components/ContextReducer.js";
import MyOrder from "./screens/MyOrder.js";

function App() {
  return (

    <CartProvider><BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/createuser" element={<Signup />}></Route>
        <Route path="/myOrder" element={<MyOrder />}></Route>

      </Routes>
    </div>
  </BrowserRouter></CartProvider>
    
  );
}

export default App;
