import React from "react";
import Navbar from "../components/Navbar";
import { useState } from "react";
import RateLimiterUI from "../components/RateLimiterUI";
import { useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import NoteEditModal from "../components/NoteEditModal";
import NoteCard from "../components/NoteCard";
import "../styling/HomePage.css";

const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredItems, setFilteredItems] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);

  const openForEdit = (note) => {
    setSelectedNote(note);
    setOpen(true);
  };

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await axios.get("http://localhost:5001/api/v1/notes");
        setNotes(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchNotes();
  }, []);
  return (
    <div className="min-h-screen">
      <Navbar notes={notes} setNotes={setNotes} />
      <div className="notecard">
        {notes && notes.length > 0 ? (
          notes.map((note) => (
            <NoteCard
              key={note._id}
              notes={notes}
              id={note._id}
              createdAt={note.createdAt}
              content={note.content}
              title={note.title}
              setNotes={setNotes}
            />
          ))
        ) : (
          <p>No notes Present</p>
        )}
      </div>
      {isRateLimited && <RateLimiterUI />}
    </div>
  );
};

export default HomePage;
