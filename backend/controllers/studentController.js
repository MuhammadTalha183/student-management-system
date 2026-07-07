import pool from "../config/db.js";

export const addstudent = async (req, res) => {

    console.log(req.body);
    try {

        const {
            fullname,
            email,
            phone,
            course,
            gender
        } = req.body;

        const query = `
            INSERT INTO students
            (fullname, email, phone, course, gender)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *
        `;

        const values = [
            fullname,
            email,
            phone,
            course,
            gender
        ];

        const result = await pool.query(query, values);

        res.status(201).json({
            success: true,
            message: "Student added successfully",
            student: result.rows[0]
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

export const getStudents = async (req , res) =>{
    try {
        const getAllStudents = await pool.query ("select * from students");
        res.json(getAllStudents.rows);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            Success: false,
            message: error.message
        })
    }
    }

    // dynamic student fetching by id 

export const getStudentById = async (req, res) => {
    const { id } = req.params;
    try {
        const getStudent = await pool.query("SELECT * FROM students WHERE id = $1", [id]);
        if (getStudent.rows.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Student not found"
            });
        }
        res.json(getStudent.rows[0]);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


