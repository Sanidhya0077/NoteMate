import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

const CreateNodeModal = ({ setOpenCreateModal, setNotes, notes }) => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("Empty Title");
  return (
    <>
      <div className="modal-overlay" onClick={() => setOpenCreateModal(false)}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <header className="text-2xl text-white">
            <b>Create Your Note</b>
          </header>
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
            <div className="modal-actions">
              <button
                className="btn btn-primary"
                onClick={async () => {
                  if (content.length > 0) {
                    const res = await axios.post(
                      "http://localhost:5001/api/v1/notes",
                      {
                        content,
                        title,
                      }
                    );
                    setNotes([...notes, res.data]);
                    toast.success("Note Created Sucessfully");
                    setOpenCreateModal(false);
                  } else {
                    toast.error("Enter Note Content");
                  }
                }}
              >
                Save Note
              </button>
              <button
                className="btn btn-primary"
                onClick={() => {
                  setOpenCreateModal(false);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateNodeModal;
