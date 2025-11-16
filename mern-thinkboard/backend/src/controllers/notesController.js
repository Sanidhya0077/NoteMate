import Note from "../models/Note.js";

export const getAllNotes = async (_, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error in get all notes error", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getNote = async (req, res) => {
  try {
    const noteByID = await Note.findById(req.params.id);
    res.status(200).json(noteByID);
    if (!getNote) return res.status(404).json({ message: "Note not found" });
  } catch (error) {
    console.error("Error in getting this note", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    console.log(title, content);
    const newNote = new Note({ title, content });
    const savedNote = await newNote.save();
    res.status(201).json(savedNote);
  } catch (error) {}
};

export const updateNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true }
    );
    if (!updateNote) return res.status(404).json({ message: "Note not found" });
    res.status(200).json({ message: "Note Updated Successfully" });
  } catch (error) {}
};

export const deleteNote = async (req, res) => {
  try {
    await Note.findByIdAndDelete(req.params.id);
    if (!deleteNote) return res.status(404).json({ message: "Note not found" });
    res.status(200).json({ message: "Note deleted successfully!" });
  } catch (error) {
    console.error("Error in delete controller", error);
  }
};
