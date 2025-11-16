import { Text } from "lucide-react";
import React from "react";
import toast from "react-hot-toast";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const CreatePage = () => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("Empty Title");
  const navigate = useNavigate();

  return (
    <>
      <header className="text-3xl">Create Your Note</header>
      <div>
        <input
          type="text"
          id="Enter your Title"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-100 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Title"
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          type="text"
          id="Enter your Input"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-100 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Content"
          required
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button
          className="btn btn-primary"
          onClick={async () => {
            if (content.length > 0) {
              await axios.post("http://localhost:5001/api/v1/notes", {
                content,
                title,
              });
              toast.success("Note Created Sucessfully");
            } else {
              toast.error("Enter Note Content");
            }
          }}
        >
          Save Note
        </button>
        <button className="btn btn-primary" onClick={() => navigate("/")}>
          Go to Homepage
        </button>
      </div>
    </>
  );
};

export default CreatePage;
