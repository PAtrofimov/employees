import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => (
  <header className="not-found">
    <div className="not-found-error">404 Not Found </div>
    {"Go to "}
    <NavLink to="/employees">Home</NavLink>
    {" page"}
  </header>
);

export default NotFound;
