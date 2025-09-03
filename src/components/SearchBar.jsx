import React from "react";
import "../App.css";

const SearchBar = () => {
  return (
    <div className=" h-[20vh]  flex-col md:flex-row lg:flex-row flex   w-full justify-around items-center p-6 gap-5 md:gap-0 lg:gap-0 ">
      <input
        className="h-[7vh] w-[90vw] md:w-[65vw] lg:w-[75vw]  text-white  bg-[#2c3031] shadow-lg rounded-md pl-5"
        type="text"
        placeholder="Search Movie"
      />
      <button className=" rowdies-regular bg-red-700  w-[90vw] h-[5vh] md:w-[15vw] md:h-[7vh] lg:w-[16vw] lg:h-[7vh] text-white rounded-md font-bold">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
