// import pool from "../config/db.js";

// export const addstudent = async(req,res)=>{
//     try{
//         const {fullname , email , phone , course , gender } = req.body

//         const query = `
//         insert into students
//         (fullname , email , phone , course , gender )
//         values (${fullname}, ${email} , ${phone} , ${course} , ${gender})`
//          const values = [
//             fullname,
//             email,
//             phone,
//             course,
//             gender
//         ];
//         const result = await pool.query(query, values);

//         res.status(201).json({
//             success : true,
//             message : "Student added successfully",
//             student : result.rows[0]
//         });

//     }catch (error) {
//         console.log(error);

//         res.status(500).json({
//             success: false,
//             message: error.message
//         });
//     }

// }


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