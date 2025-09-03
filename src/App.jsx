import React from "react";
import reel from "./public/reel.png";

import SearchBar from "./components/SearchBar";
import MoviesCard from "./components/MoviesList";
import "./App.css";

const App = () => {
  return (
    <div>
      <div className="w-full h-full bg-[#0f1214] flex flex-col justify-center items-center pb-2">
        <div className="w-full h-full flex flex-col items-center md:items-start lg:items-start justify-center">
          <div className="flex flex-row w-[200px] md:w-[300px] lg:w-[350px] justify-between items-center  ">
            <p className="text-3xl font-bold  text-[16px] md:text-[24px] lg:text-[28px] text-white pt-5 md:pl-[50px] lg:pl-[50px] rowdies-light">
              MOVIE REVIEWS
            </p>
            <img
              className="w-[60px] h-[50px] md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px] "
              src={reel}
              alt=""
            />
          </div>
          <p className="  md:pl-[50px] lg:pl-[50px]  text-white text-[7px] md:text-[12px]  lg:text-[13px] righteous-regular">
            TRUST & ORGANIC MATTERS
          </p>
        </div>
      </div>
      <div className="bg-[#1a1b1c]">
        <SearchBar />
      </div>
      <div className=" movieslist flex flex-wrap w-full bg-[#1a1b1c] p-10 pb-[500px] gap-8">
        <MoviesCard />
      </div>
    </div>
  );
};
export default App;
