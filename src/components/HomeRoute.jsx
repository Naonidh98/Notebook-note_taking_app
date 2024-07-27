import React from "react";
import { IoChevronBackCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const HomeRoute = () => {
  return (
    <div className="w-[90%] max-w-[1300px] mx-auto p-2 border-2 rounded-full shadow-lg mt-2">
      <Link to={"/"}>
      <IoChevronBackCircleSharp className="text-2xl md:text-4xl"/>
      </Link>
    </div>
  );
};

export default HomeRoute;
