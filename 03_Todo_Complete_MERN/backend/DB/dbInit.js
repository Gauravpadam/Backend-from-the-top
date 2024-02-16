import cors from 'cors';
import mysql from 'mysql';

const initDb = async () => {
  try {
    return await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "todoMern"
    })
  } catch (error) {
    console.log(`dbInit :: error: ${error}` );
    return false
  }
}

export default initDb

