import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StarBorderPurple500Icon from "@mui/icons-material/StarBorderPurple500";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Box = (props) => {
  console.log(props);
  const navigate = useNavigate();
  return (
    <>
      <div className="rounded-lg border-2 shadow-lg">
      <div className="">
        <img src={props.auth.photo} alt="" className="rounded-t-md " />
      </div>
      <div className="m-1">
        <div className="">
          <LocationOnIcon />
          {props.auth.city}
        </div>
        <div className="">
          <StarBorderPurple500Icon />
          {props.auth.avgRating}
        </div>
        <div className="font-semibold pl-2">{props.auth.title}</div>
        <div className="">
          <CurrencyRupeeIcon />
          {props.auth.price}/Person
        </div>
      </div>
      <div
        className="h-10  bg-purple-500 rounded-md pt-2 font-semibold pl-2   "
        onClick={() => {
          props.setBookingData(props.auth);
          navigate("/book");
        }}
      >
        Book Now
      </div>
      </div>
     
    </>
  );
};
export default Box;
