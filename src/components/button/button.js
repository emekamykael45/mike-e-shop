import React from "react";

import Loader from "../loader/loader";

import "./button.scss";

const Button = ({ text, loading, disabled, onClick }) => (
  <button
    type="submit"
    className={`button_component btn_blue ${loading && "loading"}`}
    onClick={onClick}
    disabled={disabled}
  >
    {loading ? <Loader /> : text}
  </button>
);

export default Button;
