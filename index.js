require('dotenv').config()
const express = require('express')
const app = express()
PORT = 5000;

const user = [
    {
        "name": 'Aryan Raj',
        "email": 'arajjnv7@gmail.com'
    },
    {
        "name": 'Anushka Joshi',
        "email": 'anushkajoshi999@gmail.com'
    }
    
]


app.get('/', (req, res) => {
    res.send("Welcome to API")
})

app.get('/login', (req, res) => {
    res.send('Hello Chutiye')
})
app.get('/user', (req, res) => {
    res.json(user)
})


app.listen(process.env.PORT, () => {
    console.log(`App is listening on port ${process.env.PORT}`)
})