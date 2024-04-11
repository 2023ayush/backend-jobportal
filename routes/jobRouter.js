import express from "express";
import {
  postJob,
  getAllJobs,
  getmyJobs,
} from "../controllers/jobcontroller.js";
import { isAuthorized } from "../middlewares/auth.js";
const router = express.Router();
router.post("/post", isAuthorized, postJob);
router.get("/getall", isAuthorized, getAllJobs);
router.get("/getmyjob", isAuthorized, getmyJobs);
export default router;
