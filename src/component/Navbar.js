import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="navbarContainer">
        <div className="toggle">
          <i class="fas fa-align-justify"></i>
        </div>
        <a href="/" className="logo">
          BookPod <span className="blue">.</span>
        </a>
        <ul className="linkContainer">
          {["Home", "Categories", "podcasts"].map((value) => (
            <li key={value}>
              <a href="/">{value}</a>
            </li>
          ))}
        </ul>
        <div className="searchContainer">
          <i class="fas fa-search searchIcon"></i>
          <input type="text" placeholder="search..." className="searchInput" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
