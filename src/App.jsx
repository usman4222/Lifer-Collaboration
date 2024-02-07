import "./App.css";
import SideBar from "./Components/SideBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Screens/Home";
import Navbar from "./Components/Navbar";
import OrderHistory from "./Screens/OrderHistory";
import Orders from "./Screens/Orders";
function App() {
  return (
    <>
      <SideBar />
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<OrderHistory />} path="/order-history" />
        <Route element={<Orders />} path="/orders" />
      </Routes>
    </>
  );
}

export default App;
