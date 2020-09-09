import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <header style={headerStyle}>
        <h1>
          <Link style={{ textDecoration: "inherit", color: "inherit" }} to="/">
            Movie Search
          </Link>
        </h1>
      </header>
    </div>
  );
}

const headerStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px",
};

export default Header;
