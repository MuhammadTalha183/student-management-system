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


// import pkg from "pg";
// import dotenv from "dotenv";

// dotenv.config();

// const { Pool } = pkg;

// const pool = new Pool({
//     connectionString: process.env.DATABASE_URL,
//     ssl: {
//         rejectUnauthorized: false
//     }
// });

// // test connection
// pool.connect()
//     .then(() => console.log("✅ DB Connected"))
//     .catch(err => console.log("❌ DB Error", err));

// export default pool;

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

// 1. CRITICAL CRASH PROTECTION: Catch unexpected errors on idle connections
pool.on('error', (err) => {
    console.error('Unexpected error on idle database client:', err.message);
    // Keeping this event listener alive stops Node.js from crashing the server
});

// 2. FIXED TEST CONNECTION: Instantly release the test client back to the pool
pool.connect()
    .then(client => {
        console.log("✅ DB Connected");
        client.release(); // This prevents the connection from leaking and getting reset!
    })
    .catch(err => {
        console.error("❌ DB Connection Error:", err.message);
    });

export default pool;
