import React from "react";
import { useAuth } from "../Context/AuthContext";
import { Outlet, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import SideBar from "./SideBar";

const ProtectedRoute = ({ toggleChat, toggleNotification }) => {
  const { loggedIn } = useAuth();

  return loggedIn ? (
    <>
      <Navbar toggleChat={toggleChat} toggleNotification={toggleNotification} />
      <SideBar />
      <Outlet />
    </>
  ) : (
    <Navigate to={"/account/login"} />
  );
};

export default ProtectedRoute;
