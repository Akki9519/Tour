import React from 'react'

const Footer = () => {
  return (
   <>
   {/* <div className=" fixed bottom-0 w-full mb-10 "> */}
   <div className="grid sm:grid-cols-5 grid-cols-1 justify-around mt-10 mb-8 gap-3 ">
    <div className='col-span-2 m-5 pl-2'>
      <div className="font-semibold">RSVR Tech</div>
      <div className="w-96 font-sans text-sm ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt reprehenderit doloremque labore quisquam. Ipsam labore voluptates accusamus, eum quis molestiae quos in maxime deleniti molestias nesciunt, magni, quas vel dicta!</div>
    </div>

    <div className='pl-2'>
    <div className="font-semibold">Discover</div>
    <div  className="">Home</div>
    <div className="">About</div>
    <div className="">Tour</div>
    </div>

    <div className='pl-2'>
    <div className="font-semibold">Quick links</div>
    <div className="">Gallery</div>
    <div className="">Login</div>
    <div className="">Register</div>
    </div>

    <div className='pl-2'>
    <div className="font-semibold">Contact</div>
    <div className="">Address: xyz colony/House no:111</div>
    <div className="">Email: xyz99@gmail.com</div>
    <div className="">Phone no. : 9519591912</div>
    </div>
</div>

   </>
  )
}

export default Footer