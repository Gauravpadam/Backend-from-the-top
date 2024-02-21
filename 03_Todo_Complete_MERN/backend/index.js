import express from "express";
import cors from "cors";
import initDb from "./DB/dbInit.js";

const app = express();
app.use(cors({
  origin: '*',
  optionsSuccessStatus: 200
})) // Cors boiler plate

app.use(express.json()) // magic middleware to parse json data in crud requests

const db = await initDb()
.then((res) => res)



app.get("/", (req, res) => {
  const sql = "SELECT * FROM todos";

  db.query(sql, (err, data) => { // sql typo fixed
    if (err) return res.json(err);
    return res.json(data)
  })
})

app.post("/makeTodo", (req, res) => {
  console.log(req.body);
  const sql = "INSERT INTO todos (serial_no, todo) VALUES (?, ?)" // query refactored for ease of understanding
  const values = [
    req.body.serial_no,
    req.body.todo
  ]
  db.query(sql, values, (err, data) => { // changed according to query refactor
    if (err) return res.json(`POST REQ :: error: ${err}`);
    return res.json(data)
  })
})

app.post("/removeTodo", (req, res) => {
  const sql = `DELETE FROM todoMern WHERE "serial_no"=(?)`;
  const val = req.body.serial_no

  db.query(sql, val, (err, data) => {
    if(err) return res.json(`POST REQ :: error: ${err}`);
    return res.json(data);
  })
})

app.listen(1414, () => {
  console.log("Todo listening on port 1414");
})