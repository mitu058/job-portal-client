import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { div } from "motion/react-client";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const [user, loading] = useContext(AuthContext);

  if (loading) {
    <div className="flex min-h-screen justify-center items-center">
      <span className="loading loading-spinner loading-lg"></span>
    </div>;
  }
  if (user && user?.email) {
    return children;
  }

  return <Navigate  state={location.pathname} to='/login' ></Navigate>
};

export default PrivateRoute;
