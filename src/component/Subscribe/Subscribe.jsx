import React, { useState } from 'react'
import image from './../../assets/images/backpacker-presenting-something-isolated-white-background.jpg'
const Subscribe = () => {
  const[subscribe,setSubscribe]=useState("");

  const onhandleClick=()=>{
   setSubscribe("")
  }
  return (
   <>
   
   
    <div className="h-72 bg-blue-100 pl-28 w-full ">
    <div className="font-semibold text-2xl pt-10">Join our community for exclusive updates and offers!</div>
    <div className="h-10 w-80 rounded-md bg-purple-500 mt-5  font-small cursor-pointer" onClick={onhandleClick}> <input type="text" name="" id="" placeholder='Enter Your Email' value={subscribe} 
        onChange={(e) => setSubscribe(e.target.value)} className='m-2 ml-5 pl-2  outline-0' />Subscribe</div>
    <p className='text-sm mt-5 w-96'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure maxime amet provident natus incidunt autem rerum est tempora ipsam, a reiciendis consectetur enim atque ducimus possimus saepe minus nostrum voluptate?</p>
    </div>


  
   
   </>
  )
}

export default Subscribe