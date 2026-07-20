import express from "express";
import { addstudent , getStudents ,getStudentByIdOrName} from "../controllers/studentController.js";

const router = express.Router();

router.post("/add-student", addstudent);
router.get("/getStudents", getStudents);
// router.get("/getStudentById/:id", getStudentById);
router.get('/search', getStudentByIdOrName);

export default router;