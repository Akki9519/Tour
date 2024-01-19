import React, { useState } from 'react'
import Navbar from './../Layout/Navbar'

import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
// import { Alert } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Book = (props) => {
  const[guest,setGuest]=useState(0);
  const[name,setName]=useState('');
  const[contact,setContact]=useState('');
  const[date,setDate]=useState('');
  const costPerGuest = 99;
  const totalCost = guest * costPerGuest;
  const tax = 0.1 * totalCost;
  const totalCostWithTax = totalCost + tax;
  const handleGuestChange = (e) => {
    const newNumGuests = parseInt(e.target.value, 10);
    setGuest(newNumGuests);
  };
  const handleBookOrder = () => {
   setContact("")
   setName("")
   setDate("")
    toast.success('Your order is booked successfully!');
  };

  return (
    <>
  <div><Navbar/></div>
    <div className="grid grid-cols-2 ">

       <div className="">
       <div className="ml-48 mt-24">
    <img src={props?.bookingData?.photo} alt="" className='rounded-md h-96 w-200px' />
     </div>
     <div className="ml-48 mt-2">
     <div className="font-semibold pl-2">{props?.bookingData?.title}</div>
     <div className=""><LocationOnIcon/>{props?.bookingData?.city}</div>
     <div className=""><StarBorderPurple500Icon />{props?.bookingData?.avgRating}</div>

     <div className=""><CurrencyRupeeIcon/>{props?.bookingData?.price}/Person</div>  
     <div className="font-semibold pl-2">Description:{props?.bookingData?.desc}</div>
    </div>
       </div>


       <div className="bg-blue-400 w-96 rounded-md mt-24 ml-32">
       <div className="font-bold ml-14 mt-8 text-2xl">${props?.bookingData?.price}<span className='text-sm font-medium'>/person</span></div>
       <div className="h-96 w-72 bg-blue-200  rounded-md ml-12">

        <div className="font-semibold pl-4 mt-2 text-xl">Information</div>
        <div className="ml-4 mt-5 ">
        <input type="text" name="" id=""  placeholder='Full Name' value={name} onChange={(e)=>{setName(e.target.value)}} className='rounded-lg h-9 w-56 pl-3 outline-0'/>
        <input type="text" name="" id="" placeholder='Contact' value={contact} onChange={(e)=>{setContact(e.target.value)}} className='rounded-lg h-9 w-56 pl-3 mt-3 outline-0'/>
        <input type="date" name="" id="" placeholder=''  value={date} onChange={(e)=>{setDate(e.target.value)}} className='rounded-lg h-9 w-56 pl-3 mt-3 outline-0'/>
        <input type="number" name="" id="" placeholder='Guest' className='rounded-lg h-9 w-56 pl-3 mt-3 outline-0' value={guest} onChange={handleGuestChange} min={0}/>
<div className="flex flex-row m-1">
       <div className="font-semibold">Total:</div>
       <div className="">${totalCost}</div>
       </div>
<div className="flex flex-row">
       <div className="font-semibold pl-1 ">VAT%: </div>
       <div className="">${tax}</div>
       </div>
       <div className="flex flex-row">
       <div className="font-semibold pl-1">Grand Total:</div>
       <div className="">${totalCostWithTax}</div>
       </div>
       </div>
       <div className="bg-purple-700 text-white font-semibold text-center rounded-2xl mx-8 my-5 cursor-pointer" onClick={handleBookOrder}>Book Now</div>  <ToastContainer />
       </div>
    </div>
    </div>
    </>
  )
}
export default Book