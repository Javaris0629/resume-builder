const mongoose = require('mongoose')

const url = `mongodb+srv://javaris:tavel@javaris-cluster.iqyy0s2.mongodb.net/resume-db`

mongoose.connect(url, {useUnifiedTopology: true, useNewUrlParser: true})

const connection = mongoose.connection

//creating messages when connected 
connection.on('connected', () => {
    console.log("MongoDB Connection Successfull")
})

connection.on('error', (error) => {
    console.log(error)
})