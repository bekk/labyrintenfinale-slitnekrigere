import React, { useState } from "react";
import { useNavigate } from "react-router";
import Login from "../components/LoginPage/LoginPage";
import Navbar from "~/components/Navbar/Navbar";
import Footer from "~/components/Footer/Footer";

const login: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (email: string, password: string) => {
    console.log("Email:", email);
    console.log("Password:", password);

    //Navigate to cast/prod page
    navigate("/cast/browse");
  };

  const handleProdSubmit = () => {
    //Navigate to producer page
    navigate("/producer/home");
  }

  return (
    <>
      <Navbar />
      <div>
        <Login handleSubmit={handleSubmit} handleProdSubmit={handleProdSubmit} />
      </div>
      <Footer />
    </>
  );
};

export default login;
