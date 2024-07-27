import React from "react";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

import { GenerateColor } from "../utils/GenerateColor";
import { useNavigate } from "react-router-dom";

import { deleteNote } from "../operations/CRUD_Operations";

const NotesCard = ({ data }) => {
  //Generate a background color
  const bgColor = GenerateColor();
  const navigate = useNavigate();

  //new title
  const newTitle =
    data.title.length > 28 ? `${data.title.slice(0, 18)}....` : data.title;

  //new content
  const newDesc =
    data.content.length > 120
      ? `${data.content.slice(0, 100)}....`
      : data.content;

  return (
    <div
      className="w-full min-h-[250px] p-3 rounded-lg flex flex-col justify-between"
      style={{
        backgroundColor: bgColor,
      }}
    >
      {/* Content */}

      <div className="flex flex-col gap-2 xl:gap-4">
        <h2
          className="text-xl md:text-2xl xl:text-3xl font-semibold font-poppins break-words cursor-pointer"
          onClick={() => {
            navigate(`/note/show/${data.id}`);
          }}
        >
          {newTitle}
        </h2>
        <section className="text-sans text-base text-left md:text-lg xl:text-xl break-words">
          {newDesc}
          <span
            className="text-white font-bold cursor-pointer"
            onClick={() => {
              navigate(`/note/show/${data.id}`);
            }}
          >
            {" "}
            read more
          </span>
        </section>
      </div>

      {/* date  + (edit and delete) */}
      <div className="flex justify-between items-end flex-wrap">
        {/*data */}
        <div className="font-light text-base xl:text-lg font-poppins italic">
          <p>
            <span>Created : </span> <span>{data?.createdAt}</span>
          </p>
          <p>
            <span>Updated : </span> <span>{data?.updatedAt}</span>
          </p>
        </div>
        {/* edit + delete*/}
        <div className="flex items-center mt-2 gap-2 md:gap-3 xl:gap-6">
          <div
            className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] text-sm md:text-lg cursor-pointer flex justify-center items-center rounded-full bg-black text-white"
            onClick={() => {
              navigate(`/note/edit/${data?.id}`);
            }}
          >
            {" "}
            <MdEdit />{" "}
          </div>
          <div
            className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] text-sm md:text-lg cursor-pointer flex justify-center items-center rounded-full bg-black text-white"
            onClick={() => {
              deleteNote(data.id);
            }}
          >
            {" "}
            <RiDeleteBin6Line />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotesCard;
