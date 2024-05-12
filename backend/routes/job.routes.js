import express from "express";
import { createJob, getAllJobs } from "../controllers/job.controllers.js";
const router = express.Router();

router.route("/").post(createJob).get(getAllJobs);

export default router;
