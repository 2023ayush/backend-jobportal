import express from "express";
import {
  postJob,
  getAllJobs,
  getmyJobs,
  updateJob,
  deleteJob,
} from "../controllers/jobcontroller.js";
import { isAuthorized } from "../middlewares/auth.js";
const router = express.Router();
router.post("/post", isAuthorized, postJob);
router.get("/getall", isAuthorized, getAllJobs);
router.get("/getmyjob", isAuthorized, getmyJobs);
router.put("/update/:id", isAuthorized, updateJob);
router.delete("/delete/:id", isAuthorized, deleteJob);

export default router;
