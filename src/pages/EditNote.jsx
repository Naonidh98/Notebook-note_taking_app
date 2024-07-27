import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import HomeRoute from "../components/HomeRoute";
import { editNote } from "../operations/CRUD_Operations";

const EditNote = () => {
  //useForm hook
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm();

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("notes")) || [];

    const editData = data.find((item) => {
      if (item.id == params.id) {
        return item;
      }
    });

    if (editData) {
      setValue("title", editData.title);
      setValue("content", editData.content);
      setValue("id", editData.id);
      setValue("createdAt", editData.createdAt);
    }
  }, []);

  function submitHandler(formdata) {
    editNote(formdata);
    navigate("/");
  }

  return (
    <div className="w-full">
      <HomeRoute />

      <div className="w-[90%] max-w-[1280px] mx-auto mt-4">
        <h1 className="font-roboto text-xl sm:text-2xl md:text-4xl  font-semibold">
          {" "}
          Edit Note
        </h1>
        <form
          className="max-w-[350px] mx-auto flex flex-col gap-4 mt-[25px]"
          onSubmit={handleSubmit(submitHandler)}
        >
          {/* title */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="title"
              className="font-poppins font-bold text-lg md:text-xl"
            >
              Title :
            </label>
            <input
              id="title"
              className="w-full rounded bg-transparent text-base outline-none border-2 p-2 shadow-xl"
              type="text"
              placeholder="Title of the note"
              {...register("title", { required: true })}
            />
            <div>
              {errors.title && (
                <div className="text-base text-red-600">
                  Required <sup>*</sup>
                </div>
              )}
            </div>
          </div>
          {/* Content */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="content"
              className="font-poppins font-bold text-lg md:text-xl"
            >
              Content :
            </label>
            <textarea
              id="content"
              rows={5}
              type="text"
              placeholder="Description of the note"
              className="w-full bg-transparent rounded text-base outline-none border-2 p-2 shadow-xl"
              {...register("content", { required: true })}
            />
            {errors.content && (
              <div className="text-base text-red-600">
                Required <sup>*</sup>
              </div>
            )}
          </div>
          {/* button */}
          <button className="w-full bg-[#023047] text-white font-roboto font-semibold rounded-full mt-2 py-2">
            Edit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditNote;
