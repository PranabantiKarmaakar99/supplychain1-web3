import React,{useState,useEffect,useContext} from 'react';
//import { TrackingContext } from "../context/tracking2.jsx";
import FormComponent from '../components/Form';
//import {}


// const {state} = useContext(TrackingContext);


const Table = ({state
 
}) => {
//    const convertTime = (time) => {

//     const newTime = new Date(time);
//     const dataTime = new Intl.DateTimeFormat("en-US",{
//       year:"numeric",
//       month: "2-digit",
//       day: "2-digit"
//     }).format(newTime);

//     return dataTime;
//    };

//    const [lists,setlists] = useState([]);
// //    const {contract} = state;
   
   
   


//    useEffect(()=>{

//     const listMessages= async()=>{

//        const lists = await contract.getAllTransactions();
//        setlists(lists);
       

//     }

//     contract && listMessages();

//    },[contract])
//    console.log(contract)
//    console.log (lists)


//   return (
//     <div className='max-w-screen-xl mx-auto px-4 md:px-8'>
//       <div className='items-center justify-between md:flex'>
//         <div className='max-w-lg'>
//           <h3 className='text-gray-800 text-xl font-bold sm:text-2xl' >

//             Create Tracking

//           </h3>
//           <p className='text-gray-600 mt-2'>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut

//           </p>
//         </div>
//         <div>
//           <p
//           onClick = {handleOpenForm}
//           href ="#"
//           className='inline-block px-4 py-2 text-white duration-150 font-medium bg-gray-800
//            hover:bg-gray-700 active:ng-gray-900 md:text-sm rounded-lg md:inline-flex' >

//             Add Tracking
//           </p>
//           {isFormOpen && <FormComponent onClose={handleCloseForm} />}
//         </div>
//       </div>

//       <div className='mt-2 shadow-sm border rounded-lg overflow-x-auto'>
//         <table className='w-full table-auto text-sm text-left'>
//          <thead className='bg-gray-100 text-gray-600 font-medium border-b'>
//           <tr>
//             <th className=" py-3 px-6"> Sender</th>
//             <th className=" py-3 px-6"> Receiver</th>
//             <th className=" py-3 px-6"> PickupTime</th>
//             <th className=" py-3 px-6"> Distance</th>
//             <th className=" py-3 px-6"> Price </th>
//             <th className=" py-3 px-6"> Delivery Time</th>
//             <th className=" py-3 px-6"> Paid</th>
//             <th className=" py-3 px-6"> Status</th>
            
            
//           </tr>

//          </thead>
//          <tbody className='text-gray-600 divide-y' >
//           {Array.isArray(lists) && lists?.map((el,index)=>{
//             <tr key={index}>
//               <td className='px-6 py-4 whitespace-nowrap'>{el.sender.slice(0,15)}...</td>
//               <td className='px-6 py-4 whitespace-nowrap'>{el.receiver.slice(0,15)}...</td>
//               <td className='px-6 py-4 whitespace-nowrap'>{convertTime(el.pickupTime)}</td>
//               <td className='px-6 py-4 whitespace-nowrap'>{el.distance}km </td>
//               <td className='px-6 py-4 whitespace-nowrap'>{el.distance}km </td>
//             </tr>
//           })}
//          </tbody>
//         </table>


//       </div>
      
      
      
//       </div>
//   )
}
export default Table;

