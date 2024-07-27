import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import { IoIosAddCircle } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const navigate = useNavigate();
  const [openSearch, setOpenSearch] = useState(false);
  const [searchNote, setSearchNote] = useState("");

  return (
    <div className="w-full">
      <div className="w-[90%] max-w-[1280px] mx-auto py-4 flex items-center justify-between flex-wrap gap-y-2">
        <div className="flex gap-8 items-center">
          {/* Project logo */}
          <Link>
            <div className="font-roboto font-bold text-3xl xl:text-4xl flex items-center">
              NoteBook<span className="md:text-3xl xl:text-6xl">.</span>
            </div>
          </Link>

          {/* Search bar*/}
          <form
            onSubmit={() => {
              navigate(`/search/note/${searchNote}`);
            }}
            className="hidden sm:flex gap-2 items-center py-1 px-4 shadow-xl border-2 border-[##999999] rounded-full w-[150px] md:w-[280px] xl:w-[340px]"
          >
            <input
              type="text"
              placeholder="Search for a note"
              className="text-lg p-1 outline-none border-none bg-transparent w-full"
              onChange={(event) => {
                setSearchNote(event.target.value);
              }}
            />
            <button
              onClick={() => {
                navigate(`/search/note/${searchNote}`);
              }}
            >
              <IoSearchSharp className="text-xl" />
            </button>
          </form>
        </div>

        {/* create post */}
        <Link to={"/note/create"}>
          <div className="hidden sm:flex flex-col gap-1 items-center">
            <IoIosAddCircle className="text-2xl xl:text-4xl" />
            <p className="font-poppins font-semibold text-base md:text-lg xl:text-xl">
              Create note
            </p>
          </div>
        </Link>

        {/* For small devices */}
        <div className="sm:hidden flex gap-4 text-2xl">
          <div
            onClick={() => {
              navigate("/note/create");
            }}
          >
            <IoIosAddCircle />
          </div>
          <div
            onClick={() => {
              setOpenSearch((prev) => !prev);
            }}
          >
            {openSearch ? <IoMdClose /> : <IoSearchSharp />}
          </div>
        </div>
      </div>
      <div className="sm:hidden">
        {openSearch ? (
          <form
            className="w-full"
            onSubmit={() => {
              navigate(`/search/note/${searchNote}`);
            }}
          >
            <input
              className="w-[100%] p-2 border-2 border-black text-base outline-none"
              placeholder="Search for a note"
              type="text"
              onChange={(event) => {
                setSearchNote(event.target.value);
              }}
            />
          </form>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Header;
