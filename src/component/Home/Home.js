import React from "react";

import NavbarComponent from "../Navbar/Navbar";
import PropertyList from "../../PropertyList/PropertyList";


function Home  () {
  return (
    <><NavbarComponent /><div className="container my-5">
          <h1 className="text-center">Real Estate Listings</h1>
          <PropertyList />
      </div></>
   
  );
}

export default Home;
