import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUid } from "../store/authSlice.js";

const PrivateRoute = ({ children, redirect, isLogined }) => {
  console.log(isLogined);
  if (!isLogined) {
    alert("로그인이 필요한 페이지입니다.");
    return <Navigate to={redirect} replace />;
  }
  return children;
};

const PublicRoute = ({ children, redirect }) => {
  const token = localStorage.getItem("access-token");
  const isLogined = !!token;
  if (isLogined) {
    return <Navigate to={redirect} replace />;
  }
  return children;
};

export { PrivateRoute, PublicRoute };
