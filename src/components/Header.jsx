import React from "react";
import "../styles/header.css";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const urlChangeHandler = () => {
    navigate("products");
  };
  return (
    <header>
      <button onClick={urlChangeHandler}>change url</button>
    </header>
  );
}
