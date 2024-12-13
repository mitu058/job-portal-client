import React from "react";
import Navbar from "../components/Navbar";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";
const MainLayOut = () => {
  const navigation = useNavigation();
  const isNavigation = navigation.state === "loading";
  return (
    <div>
      <Toaster></Toaster>
      {isNavigation ? (
        <div className="flex justify-center items-center h-screen">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div>
          <Navbar></Navbar>
         <div>
         <Outlet></Outlet>
         </div>
          <Footer></Footer>
        </div>
      )}
    </div>
  );
};

export default MainLayOut;
