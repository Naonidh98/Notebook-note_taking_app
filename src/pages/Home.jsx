import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import NotesCard from "../components/NotesCard";
import { GenerateTmpData } from "../utils/GenerateTmpData";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

const Home = () => {
  const data = JSON.parse(localStorage.getItem("notes")) || [];
  const [page, setPageNumber] = useState(1);
  const [pageData, setPageData] = useState([]);

  function pagination(array, currentPage, pageSize) {
    setPageNumber(currentPage);
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return array.slice(startIndex, endIndex);
  }

  useEffect(() => {
    setPageData(pagination(data, 1, 10));
  }, []);

  return (
    <div>
      {/* Header */}
      <Header />

      {/* My notes */}
      <div className="w-[90%] max-w-[1280px] mx-auto mt-4 lg:mt-[55px]">
        <h2 className="font-roboto text-2xl md:text-4xl xl:text-6xl font-semibold">
          My Notes
        </h2>
        {/* show notes */}
        <div>
          {data.length === 0 ? (
            <div className="w-full font-poppins text-lg md:text-xl font-semibold text-center py-[45px]">
              <p>No post is yet created</p>
              <div>
                <p className="mt-5 py-2">
                  To test pagination, click on "Generate Temporary Data"
                </p>
                <button
                  className="py-3 bg-black text-white px-4 rounded-full"
                  onClick={() => {
                    GenerateTmpData();
                  }}
                >
                  Generate Data
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex gap-2 my-2 items-center justify-end">
                {page > 1 && (
                  <button
                    className="flex items-center gap-2 bg-black text-white py-2 px-4 rounded"
                    onClick={() => {
                      setPageData(pagination(data, page - 1, 10));
                    }}
                  >
                    <FaLongArrowAltLeft />
                    Previous
                  </button>
                )}

                <p className="font-semibold text-base md:my-2 xl:text-3xl">
                  {page}
                </p>

                {
                  pageData.length !== 0 && <button
                  className="flex items-center gap-2 bg-black text-white py-2 px-4 rounded"
                  onClick={() => {
                    setPageData(pagination(data, page + 1, 10));
                  }}
                >
                  Next
                  <FaLongArrowAltRight />
                </button>
                }
              </div>
              <div className="w-full py-2 flex justify-between flex-wrap gap-8">
                {pageData.map((item, index) => (
                  <div key={index} className="w-full xl:w-[600px] ">
                    <NotesCard data={item} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* pageination */}
    </div>
  );
};

export default Home;
