import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    index: true,
  },
});

export const JOB = mongoose.model("Job", jobSchema);
