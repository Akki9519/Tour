import React, { useState } from "react";
import Footer from "./Layout/Footer";
import Navbar from "./Layout/Navbar";
import About from "../component/About/About";
import Subscribe from "./Subscribe/Subscribe";
import Section from "./Section/Section";

const Home = () => {
  return (
    <>
      <div className=" absolute right-0 top-0">
        <div className="">
          <Navbar />
        </div>
        <div className="">
          <About />
        </div>
        <div className="">
          <Section />
        </div>
        <div className="">
          <Subscribe />
        </div>
        <div className="">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
