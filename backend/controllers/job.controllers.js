import { JOB } from "../models/job.models.js";
import asyncHandler from "express-async-handler";
import {
  uploadOnCloudinary,
  deleteFromCloudinary,
} from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";

//create a new job
export const createJob = asyncHandler(async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      throw new Error("name is required");
    }

    const imageLocalPath = req.file.path;
    if (!imageLocalPath) {
      throw new Error("image is required");
    }

    const uploadedImage = await uploadOnCloudinary(imageLocalPath, "JPImages");
    if (!uploadedImage) {
      throw new Error("Failed to upload image to cloudinary");
    }

    const job = await JOB.create({
      name,
      image: uploadedImage.url,
    });

    res
      .status(201)
      .json(new ApiResponse(true, "Job created successfully", job));
  } catch (error) {
    throw new Error(error);
  }
});

//get all jobs
export const getAllJobs = asyncHandler(async (req, res) => {
  try {
    const jobs = await JOB.find();
    res
      .status(200)
      .json(new ApiResponse(true, "All jobs fetched successfully", jobs));
  } catch (error) {
    throw new Error(error);
  }
});

//get job by id
export const getJobById = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const job = await JOB.findById(id);
    if (!job) {
      throw new Error("Job not found");
    }

    res
      .status(200)
      .json(new ApiResponse(true, "Job fetched successfully", job));
  } catch (error) {
    throw new Error(error);
  }
});

//update job
export const updateJob = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const job = await JOB.findById(id);
  if (!job) {
    throw new Error("Job not found");
  }

  try {
    if (name) {
      job.name = name;
    }

    if (req.file) {
      if (job.image) {
        await deleteFromCloudinary(job.image);
      }

      const newImageLocalPath = req.file.path;
      if (!newImageLocalPath) {
        throw new Error("image is required");
      }
      const uploadedImage = await uploadOnCloudinary(
        newImageLocalPath,
        "JPImages"
      );
      if (!uploadedImage) {
        throw new Error("Failed to upload image to cloudinary");
      }

      job.image = uploadedImage.url;
    }

    const updatedJob = await job.save();

    res
      .status(200)
      .json(new ApiResponse(200, "Job updated successfully", updatedJob));
  } catch (error) {
    throw new Error(error);
  }
});

//delete job
export const deleteJob = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const job = await JOB.findById(id);

  if (!job) {
    throw new Error("Job not found");
  }

  try {
    if (job.image) {
      await deleteFromCloudinary(job.image);
    }

    await JOB.findByIdAndDelete(id);

    res.status(200).json(new ApiResponse(true, "Job deleted successfully", {}));
  } catch (error) {
    throw new Error(error);
  }
});
