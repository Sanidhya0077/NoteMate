import React from "react";
import axios from "axios";
import toast from "react-hot-toast";
import "../styling/Modal.css";

const DeleteNodeModal = ({ setToggleDeleteModal, id, setNotes, notes }) => {
  const handleDelete = async () => {
    await axios.delete(`http://localhost:5001/api/v1/notes/${id}`);
    setNotes(notes.filter((n) => n._id !== id));
    toast.success("Note Deleted Succesfully");
    setToggleDeleteModal(false);
  };

  return (
    <>
      <div className="modal-overlay">
        <div className="modal-content">
          <p>You sure you want to Delete this note</p>
          <div className="modal-actions">
            <button onClick={handleDelete}>Yes</button>
            <button
              onClick={() => {
                setToggleDeleteModal(false);
              }}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteNodeModal;
