import React from "react";

const properties = [
    { id: 1, title: "Apartment", price: "$500,000", location: "New York", image: "https://via.placeholder.com/300" },
    { id: 2, title: "Villa", price: "$1,200,000", location: "Los Angeles", image: "https://via.placeholder.com/300" },
];

function PropertyList() {
    return (
        <div className="row">
            {properties.map((property) => (
                <div key={property.id} className="col-md-4">
                    <div className="card">
                        <img src={property.image} className="card-img-top" alt={property.title} />
                        <div className="card-body">
                            <h5>{property.title}</h5>
                            <p>{property.price}</p>
                            <p>{property.location}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default PropertyList;
