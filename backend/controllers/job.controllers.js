import { JOB } from "../models/job.models.js";
import asyncHandler from "express-async-handler";

//create a new job
export const createJob = asyncHandler(async (req, res) => {
  try {
    res.send("job created successfully");
  } catch (error) {
    throw new Error(error);
  }
});

//get all jobs
export const getAllJobs = asyncHandler(async (req, res) => {
  try {
    res.send("all jobs created successfully");
  } catch (error) {
    throw new Error(error);
  }
});
