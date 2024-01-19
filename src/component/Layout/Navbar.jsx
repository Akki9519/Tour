import React,{useState} from "react";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [show,setShow]=useState(false);
  const navigate=useNavigate();

  return (
    <>
      <div className="hidden sm:block sm:h-20 sm:w-screen sm:bg-blue-100">
        <div className="flex justify-around pt-5">
          <Link to='/'><div className="text-xl font-bold cursor-pointer">RSVR</div></Link>

          <div className="flex flex-row gap-10">
            <Link to="/">
              <div className="font-semibold cursor-pointer text-xl">Home</div>
            </Link>
            <Link to="/about">
              <div className="font-semibold cursor-pointer text-xl">About</div>
            </Link>
            <Link to="/tour">
              <div className="font-semibold cursor-pointer text-xl">Tour</div>
            </Link>
          </div>
          <div className="flex flex-row gap-10">
            <Link to="/login">
              <div className="text-xl text-center justify-center font-semibold  w-36 rounded-lg cursor-pointer">
                Login
              </div>
            </Link>
            <Link to="/register">
              <div className="text-xl text-center justify-center bg-purple-500 py-.5 px-3 rounded-2xl text-white font-semibold w-36 cursor-pointer">
                Register
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="h-16 bg-blue-500 sm:hidden ">
      <div className='grid grid-cols-2 pt-2'>
       <MenuIcon sx={{fontWeight:"400",fontSize:"40px",fontColor:"white",cursor:"pointer"}} onClick={()=>{setShow(!show);}}/>
       <div className='font-semibold text-white flex justify-end text-xl ml-5'>RSVR</div>
       </div>
       {show && <div className='bg-blue-500 text-white'>
        <Link to='/'><div className='font-semibold border-2 text-xl cursor-pointer' onClick={()=>{navigate('/');}}>Home</div></Link>
        <Link to="/about"><div className="font-semibold border-2 text-xl cursor-pointer" onClick={()=>{navigate('/about');}}>About</div></Link>
        <Link to='/tour'><div className="font-semibold border-2 text-xl cursor-pointer" onClick={()=>{navigate('/tour');}}>Tour</div></Link>
        <Link to='/profile'><div className="font-semibold border-2 text-xl cursor-pointer" onClick={()=>{navigate('/profile');}}>Profile</div></Link>
     
       </div>}
      </div>
    </>
  );
};

export default Navbar;
