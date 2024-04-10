import express from "express";
import { postJob, getAllJobs } from "../controllers/jobcontroller.js";
import { isAuthorized } from "../middlewares/auth.js";
const router = express.Router();
router.post("/post", isAuthorized, postJob);
router.get("/get", isAuthorized, getAllJobs);
export default router;
