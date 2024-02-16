import express from "express";
import cors from "cors";
import initDb from "./DB/dbInit.js";

const app = express();
app.use(cors())

const db = await initDb()
.then((res) => res)



app.get("/", (req, res) => {
  const sql = "SELECT * FROM todos";

  db.query(sq1, (err, data) => {
    if (err) return res.json(err);
    return res.json(data)
  })
})

app.post("/makeTodo", (req, res) => {
  const sql = "INSERT INTO todos VALUES (?)"
  const values = [
    req.body.serial_no,
    req.body.todo
  ]
  db.query(sql, [values], (err, data) => {
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