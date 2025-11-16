import React, { useState } from "react";

import "./App.css";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import NoteDetailPage from "./pages/NoteDetailPage";
// import { ToastBar, Toaster, toast } from "react-hot-toast";
import toast from "react-hot-toast";
import { Routes, Route } from "react-router";

const App = () => {
  return (
    <div data-theme="forest">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        {/* <Route path="/create" element={<CreatePage />}></Route> */}
        <Route path="/note/:id" element={<NoteDetailPage />}></Route>
      </Routes>
    </div>
  );
};

export default App;
