import express from 'express'
import cors from 'cors'
import initDb from './DB/dbInit.js'

const app = express()

app.use(cors())

// Calling the connection here

const db = await initDb()
.then(
    (res) => res
)

app.get('/people', (req, res) => {
    const sql = 'SELECT * FROM persons'
    db.query(sql, (err, data) => {
        if(err) return res.json(err);
        console.log(res);
        return res.json(data)

    })
})

app.listen(1414, () => {
    console.log('listening');
})
