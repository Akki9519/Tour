import React from 'react'
import image from './../../assets/images/travel-concept-with-baggage.jpg'
const Section = () => {
  return (
   <>
   <div className="grid-cols-1 grid sm:grid-cols-2 ">
   <div className="grid grid-cols-1 m-24">
   <h1 className='font-bold text-3xl text-center justify-center'>Expertise Tailored to Serve Your Needs!!</h1>
   <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, iusto incidunt unde quo voluptatem quas quidem quia dolorem fuga eius accusamus nulla illum sunt fugit sapiente aspernatur maiores error aperiam!</p>
   <div className="grid grid-cols-3 ">
   <div className="grid grid-cols-1">
    <div className="h-12 w-12 bg-purple-500 rounded-md font-bold text-xl shadow-lg p-2.5">10+</div>
    <div className="text-sm font-semibold ">Successful Trips</div>
    </div>
    <div className="grid grid-cols-1">
    <div className="h-12 w-12 bg-purple-500 rounded-md font-bold text-xl shadow-lg p-2.5">5+</div>
    <div className="text-sm font-semibold ">Regular Clients</div>
    </div>
    <div className="grid grid-cols-1">
    <div className="h-12 w-12 bg-purple-500 rounded-md font-bold text-xl shadow-lg p-2.5">1+</div>
    <div className="text-sm font-semibold ">1 year Experience</div>
    </div>
   
   </div>
   </div>
   <img src={image} alt="" className='h-72 w-96 m-28' />
   </div>
   </>
  )
}

export default Section