import React from "react";
import ReactDom from "react-dom/client";
import App from "./pages/app";
import "./css/style.css";
import "./font_awesome/css/all.min.css";


const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App></App>);