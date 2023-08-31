
import React from "react";


import {useState,useEffect} from "react";

import {ethers} from "ethers";
import tracking from "../context/tracking.json";

const contractAddress = "0x93884939D1109Ca4cD209fcaBBc37E5f17B991c2";
  const contractAbi = tracking.abi;

export const TrackingContext = React.createContext();

export const TrackingProvider = ({children}) => {
 
  const [state,setState] = useState({
    provider:null,
    signer:null,
    contract:null


   });
   const [currentUser,setCurrentUser] = useState("");
   


const checkIfWalletConnected= async() => {


  try {
      if(!ethereum) return "install metamask"
      const accounts = await window.ethereum.request ({
         method: "eth_accounts"
      });

      if (accounts.length) {
           setCurrentUser(accounts[0]);

      } else {
        return "no account"
      }



  
  
  }catch(error) {
      console.log("Wallet not connected",error)

   }





}

const connectWallet =async()=>{

  

  try {

   const {ethereum}= window;
 

  if (ethereum) {


   // const web3 = new Web3(window.ethereum) 
   const accounts = await ethereum.request({method:"eth_requestAccounts",})
   setCurrentUser(accounts[0]);



  //console.log(contract)


  }
 

  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  const contract = new ethers.Contract(contractAddress,contractAbi,signer)

  setState({provider,signer,contract});
 
 }catch(error) {

   console.log(error)
 }

}

useEffect (()=>{
  checkIfWalletConnected();
},[])


return (

  <TrackingContext.Provider 

  value ={{
       
      
      connectWallet,
      currentUser,
      state
       }}

  > {children} </TrackingContext.Provider>


)
}

// connectWallet();



 


