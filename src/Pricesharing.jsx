import React, { useState } from "react";

const plans = {
  AC: [
    { type: "5 Sharing", price: 5000 },
    { type: "4 Sharing", price: 6000 },
    { type: "3 Sharing", price: 7000 },
    { type: "2 Sharing", price: 8500 },
    { type: "Single Room", price: 11000 },
  ],
  NonAC: [
    { type: "5 Sharing", price: 4000 },
    { type: "4 Sharing", price: 5000 },
    { type: "3 Sharing", price: 6000 },
    { type: "2 Sharing", price: 7500 },
    { type: "Single Room", price: 10000 },
  ],
};

const Pricesharing = () => {
  const [selectedType, setSelectedType] = useState(null); // AC or NonAC

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Room Sharing Plans</h2>

      {/* Step 1: AC / Non-AC selection with cards */}
      {!selectedType && (
        <div className="row justify-content-center ">
          <div className="col-md-4">
            <div
              className="card shadow text-center cursor-pointer"
              style={{ cursor: "pointer" }}
              onClick={() => setSelectedType("AC")}
            >
              <div className="card-body">
                <h3 className="card-title">AC Rooms</h3>
                <p className="card-text text-muted">Cool comfort with AC facilities</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mt-3 mt-md-0">
            <div
              className="card shadow text-center cursor-pointer"
              style={{ cursor: "pointer" }}
              onClick={() => setSelectedType("NonAC")}
            >
              <div className="card-body">
                <h3 className="card-title">Non-AC Rooms</h3>
                <p className="card-text text-muted">Budget-friendly shared options</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Step 2: Show plans after selection */}
      {selectedType && (
        <>
          <h4 className="text-center mt-5 mb-4">{selectedType} Room Plans</h4>
          <div className="row justify-content-center">
            {plans[selectedType].map((plan, index) => (
              <div className="col-md-4 col-lg-3 mb-4" key={index}>
                <div className="card h-100 shadow-sm border-0 text-center">
                  <div className="card-body">
                    <h5 className="card-title fw-bold">{plan.type}</h5>
                    <p className="card-text display-6 text-success">₹{plan.price}</p>
                    <p className="text-muted">Per Month</p>
                  </div>
                  {/* <div className="card-footer bg-white border-0">
                    <button className="btn btn-outline-primary w-100">Choose Plan</button>
                  </div> */}
                </div>
              </div>
            ))}
          </div>

          {/* Go back option */}
          <div className="text-center mt-4">
            <button className="btn btn-link" onClick={() => setSelectedType(null)}>
              ← Back to Room Type Selection
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Pricesharing;
