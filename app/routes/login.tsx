import React, { useState } from "react";
import { useNavigate } from "react-router";
import Login from "../components/LoginPage/LoginPage";
import Navbar from "~/components/Navbar/Navbar";

const login: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (email: string, password: string) => {
    console.log("Email:", email);
    console.log("Password:", password);

    //Navigate to cast/prod page
  };

  return (
    <>
      <Navbar />
      <Login handleSubmit={handleSubmit} />
    </>
  );
};

export default login;
