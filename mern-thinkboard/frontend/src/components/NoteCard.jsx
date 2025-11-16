import React from "react";
import { useState } from "react";
import NoteEditModal from "./NoteEditModal";
import axios from "axios";
import toast from "react-hot-toast";
import DeleteNodeModal from "./DeleteNodeModal";

const NoteCard = ({ title, content, createdAt, id, notes, setNotes }) => {
  // is deleted stores the state of the deleted specific note card
  const [toggleDeleteModal, setToggleDeleteModal] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [open, setOpen] = useState(false);
  if (isDeleted) return null;
  return (
    <>
      {/* Card component from Tailwind UI */}
      <div key={id} className="card w-96 bg-base-100 card-sm shadow-sm -z-0">
        <div className="card-body ">
          <h1 className="text-2xl">{title}</h1>
          <p>{content}</p>
          <span>Created At : </span>
          <small>{new Date(createdAt).toLocaleString()}</small>
          {/* <button onClick={() => openForEdit(note)}>Edit</button> */}
          <br></br>
          <div className="flex flex-row">
            <button
              className="bg-red-400 rounded-lg p-1.5 m-2"
              onClick={async () => {
                setToggleDeleteModal(true);
              }}
            >
              Delete Note
            </button>
            {toggleDeleteModal && (
              <DeleteNodeModal
                id={id}
                setToggleDeleteModal={setToggleDeleteModal}
                setNotes={setNotes}
                notes={notes}
              />
            )}
            <button
              className="bg-green-500 p-1.5 m-2 rounded-lg"
              onClick={() => {
                setOpen(true);
              }}
            >
              Edit Note
            </button>
          </div>
        </div>
        <NoteEditModal
          open={open}
          setOpen={setOpen}
          id={id}
          title={title}
          content={content}
          notes={notes}
          setNotes={setNotes}
        />
      </div>
    </>
  );
};

export default NoteCard;
