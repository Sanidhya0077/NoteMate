import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import ratelimiter from "./middleware/rateLimiter.js";
import cors from "cors";

dotenv.config();
// import the express library
const app = express();
// const cors = require("cors");
// After importing the library I assign it to express function

const PORT = process.env.PORT || 5001;

// middleware it allows to access json req bodies
app.use(cors());
app.use(express.json());
app.use(ratelimiter);

// Get method by entering URL
app.use("/api/v1/notes", notesRoutes);
// A good practice to first connect the DB instance and then start listening to the server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
  });
});

// Its very tough to manage all APIs in one page so we create different folders and divide them accordingly in large codebases
