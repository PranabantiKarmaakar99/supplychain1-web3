const hre = require("hardhat");

async function main() {
  
   

 

    const contract = await hre.ethers.deployContract("Tracking", [], {});
  
    await contract.waitForDeployment();
  

 


  
   
  


    console.log("Address of Contract",contract.target);
}
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });