import mongoose from "mongoose";

const scoreSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  game: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Score", scoreSchema);
