import React, { useEffect, useState } from "react";
import "../styling/modal.css";
import toast from "react-hot-toast";
import axios from "axios";

const NoteEditModal = ({
  open,
  setOpen,
  title,
  content,
  id,
  notes,
  setNotes,
}) => {
  const [editedTitle, setEditedTitle] = useState(title || "");
  const [editedContent, setEditedContent] = useState(content || "");
  useEffect(() => {
    setEditedContent(editedContent);
    setEditedTitle(editedTitle), [];
  });
  if (!open) return null;

  const handleSave = async () => {
    try {
      const res = await axios.put(`http://localhost:5001/api/v1/notes/${id}`, {
        title: editedTitle,
        content: editedContent,
      });
      if (editedContent.length == 0) {
        toast.error("Note can't be empty");
      } else {
        setNotes([...notes, res.data]);
        toast.success("Note updated successfully");
        setOpen(false);
      }

      // OPTIONAL: call a parent callback or re-fetch notes so UI reflects changes
    } catch (err) {
      console.error(err);
      toast.error("Failed to update note");
    }
  };
  //   condition to make the component appear and disappear
  return (
    // classname modal overlay helps to make the pop-up
    <div
      className="modal-overlay bg-slate-800 z-50"
      onClick={() => setOpen(false)}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-xl py-4">
          <b>Title</b>
        </h2>
        <textarea
          value={editedTitle}
          onChange={(e) => {
            setEditedTitle(e.target.value);
          }}
          className="bg-white text-black"
        ></textarea>
        <h2 className="text-xl py-4">
          <b>Content</b>
        </h2>
        <textarea
          value={editedContent}
          onChange={(e) => {
            setEditedContent(e.target.value);
          }}
          className="bg-white text-black"
          required
        ></textarea>
        <div className="modal-actions">
          <button onClick={() => setOpen(false)}>Cancel</button>
          <button onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default NoteEditModal;
