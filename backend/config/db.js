import { pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl:{
        rejectUnauthorized: flase
    }
})


// test conection 
pool.connect()
.then(()=>console.log("✅ DB Connected Successfully "))
.catch((err) => console.error("❌ DB Connection Failed ", err));

export default pool;