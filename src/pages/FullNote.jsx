import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import HomeRoute from "../components/HomeRoute";
import { useParams } from "react-router-dom";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { deleteNote } from "../operations/CRUD_Operations";
import EditNote from "./EditNote";
import { GenerateColor } from "../utils/GenerateColor";

const FullNote = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [noteData, setnoteData] = useState({});

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("notes")) || [];

    data.find((item) => {
      if (item.id == params.id) {
        setnoteData(item);
        return;
      }
    });
  }, []);

  const bgColor = GenerateColor();

  return (
    <div className="w-full">
      <HomeRoute />

      <div>
        <div
          className="w-[90%] mt-8 mx-auto min-h-[250px] p-3 rounded-lg flex flex-col justify-between"
          style={{
            backgroundColor: bgColor,
          }}
        >
          {/* Content */}

          <div className="flex flex-col gap-2 xl:gap-4">
            <h2 className="text-xl md:text-2xl xl:text-3xl font-semibold font-poppins break-words cursor-pointer">
              {noteData?.title}
            </h2>
            <section className="text-sans text-base text-left md:text-lg xl:text-xl break-words">
              {noteData?.content}
            </section>
          </div>

          {/* date  + (edit and delete) */}
          <div className="flex justify-between items-end flex-wrap mt-6">
            {/*data */}
            <div className="font-light text-base xl:text-lg font-poppins italic">
              <p>
                <span>Created : </span> <span>{noteData?.createdAt}</span>
              </p>
              <p>
                <span>Updated : </span> <span>{noteData?.updatedAt}</span>
              </p>
            </div>
            {/* edit + delete*/}
            <div className="flex items-center mt-2 gap-2 md:gap-4 xl:gap-6">
              <div
                className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] text-sm md:text-lg cursor-pointer flex justify-center items-center rounded-full bg-black text-white"
                onClick={() => {
                  navigate(`/note/edit/${noteData?.id}`);
                }}
              >
                {" "}
                <MdEdit />{" "}
              </div>
              <div
                className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] text-sm md:text-lg cursor-pointer flex justify-center items-center rounded-full bg-black text-white"
                onClick={() => {
                  deleteNote(noteData.id);
                }}
              >
                {" "}
                <RiDeleteBin6Line />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullNote;
