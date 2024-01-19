import React, { useState } from "react";
import image1 from "./../../assets/images/gallery-01.jpg";
import image2 from "./../../assets/images/gallery-05.jpg";
import image3 from "./../../assets/images/gallery-03.jpg";
import SearchIcon from "@mui/icons-material/Search";
import { TourData } from "./../../Data/Tour";
const About = () => {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const onhandleClick = () => {
    let len = TourData.length;
    // let filteredData=[];
    for (let i = 0; i < len; i++) {
      if (
        TourData[i].id === search ||
        TourData[i].title === search ||
        TourData[i].city === search ||
        TourData[i].distance === search ||
        TourData[i].price
      ) {
        filteredData.push(TourData[i]);
      }
    }
    setFilteredData(filteredData);
    console.log(filteredData, "filtered Data");
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="grid grid-cols-1 text-center justify-center m-5">
          <div className="text-2xl font-serif font-bold pt-20 ">
            Adventure awaits! Explore the world with our exclusive
            <span className="text-[purple]"> tour packages</span>.
          </div>
          <p className="text-sm text-left ml-4">
            Tourism is a multifaceted industry that encompasses travel for
            leisure, business, and other purposes. The concept of going on a
            tour, whether it's a short weekend getaway or an extended
            international expedition, is highly valued for various reasons, and
            it brings about numerous benefits, both individually and for the
            broader economy.
            Cultural Exchange: Tourism promotes cultural exchange by exposing individuals to diverse customs, traditions, and lifestyles. Travelers get the opportunity to learn about and appreciate different cultures, fostering mutual understanding and tolerance.

Economic Impact: The tourism industry is a significant contributor to global economies. It generates revenue through various channels, including accommodation, transportation, attractions, and local businesses. This economic influx can positively impact local communities, creating jobs and supporting small businesses.

Job Creation: The tourism sector is a major employer, offering a wide range of job opportunities. Jobs are created not only in traditional areas like hotels and transportation but also in ancillary services such as food and beverage, entertainment, and retail.
          </p>
          <div className="bg-orange-100 sm:w-96 h-16 rounded-md sm:ml-32 cursor-pointer">
            <input
              type="search"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              onClick={() => {
                onhandleClick();
              }}
              placeholder="Search by title,location...."
              className="w-72  outline-0 m-4 pl-2 p-1"
            />
            <SearchIcon />
          </div>
        </div>

        <div className="grid grid-cols-3  gap-5 m-14 flex-grow">
          <div className="mt-20">
            <img src={image1} alt="" className="rounded-lg h-96 w-48" />
          </div>
          <div className="mt-10">
            <img src={image2} alt="" className="rounded-lg h-96 w-48" />
          </div>
          <div className="">
            <img src={image3} alt="" className="rounded-lg h-96 w-48" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
