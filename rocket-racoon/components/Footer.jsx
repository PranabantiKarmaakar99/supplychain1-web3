import React from 'react';
import {Fot1,Fot2} from "../components/Index"
import { isRouteMatch } from 'next/dist/server/future/route-matches/route-match';

const Footer = () => {

  const footerNavs = [
 {
  href : "#",
  name : "Terms"
},
{
  href : "#",
  name : "Privacy"
},
{
  href : "#",
  name : "Lisence"
},
{
  href : "#",
  name : "About Us"
}
]

  return (
    <div className='pt-10'>
      <div className='max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8'> 
      <div className='justify-between sm:flex'>
        <div className='space-y-6'>
          <img src="" alt="logo" className='w-32' />
          <p className='max-w-md'>
           Lorem ipsum dolor sit amet, consectetur adipis
           </p>
           <ul className='flex flex-wrap items-center gap-4 text-sm sm:text-base'>
             {footerNavs.map((el,index)=>{
                <li className='text-gray-800 hover:text-gray-500 duration-150'>
                  <a key={index} href={el.href}>
                    {el.name}
                  </a>
                </li>
               })}
            </ul>

        </div>

        <div className='mt-6'>
          <p className='text-gray-700 font-semibold'>Get the app </p>
          <div className="flex items-center gap-3 mt-3 sm:block">
            <a href="#">
              <Fot1 />
             </a>
             <a href="#" className='mt-0 block sm:mt-3'>
              <Fot2 />
             </a>
             </div> 
              </div>
              </div>

              <div className='mt-10 py-10 border-t md:text-center'>
                <p>
                  @ 2023 Pranabanti Karmaakar. All Rights Reserved.
                </p>
              </div>


      </div>
      
      
      </div>
  )
}

export default Footer


