require('dotenv').config()
const express = require('express')
const app = express()
PORT = 5000;




app.get('/', (req, res) => {
    res.send("HEllo")
})

app.get('/login', (req, res) => {
    res.send('<h1>Chutiya</h1>')
})
app.get('/anushka', (req, res) => {
    res.send('I love you Anushka')
})


app.listen(process.env.PORT, () => {
    console.log(`App is listening on port ${process.env.PORT}`)
})