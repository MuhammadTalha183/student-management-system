// // import  pool  from "pg";
// // import dotenv from "dotenv";

// // dotenv.config();

// // const pool = new Pool({
// //     connectionString: process.env.DATABASE_URL,
// //     ssl:{
// //         rejectUnauthorized: false
// //     }
// // })


// // // test conection 
// // pool.connect()
// // .then(()=>console.log("✅ DB Connected Successfully "))
// // .catch((err) => console.error("❌ DB Connection Failed ", err));

// // export default {pool};

// import { Pool } from "pg";
// import dotenv from "dotenv";
// dotenv.config();

// const pool = new Pool({
//     connectionString: process.env.DATABASE_URL,
//     ssl: {
//         rejectUnauthorized: false,
//     },
// });

// // test connection
// pool.connect()
//     .then(() => console.log("✅ DB Connected"))
//     .catch((err) => console.error("❌ DB Connection Error", err));

// export default { pool };


import pkg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pkg;

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

// test connection
pool.connect()
    .then(() => console.log("✅ DB Connected"))
    .catch(err => console.log("❌ DB Error", err));

export default pool;