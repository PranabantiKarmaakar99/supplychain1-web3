
import React,{useContext,useEffect,useState} from 'react';

import {
Table,
Form,
Services,
Profile,
StartShipment,
GetShipment,
CompleteShipment

} from "../components/Index";

import {TrackingContext} from "../context/tracking";






const index = () => {
const {
    currentUser,
    createShipment,
    startShipment,
    completeShipment,
    getAllShipments,
    getShipmentsCount,
    getShipment
} = useContext(TrackingContext);

//STATE VARIABLE

const [createShipmentModel,setCreateShipmentModel ] = useState(false);
const [openProfile,setOpenProfile ] = useState(false);
const [startModal,setStartModal ] = useState(false);
const [completeModal,setCompleteModal ] = useState(false);
const [getModel,setGetModel ] = useState(false);

//DATA STATE Variable
const [allShipmentsData,setAllShipmentsData ] = useState("");

useEffect(()=>{
const getCampaignData = getAllShipments();

return async()=>{
   const allData = await getCampaignData;
   setAllShipmentsData(allData);

}


},[]);




  return (
    <div>
   <Services
   setOpenProfile={setOpenProfile}
   setCompleteModal={setCompleteModal}
   setGetModel={setGetModel}
   setStartModal={setStartModal}
  />

<Table
 
   setCreateShipmentModel={setCreateShipmentModel}
   allShipmentsData={allShipmentsData}

  
  />

<Form
 
 setCreateShipmentModel={setCreateShipmentModel}
 createShipment={ createShipment}
 createShipmentModel={ createShipmentModel}
/>

<Profile
 
 openProfile={openProfile}
 setOpenProfile ={setOpenProfile}
 currentUser={currentUser}
 getShipmentsCount={getShipmentsCount}
 
/>

<CompleteShipment
 
 completeModal={completeModal}
 setCompleteModal ={setCompleteModal}
 completeShipment ={completeShipment}
 
/>

< GetShipment
 
 getModel={getModel}
 setGetModel ={setGetModel}
 getShipment ={getShipment}
 
/>

<StartShipment
 
 getModel={getModel}
 setGetModel ={setGetModel}
 getShipment ={getShipment}
 
/>

 </div>
  )
}

export default index
