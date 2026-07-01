import express from "express";
import { addstudent , getStudents} from "../controllers/studentController.js";

const router = express.Router();

router.post("/add-student", addstudent);
router.get("/getStudents", getStudents);

export default router;