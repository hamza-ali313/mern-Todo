import React, { Component, useEffect } from "react";
import ReactDOM, { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import Register from "./pages/Register";
import Login from "./pages/Login";
// import { Container, Row, Col } from "react-bootstrap";

// NEW
function Main() {
  return (
    <BrowserRouter  basename='/'>
      <header className="pageheader">
      </header>
      {/* <App /> */}
      <Routes>
        <Route path="/" element={<Register/>} className="ppp" />
        <Route path="/todoapp" element={<App/>} className="ppp" />
        <Route path="/Login" element={<Login/>} className="ppp" />
        {/* <Route path="/aboutus" element={<Aboutus />} /> */}
      </Routes>
      <footer>
      </footer>
    </BrowserRouter>
  );
}
ReactDOM.render(<Main />, document.getElementById("root"));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
