import express from "express";
import { addstudent } from "../controllers/studentController.js";

const router = express.Router();

router.post("/add-student", addstudent);

export default router;