
import { useState,useEffect,useContext } from "react";
import {ethers} from "ethers";


import {
    Table,
    Form,
    Services,
    Profile,
    StartShipment,
    GetShipment,
    CompleteShipment
    
    } from "../components/Index";

    import tracking from "../context/tracking.json";
    import {TrackingContext} from "../context/tracking2.jsx";



function App() {
//   const {
//     state,
//     currentUser,
//     createShipment,
//     startShipment,
//     completeShipment,
//     getAllShipments,
//     getShipmentsCount,
//     getShipment
// } = useContext(TrackingContext);

   const [state,setState] = useState({
    provider:null,
    signer:null,
    contract:null


   })
  //  const [isFormOpen, setIsFormOpen] = useState(false);

  //  const handleOpenForm = () => {
  //    setIsFormOpen(true);
  //  };
 
  //  const handleCloseForm = () => {
  //    setIsFormOpen(false);
  //  };

   useEffect (()=>{

    const connectWallet =async()=>{

   const contractAddress = "0x93884939D1109Ca4cD209fcaBBc37E5f17B991c2";
   const contractAbi = tracking.abi;

   try {

    const {ethereum}= window;
  

   if (ethereum) {


    // const web3 = new Web3(window.ethereum) 
    const account = await ethereum.request({method:"eth_requestAccounts",})



  //  console.log(contract)


   }
  

   const provider = new ethers.BrowserProvider(window.ethereum);
   const signer = await provider.getSigner();
   const contract = new ethers.Contract(contractAddress,contractAbi,signer)
 
   setState({provider,signer,contract});
  
  }catch(error) {

    console.log(error)
  }

}

connectWallet();
console.log(state)



   },[])

 

   

  return (
   <div>
    <Services state={state} /> 
    <Table state={state}
          //handleOpenForm={handleOpenForm} 
            />
    <Form state={state}
          //handleCloseForm={handleCloseForm}
          setCreateShipmentModel={setCreateShipmentModel}
          createShipment={ createShipment}
          createShipmentModel={ createShipmentModel}
          />
    <Profile state={state} />
    <CompleteShipment state={state} />
    <GetShipment state={state} />  
    <StartShipment state={state}/>
   </div>
  )
}

export default App
