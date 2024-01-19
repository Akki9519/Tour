import React from 'react'
import Navbar from '../Layout/Navbar1'
import Footer from '../Layout/Footer'
import image from '../../assets/images/woman-taking-photo-morning-mist-phu-lang-ka-phayao-thailand.jpg'
const AboutPage = () => {
  return (
    <>
        <Navbar/>
<img src={image} alt="" className='h-80 w-screen' />
<div className="grid grid-cols-1 sm:grid-cols-2 text-center justify-center">
<div className="font-bold text-3xl font-sans sm:w-56 sm:ml-32 mt-10">Welcome to RSVL Travel by CTM</div>
<div className="">
<div className="font-medium mt-10 mr-16">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis odit dolorum odio magnam placeat autem possimus praesentium. Totam labore ab molestiae omnis quasi repellat quidem corrupti quas magni. Incidunt, officia!</div>
<div className="text-sm pt-5 mr-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum esse numquam commodi. Unde, eius rerum, modi voluptatem recusandae labore ipsa architecto, ad facilis dolorum qui consectetur officia quisquam accusantium voluptas.</div>
</div>
</div>

<div className="h-20 w-screen bg-[#013042] flex flex-row justify-center pt-7 mt-8">
    <div className="font-bold text-white text-xl ">Design Your dream vacation today</div>
    {/* <div className="pl-3 text-white ">CONTACT THE RSVL TRAVEL TEAM</div> */}
</div>
        {/* <Footer/> */}
    </>
  )
}

export default AboutPage