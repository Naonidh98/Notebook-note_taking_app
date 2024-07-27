import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HomeRoute from "../components/HomeRoute";
import NotesCard from "../components/NotesCard";

const SearchNote = () => {
  const params = useParams();
  console.log(params.desc);

  const [data , setData] = useState([]);

  useEffect(() => {

    const tmp=[];

    const localData = JSON.parse(localStorage.getItem("notes")) || [];

    localData.forEach((item) => {
      if (item.title.includes(params.desc) || item.content.includes(params.desc)) {
        tmp.push(item);
      }
    });

    setData(tmp);

  }, []);

  return (
    <div>
      <HomeRoute />

      <div className="w-[90%] mx-auto mt-12">
        <h2 className="font-semibold font-poppins text-xl md:text-2xl xl:text-4xl">
          Search result for "<span>{params.desc}</span>"
        </h2>

        
        <div>
          {data.length === 0 ? (
            <div className="w-full font-poppins text-lg md:text-xl font-semibold text-center py-[45px]">
              No result found
            </div>
          ) : (
            <div className="w-full py-2 flex justify-between flex-wrap gap-8">
              {data.map((item, index) => (
                <div key={index} className="w-full xl:w-[600px] ">
                  <NotesCard data={item} />
                </div>
              ))}
            </div>
          )}
        </div>
        

      </div>

      {}
    </div>
  );
};

export default SearchNote;
