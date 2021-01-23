import React from "react";
import "./loader.css";
import preloader from "./2.svg";

const Loader = () => {
    return <div className="loader"><img src={preloader} alt="preloader" /></div>;
};

export default Loader;
