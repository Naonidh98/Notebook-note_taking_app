import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//pages
import Home from "./pages/Home";
import ShowNotes from "./pages/ShowNotes";
import CreateNote from "./pages/CreateNote";
import EditNote from "./pages/EditNote";
import FullNote from "./pages/FullNote";
import SearchNote from "./pages/SearchNote";

const App = () => {
  return (
    <div className="w-[100vw] h-[100vh] overflow-x-hidden">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/note/create" element={<CreateNote />} />
          <Route path="/note/edit/:id" element={<EditNote />} />
          <Route path="/note/:id" element={<ShowNotes />} />
          <Route path="/note/show/:id" element={<FullNote />} />
          <Route path="/search/note/:desc" element={<SearchNote />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
