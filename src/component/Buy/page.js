import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Buy.css"; // Optional: Add for custom styles if needed
import NavbarComponent from "../Navbar/Navbar";

function Buy() {
  const [selectedCity, setSelectedCity] = useState("");
  const [locality, setLocality] = useState("");
  const [selectedPrice, setSelectedPrice] = useState([]);
  const [selectedType, setSelectedType] = useState([]);
  const [properties, setProperties] = useState([]);

  const cities = [
    "Lucknow",
    "Delhi",
    "Mumbai",
    "Bangalore",
    "Chennai",
    "Kolkata",
    "Hyderabad",
    "Pune",
    "Jaipur",
    "Ahmedabad",
  ];

  const handlePriceChange = (event) => {
    const { value, checked } = event.target;
    setSelectedPrice((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  const handleTypeChange = (event) => {
    const { value, checked } = event.target;
    setSelectedType((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  const handleFilter = () => {
    const mockProperties = [
      {
        id: 1,
        description: "Beautiful Apartment in Mumbai",
        city: "Mumbai",
        price: "₹50L",
        propertyType: "Apartment",
        area: "1200 sqft",
      },
      {
        id: 2,
        description: "Spacious Villa in Delhi",
        city: "Delhi",
        price: "₹1Cr",
        propertyType: "Villa",
        area: "2400 sqft",
      },
      {
        id: 3,
        description: "Affordable Plot in Bangalore",
        city: "Bangalore",
        price: "₹25L",
        propertyType: "Plot",
        area: "1500 sqft",
      },
    ];

    const filteredProperties = mockProperties.filter((property) => {
      const cityMatch = selectedCity ? property.city === selectedCity : true;
      const localityMatch = locality
        ? property.description.includes(locality)
        : true;
      const priceMatch = selectedPrice.length
        ? selectedPrice.some((range) => {
            if (range === "Below ₹25L") return property.price === "₹25L";
            if (range === "₹25L - ₹50L") return property.price === "₹50L";
            if (range === "₹50L - ₹1Cr") return property.price === "₹1Cr";
            return false;
          })
        : true;
      const typeMatch = selectedType.length
        ? selectedType.includes(property.propertyType)
        : true;

      return cityMatch && localityMatch && priceMatch && typeMatch;
    });

    setProperties(filteredProperties);
  };

  useEffect(() => {
    const mockProperties = [
      {
        id: 1,
        description: "Beautiful Apartment in Mumbai",
        city: "Mumbai",
        price: "₹50L",
        propertyType: "Apartment",
        area: "1200 sqft",
      },
      {
        id: 2,
        description: "Spacious Villa in Delhi",
        city: "Delhi",
        price: "₹1Cr",
        propertyType: "Villa",
        area: "2400 sqft",
      },
      {
        id: 3,
        description: "Affordable Plot in Bangalore",
        city: "Bangalore",
        price: "₹25L",
        propertyType: "Plot",
        area: "1500 sqft",
      },
    ];
    setProperties(mockProperties);
  }, []);

  return (
    <div className="container-fluid my-4">
      <NavbarComponent/>
      <div className="row">
        <div className="col-md-3">
          <div className="filters">
            <h5 className="mb-3">Filters</h5>
            <div className="mb-4">
              <h6>City</h6>
              <select
                className="form-select"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
              >
                <option value="">Select City</option>
                {cities.map((city, index) => (
                  <option key={index} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <h6>Locality</h6>
              <input
                type="text"
                className="form-control"
                value={locality}
                onChange={(e) => setLocality(e.target.value)}
                placeholder="Enter Locality"
              />
            </div>
            <div className="mb-4">
              <h6>Price</h6>
              <div className="d-flex flex-column">
                <input
                  type="checkbox"
                  id="price1"
                  value="Below ₹25L"
                  onChange={handlePriceChange}
                />
                <label htmlFor="price1">Below ₹25L</label>
                <input
                  type="checkbox"
                  id="price2"
                  value="₹25L - ₹50L"
                  onChange={handlePriceChange}
                />
                <label htmlFor="price2">₹25L - ₹50L</label>
                <input
                  type="checkbox"
                  id="price3"
                  value="₹50L - ₹1Cr"
                  onChange={handlePriceChange}
                />
                <label htmlFor="price3">₹50L - ₹1Cr</label>
                <input
                  type="checkbox"
                  id="price4"
                  value="Above ₹1Cr"
                  onChange={handlePriceChange}
                />
                <label htmlFor="price4">Above ₹1Cr</label>
              </div>
            </div>
            <div className="mb-4">
              <h6>Property Type</h6>
              <div className="d-flex flex-column">
                <input
                  type="checkbox"
                  id="type1"
                  value="Plot"
                  onChange={handleTypeChange}
                />
                <label htmlFor="type1">Plot</label>
                <input
                  type="checkbox"
                  id="type2"
                  value="Apartment"
                  onChange={handleTypeChange}
                />
                <label htmlFor="type2">Apartment</label>
                <input
                  type="checkbox"
                  id="type3"
                  value="Villa"
                  onChange={handleTypeChange}
                />
                <label htmlFor="type3">Villa</label>
              </div>
            </div>
            <button className="btn btn-primary w-100" onClick={handleFilter}>
              Apply Filters
            </button>
          </div>
        </div>

        <div className="col-md-9">
          <div className="row">
            <h5 className="mb-3">Properties for Buy</h5>
            {properties.map((property) => (
              <div key={property.id} className="col-md-4 mb-4">
                <div className="card">
                  <img
                    src="https://via.placeholder.com/150"
                    className="card-img-top"
                    alt="Property"
                  />
                  <div className="card-body">
                    <h6 className="card-title">{property.description}</h6>
                    <p className="card-text mb-1">City: {property.city}</p>
                    <p className="card-text mb-1">Price: {property.price}</p>
                    <p className="card-text">Area: {property.area}</p>
                    <button className="btn btn-primary">Contact Agent</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Buy;
