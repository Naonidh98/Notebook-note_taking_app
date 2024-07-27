import { GenerateDate } from "../utils/GenerateDate";
import { GenerateUniqueId } from "../utils/GenerateUniqueId";
//create note
export const createNote = (data) => {
  //new note
  const newNote = [
    {
      id: GenerateUniqueId(),
      title: data?.title,
      content: data?.content,
      createdAt: GenerateDate(),
      updatedAt: GenerateDate(),
      key: new Date(Date.now()),
    },
  ];

  const prevData = JSON.parse(localStorage.getItem("notes")) || [];
  const updatedData = [...prevData, ...newNote];

  updatedData.sort((a, b) => Date.parse(b.key) - Date.parse(a.key));

  //add to local storage
  localStorage.setItem("notes", JSON.stringify(updatedData));
};

//edit note
export const editNote = (data) => {
  //update date of note
  data.updatedAt = GenerateDate();
  //update key
  data.key = new Date(Date.now());

  const prevData = JSON.parse(localStorage.getItem("notes")) || [];

  //console.log(prevData);

  let updatedData = [];
  prevData.forEach((item) => {
    if (item.id === data.id) {
      updatedData.push(data);
    } else updatedData.push(item);
  });

  //console.log(updatedData);

  updatedData.sort((a, b) => Date.parse(b.key) - Date.parse(a.key));

  //add to local storage
  localStorage.setItem("notes", JSON.stringify(updatedData));
};

//delete note
export const deleteNote = (id) => {
  const prevData = JSON.parse(localStorage.getItem("notes")) || [];

  let updatedData = [];
  prevData.forEach((item) => {
    if (item.id !== id) {
      updatedData.push(item);
    }
  });


  updatedData.sort((a, b) => Date.parse(b.key) - Date.parse(a.key));

  //add to local storage
  localStorage.setItem("notes", JSON.stringify(updatedData));

  window.location.reload()
};
