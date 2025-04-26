import React, { useState } from "react";
import { useNavigate } from "react-router";
import Login from "../components/LoginPage/LoginPage";

const producerLogin: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (email: string, password: string) => {
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("loginType", "producer");

    navigate("/producer-main");
  };
  
  return (
    <>
    <Login handleSubmit={handleSubmit} />
    </>
  );
};


export default producerLogin;
