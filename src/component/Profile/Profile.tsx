import React, { useState,useEffect } from 'react'
import Navbar from '../Layout/Navbar1'
import Footer from '../Layout/Footer'
import Person3Icon from '@mui/icons-material/Person3';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import secureLocalStorage from 'react-secure-storage';

const Profile = () => {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [contact,setContact]=useState('')
  const getBookingData=()=>{

  }
  useEffect(()=>{
  getBookingData();
  let name:any=secureLocalStorage.getItem('name');
  let number:any=secureLocalStorage.getItem('number');
  let email:any=secureLocalStorage.getItem('email');
  if(email){setEmail(email);} 
  if(number){setContact(number)};
  if(name){setName(name)}

  },[])
  return (
    <>
    <Navbar/>
    <div className="grid grid-cols-1 sm:grid-cols-2 m-5 gap-5 h-max-[600px]">
    <div className='border-2 shadow-lg rounded-lg p-2'>
    <div className='flex text-center justify-center'><Person3Icon sx={{fontSize:"80px"}}/></div>
    <div className='font-semibold flex text-center justify-center text-2xl font-serif'>Profile Detail</div>
    <div className='grid grid-cols-2 mt-10 p-2'>
        <div className='text-xl font-semibold'>Name</div>
        <div className='font-serif text-xl font-medium'>{name}</div>
    </div>
    <div className='grid grid-cols-2 p-2'>
        <div className='text-xl font-semibold'>Email</div>
        <div className='font-serif text-xl font-medium'>{email}</div>
    </div>
    <div className='grid grid-cols-2 p-2'>
        <div className='text-xl font-semibold'>Contact</div>
        <div className='font-serif text-xl font-medium'>{contact}</div>
    </div>
    <div className='grid grid-cols-2 p-2'>
        <div className='text-xl font-semibold'>Date Of Birth</div>
        <div className='font-serif text-xl font-medium'>18th,September,2000</div>
    </div>
    </div>
    <div className="border-2 rounded-lg p-2 shadow-md">
    <div className='flex text-center justify-center'><BookOnlineIcon sx={{fontSize:"80px"}}/></div>
    <div className='font-semibold flex text-center justify-center text-2xl font-serif'>Booking History</div>
    <div className='border-2 rounded-lg shadow-lg p-2 mt-10'>
    <div className='grid grid-cols-2 p-2'>
        <div className='text-xl font-semibold'>TrackingId</div>
        <div className='font-serif text-xl font-medium'>MFSHURHUIKSUKF</div>
    </div>
    <div className='grid grid-cols-2 p-2'>
        <div className='text-xl font-semibold'>Location</div>
        <div className='font-serif text-xl font-medium'>Thailand</div>
    </div>   <div className='grid grid-cols-2 p-2'>
        <div className='text-xl font-semibold'>Email</div>
        <div className='font-serif text-xl font-medium'>akashkesharwani81@gmail.com</div>
    </div>   <div className='grid grid-cols-2 p-2'>
        <div className='text-xl font-semibold'>city</div>
        <div className='font-serif text-xl font-medium'>Thailand</div>
    </div>
    </div>
    </div>
    </div>
    <div className='w-full'>
    <Footer/>
    </div>
    </>
  )
}

export default Profile