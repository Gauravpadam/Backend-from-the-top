// express can make backends in less time

require('dotenv').config()
const express = require('express')
const app = express()
// const port = 3000
const port = process.env.PORT

app.get('/' , (req, res) => {
    res.send("Hello from backend!")
})

app.get('/gp', (req, res) => {
    res.send("Hello gp!")
})

app.listen(port, () => {
    console.log(`Express is listening on port ${port}`);
})