import React, { useContext, useEffect, useState } from "react";

import {
  Table,
  Form,
  Services,
  Profile,
  StartShipment,
  GetShipment,
  CompleteShipment,
} from "../components/Index";

import { TrackingContext } from "../context/tracking5.jsx";


const index = () => {
  const {
    currentUser,
    createShipment,
    getAllShipments,
    
    completeShipment,
    getShipment,
    startShipment,
   
    getShipmentsCount,
    
  } = useContext(TrackingContext);

  

  //STATE VARIABLE

  const [createShipmentModel, setCreateShipmentModel] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [startModel, setStartModel] = useState(false);
  const [completeModel, setCompleteModel] = useState(false);
  const [getModel, setGetModel] = useState(false);

  //DATA STATE Variable
  const [allShipmentsData, setAllShipmentsData] = useState("");

  useEffect(() => {
    const getCampaignData = getAllShipments();

    return async () => {
      const allData = await getCampaignData;
      setAllShipmentsData(allData);
    };
  }, []);

  return (
    <div>
      <Services
        setOpenProfile={setOpenProfile}
        setCompleteModel={setCompleteModel}
        setGetModel={setGetModel}
        setStartModel={setStartModel}
      />

      {/* <Table
        setCreateShipmentModel={setCreateShipmentModel}
        allShipmentsData={allShipmentsData}
      /> */}

      {/* <Form
       
        createShipment={createShipment}
        createShipmentModel={createShipmentModel}
        setCreateShipmentModel={setCreateShipmentModel}
      /> */}

      <Profile
        openProfile={openProfile}
        setOpenProfile={setOpenProfile}
        currentUser={currentUser}
        getShipmentsCount={getShipmentsCount}
      />

      <CompleteShipment
        completeModel={completeModel}
        setCompleteModel={setCompleteModel}
        completeShipment={completeShipment}
      />

      <GetShipment
        getModel={getModel}
        setGetModel={setGetModel}
        getShipment={getShipment}
      />

      <StartShipment
        getModel={getModel}
        setGetModel={setGetModel}
        getShipment={getShipment}
      />
    </div>
  );
};

export default index;
