import React, { useEffect, useState } from "react";
import { TourData } from "../../Data/Tour";
import Box from "../Box/Box";
import Navbar from "../Layout/Navbar1";
import image from "./../../assets/images/woman-taking-photo-morning-mist-phu-lang-ka-phayao-thailand.jpg";
import SearchIcon from "@mui/icons-material/Search";

const Tour = (props) => {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const onhandleSearch = () => {
    let len = TourData.length;
    let filteredData = [];
    for (let i = 0; i < len; i++) {
      if (
        TourData[i].id === search ||
        TourData[i].title === search ||
        TourData[i].city === search ||
        TourData[i].distance === search ||
        TourData[i].price === search
      ) {
        filteredData.push(TourData[i]);
      }
    }
    setFilteredData(filteredData);
  };
  useEffect(()=>{
   setFilteredData(TourData)
  },[])
  return (
    <>
      <div className="absolute right-0">
        <Navbar />
        <div className="">
          <img src={image} alt="" className="h-72 w-full" />
        </div>
        <div className="bg-orange-100 w-96 h-16 rounded-md ml-32 cursor-pointer mt-10">
          <input type="search" value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            placeholder="Search by title,location...."
            className="w-72  outline-0 m-4 pl-2 p-1"
          />
          <SearchIcon onClick={onhandleSearch} />
        </div>

        <div className="font-bold text-2xl ml-20 mt-8 "> Exclusive Tour Picks </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 m-10">
          {filteredData.map((item) => {
            return ( <Box auth={item} bookingData={props.bookingData} setBookingData={props.setBookingData}/>);
          })}
        </div>
      </div>
    </>
  );
};

export default Tour;
