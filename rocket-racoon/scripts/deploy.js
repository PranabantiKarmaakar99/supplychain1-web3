// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const { ethers, upgrades, network } = require("hardhat");
//const { ethers } = require("ethers");



// async function getBalances(address){

//   const balanceBigInt = await hre.ethers.provider.getBalance(address);
 
//   return hre.ethers.formatEther(balanceBigInt);
  
//   }
  
//   async function consoleBalances(addresses) {
//   let counter = 0;
//   for (const address of addresses) {
  
//      console.log (`Address ${counter} balance:` , await getBalances(address))
//      counter++

//   };
// }

// //async function consoleLists(lists) {
  
//   // for (const shipment of lists) {
   
//   //   const timestamp = list.Timestamp;
//   //   const name = list.Name;
//   //   const sender = list.Sender;
//   //   const message = list.Message;



//   //   console.log(`At ${timestamp},name: ${name},address: ${sender},message: ${message}`)


//   // }}

//   const consoleLists = async(lists) => {lists.map((shipment)=>{
//     const sender = shipment.sender;
//     const receiver= shipment.receiver;
//     const price = ethers.formatEther(shipment.price.toString());
//     const pickupTime = shipment.pickupTime.toString();
//     const deliveryTime = shipment.deliveryTime.toString();
//     const distance = shipment.distance.toString();
//     const isPaid= shipment.isPaid;
//     const status= shipment.status;

//     console.log(sender,receiver,price,pickupTime,deliveryTime,distance,isPaid,status)
//   });}


async function main() {
 

  // const lockedAmount = hre.ethers.parseEther("0.001");
  // const [owner,from1,from2,from3] = await ethers.getSigners();

  const contract = await hre.ethers.deployContract("Tracking", [], {});

  await contract.waitForDeployment();

  console.log(
    ` Tracking deployed to ${contract.target}`
  );

//   const addresses = [owner.address,from1.address,from2.address,from3.address];
//   console.log ("Before buying chai");
//   await consoleBalances(addresses);


//    const amount = hre.ethers.parseEther("1")

//    console.log (amount);

//    const _receiver = from1.address;
// const _pickupTime = 1234567890;
// const _distance = 100;
// //const _price =  hre.ethers.utils.parseEther("1"); // Convert 1 Ether to BigNumber

// // Call shipmentCreate function
// await contract.connect(from1).shipmentCreate(_receiver, _pickupTime, _distance, amount);

// console.log ("this is done");

//   //  await contract.connect(owner).shipmentCreate(from1.address, 1234567890, 100, amount);
//   //  await contract.connect(from2).shipmentCreate("from2","6",amount);
//   //  await contract.connect(from3).shipmentCreate("from3","9",amount);
    


//    console.log ("After buying chai");
//    await consoleBalances(addresses);

//    const lists = await contract.getAllTransactions();
//    const List = consoleLists(lists);
//   // 
  



}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
