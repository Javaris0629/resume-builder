const express = require('express')
const app = express()
const port = 5000
const dbConnect = require('./dbConnect')
app.use(express.json())
const userRoute = require('./routes/userRoute')

app.use('/api/user/', userRoute)
app.listen(port, () => console.log(`Server Started On Port ${port}!`))