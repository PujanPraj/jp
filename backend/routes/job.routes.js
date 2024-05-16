import express from "express";
import {
  createJob,
  deleteJob,
  getAllJobs,
  getJobById,
  updateJob,
} from "../controllers/job.controllers.js";
import { upload } from "../middlewares/multer.middleware.js";
const router = express.Router();

router.route("/").post(upload.single("image"), createJob).get(getAllJobs);
router
  .route("/:id")
  .put(upload.single("image"), updateJob)
  .delete(deleteJob)
  .get(getJobById);

export default router;
