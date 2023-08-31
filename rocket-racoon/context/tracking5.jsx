import React from "react";

import { useState, useEffect,useContext } from "react";
import Web3Modal from "web3modal";
import { ethers } from "ethers";
// import {hardhat} from "hardhat";

//INTERNAL IMPORT

import tracking from "./tracking.json";
const ContractAddress = "0x93884939D1109Ca4cD209fcaBBc37E5f17B991c2";
const ContractABI = tracking.abi;
//const contract = new ethers.Contract(ContractAddress, ContractABI, signer);

export const TrackingContext = React.createContext();

export const TrackingProvider = ({ children }) => {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });
  const DappName = "Product Tracking Dapp";
  const [currentUser, setCurrentUser] = useState("");

  const createShipment = async (items) => {
    console.log(items);
    const { receiver, pickupTime, distance, price } = items;

    try {
      // const { ethereum } = window;

      // if (ethereum) {
      //   const accounts = await ethereum.request({
      //     method: "eth_requestAccounts",
      //   });
      //   // setCurrentUser(accounts[0]);
      // }

      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(
        ContractAddress,
        ContractABI,
        signer
      );

      setState({ provider, signer, contract });
      const createItem = await contract.shipmentCreate(
        receiver,
        new Date(pickupTime).getTime(),
        pickupTime,
        distance,
        ethers.utils.parseUnits(price, 18),
        {
          value: ethers.utils.parseUnits(price, 18),
        }
      );
      await createItem.wait();
      console.log(createItem);
    } catch (error) {
      console.log("Error identified, shipment cannot be created", error);
    }
  };

  const getAllShipments = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });
        // setCurrentUser(accounts[0]);
      }

      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(
        ContractAddress,
        ContractABI,
        signer
      );

      setState({ provider, signer, contract });

      console.log("Contract instance:", contract);

      const shipments = await contract.getAllTransactions();
      


      console.log(shipments);
      await shipments.wait();
      console.log(shipments);
      const allshipments = shipments.map((shipment) => ({
        sender: shipment.sender,
        receiver: shipment.receiver,
        price: ethers.formatEther(shipment.price.toString()),
        pickupTime: shipment.pickupTime.toString(),
        deliveryTime: shipment.deliveryTime.String(),
        distance: shipment.distance.toString(),
        isPaid: shipment.isPaid,
        status: shipment.status,
      }));

      return allshipments;
    } catch (error) {
      console.log("All Shipments cannot be accessed", error);
    }
  };

  const getShipmentsCount = async () => {
    try {
      if (!window.ethereum) return "Install Metamask";
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });

      const provider = new ethers.providers.JsonRpcProvider();
      const contract = fetchContract(provider);
      const shipmentsCount = await contract.getShipmentsCount(accounts[0]);
      return shipmentsCount.toNumber();
    } catch (error) {
      console.log("Sorry, Shipment account cannot be accessed.", error);
    }
  };

  const completeShipment = async (completeShip) => {
    console.log(completeShip);

    const { receiver, index } = completeShip;

    try {
      if (!window.ethereum) return "Install Metamask";
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });

      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect();

      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();
      const contract = fetchContract(signer);

      const transaction = await contract.completeShipment(
        accounts[0],
        receiver,
        index,
        {
          gasLimit: 300000,
        }
      );

      transaction.wait();
      console.log(transaction);
    } catch (error) {
      console.log("Shipment cannot be completed", error);
    }
  };

  const getShipment = async (index) => {
    console.log(index);

    try {
      if (!window.ethereum) return "Install Metamask";
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });
      const provider = new ethers.providers.JsonRpcProvider();
      const contract = fetchContract(provider);

      const shipment = await contract.getShipment(accounts[0], index * 1);

      const singleShipment = {
        sender: shipment.sender,
        receiver: shipment.receiver,
        price: ethers.utils.formatEther(shipment.price.toString()),
        pickupTime: shipment.pickupTime.toNumber(),
        deliveryTime: shipment.deliveryTime.toNumber(),
        distance: shipment.distance.toNumber(),
        price: ethers.utils.formatEther(shipment.price.toString()),
        isPaid: shipment.isPaid,
        status: shipment.status,
      };

      return singleShipment;
    } catch (error) {
      console.log("No Shipment Present", error);
    }
  };

  const startShipment = async (getProduct) => {
    console.log(getProduct);
    const { receiver, index } = getProduct;

    try {
      if (!window.ethereum) return "Install Metamask";
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });
      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();
      const contract = fetchContract(signer);

      const shipment = await contract.getShipment(
        accounts[0],
        receiver,
        index * 1
      );

      shipment.wait();
      console.log(shipment);
    } catch (error) {
      console.log("No Shipment Started", error);
    }
  };
    //---CHECK  WALLET CONNECTED

    const checkIfWalletConnected = async () => {
      try {
        if (!window.ethereum) return "Install Metamask";
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
  
        if (accounts.length) {
          setCurrentUser(accounts[0]);
        } else {
          return "no account";
        }
      } catch (error) {
        console.log("Wallet not connected", error);
      }
    };
  
    //CONNECT WALLET
  
    const connectWallet = async () => {
      try {
        if (!window.ethereum) return "Install Metamask";
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        
        setCurrentUser(accounts[0]);
        console.log(currentUser)
      } catch (error) {
        console.log("Something went wrong", error);
      }
    };
  
    useEffect(() => {
      checkIfWalletConnected();
    }, []);

    return (
      <TrackingContext.Provider
        value={{
          checkIfWalletConnected,
          currentUser,
          createShipment,
          getAllShipments,
          getShipmentsCount,
          completeShipment,
          getShipment,
          startShipment,
          connectWallet,
          DappName
         
        }}
      >
        
        {children}
      </TrackingContext.Provider>
    );
};
