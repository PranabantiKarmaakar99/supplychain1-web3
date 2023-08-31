// import React,{useState} from 'react';
// import {ethers} from "ethers";



// export default({
//  state,
//  createShipmentModel
 
// })=> {



//   const createItem = async(e) =>{

//     e.preventDefault();

//     const {contract} =state;
//     console.log("contract:",contract);
//     const receiver = document.querySelector("#receiver").value;
//     const pickupTime = document.querySelector("#pickupTime").value;
//     const distance = document.querySelector("#distance").value;
//     const price = document.querySelector("#price").value;
//     //const pickupTime = document.querySelector("#message").value;
//     console.log(receiver,pickupTime,distance,price,contract);

//     const amount ={value: ethers.parseEther("0.01")};
//     console.log("amount",amount)
//     const transaction = await contract.shipmentCreate(receiver,pickupTime,distance,price);
//     console.log("I am not here yet")
//     await transaction.wait();
//     console.log("transaction is done");



// }
  
//   // const createItem = async() =>{
//   //   try{

      
//   //     await createShipment(shipment)
//   //   }catch (error) {
//   //     console.log("Something went wrong while creating item",error)
//   //   }

//   //   try {
//   //     const parsedPrice = parseFloat(shipment.price);
      
//   //     if (isNaN(parsedPrice)) {
//   //       console.log("Invalid price value");
//   //       return;
//   //     }
  
//   //     await createShipment({
//   //       receiver: shipment.receiver,
//   //       pickUpTime: new Date(shipment.pickUpTime).getTime(),
//   //       distance: shipment.distance,
//   //       price: ethers.utils.parseUnits(parsedPrice.toString(), 18),
//   //     });
  
//   //     // Rest of your code...
//   //   } catch (error) {
//   //     console.log("Something went wrong while creating item", error);
//   //   }
//   // }

//   return createShipmentModel?  (
//     <div className='fixed inset-0 z-10 overflow-y-auto'>
//       <div className='fixed inset-0 w-full h-full bg-bloack opacity-40'
    
//       > </div>
//       <div className='flex items-center min-h-screen px-4 py-8'>
//         <div className='relative w-full max-w-lg mx-auto bg-white rounded-md shadow-lg'>
//           <div className='flex justify-end'>
//             <button className='p-2 text-gray-400 rounded-md hover:bg-gray-100'
           
//             >

//               <img 
//               src =""
//               alt="buttonImage"
//               className='bg-red-200 w-5 h-5 mx-auto'
//               viewBox ="0 0 20 20"
//               />


//             </button>
//             </div>
//             <div className='max-w-sm max-auto py-3 space-y-3 text-center'>
//               <h4 className='text-lg font-medium text-gray-800'>
//                 Create Shipment

//               </h4>
//               <p className='text-[15px] text-gray-600'>
//                 "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"

//               </p>
//               <form onSubmit ={(e)=>e.preventDefault()}>
//                 <div className='relative mt-3'>
//                   <input type="text" id='receiver' placeholder='receiver'
//                   className='w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent 
//                   outline-none border focus:border-indigo-600 shadow-sm rounded-lg'
//                   onChange={(e)=>setShipment({

//                     ...shipment,
//                     receiver:e.target.value
//                   })

//                   } />

                  

//                 </div>
//                 <div className='relative mt-3'>
//                   <input 
//                   type ="date"
//                   placeholder="pickupTime"
//                   id="pickupTime"
//                   className='w-full pl-5 pr-3 py-3 text-gray-500 bg-transparent
//                   outline-none border focus:border-indigo-600 shadow-sm rounded-lg'
//                   onChange={(e)=> setShipment({
//                     ...shipment,
//                     pickUpTime:e.target
//                   })} />


//                 </div>
//                 <div className='relative mt-3'>
//                   <input type="text"
//                   placeholder="distance"
//                   id="distance"
//                   className ="w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent outline-none border
//                    focus:border-indigo-600 shadow-sm rounded-lg"
//                    onChange={(e)=> setShipment({
//                     ...shipment,
//                     distance:e.target
//                   })}  />

//                 </div>
//                 <div className='relative mt-3'>
//                   <input type="text"
//                   placeholder="price"
//                   id="price"
//                   className ="w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent outline-none border
//                    focus:border-indigo-600 shadow-sm rounded-lg"
//                    onChange={(e)=> setShipment({
//                     ...shipment,
//                     price:e.target.value
                   
        
//                   })
//                 }  />

//                 </div>
//                 <button
//                 onClick={()=>createItem()}
//                 className='block w-full mt-3 py-3 px-4 font-medium text-sm text-center
//                 text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700
//                 rounded-lg ring-offset-2 ring-indigo-600 focus:ring-2' > 

//                 </button>

//                 <div>

//                 </div>

//               </form>

//             </div>
            
            
            
            
//             </div> 
//             </div>



//     </div>


//   ):null

//   }