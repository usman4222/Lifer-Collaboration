import "./App.css";
import SideBar from "./Components/SideBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Screens/Home";
import Navbar from "./Components/Navbar";
import OrderHistory from "./Screens/OrderHistory";
import Orders from "./Screens/Orders";
import Help from "./Screens/Help";
import Chat from "./Screens/Chat";
function App() {
  return (
    <>
      <SideBar />
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<OrderHistory />} path="/order-history" />
        <Route element={<Orders />} path="/orders" />
        <Route element={<Help />} path="/help" />
        <Route element={<Chat />} path="/chat" />
      </Routes>
    </>
  );
}

export default App;
