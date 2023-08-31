import React from "react";
import Image from "next/image";
//import images from "../Images/index";

export default ({
  setOpenProfile,
  setCompleteModal,
  setGetModel,
  setStartModal,
}) => {
  const serviceCards = [
    "Complete Shipment",
    "Get Shipment",
    "Start Shipment",
    "User Profile",
    "Shipments Count",
    "Send Shipment",
  ];

  const openBoxModel = (text) => {
    if (text === 1) {
      setCompleteModal(true);
    } else if (text === 2) {
      setGetModel(true);
    } else if (text === 3) {
      setStartModal(true);
    } else if (text === 4) {
      setOpenProfile(true);
    }
  };
  return (
    <div>
      <div className="m-10 grid grid-cols-3 gap-4 ">
        {serviceCards.map((el, index) => {
          return (
            <div key={index}>
              <div
                onClick={() => openBoxModel(index + 1)}
                className=" bg-slate-600 text-white font-bold rounded-lg text-center py-10 text-2xl"
              >
                {" "}
                <h1>{el}</h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

//
