import dotenv from 'dotenv';
import mysql from 'mysql'

const initDb = async () => {
    try {
        return await mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "exampleDB"
        })
    } catch (error) {
        console.log(`dbInit :: error: ${error}`);
        throw error
    }
}

export default initDb;