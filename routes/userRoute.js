const express = require('express')
const User = require('../models/userModel')
const app = express.Router()

app.post('/login', async (req, res) => {
    try {
        const result = await User.findOne({
         username: req.body.username, 
         password: req.body.password })
         
        if (result) {
            res.send(result)
        } else{
            res.status(400).json('Login Failed')
        }
    } catch (error) {
        res.status(400).json(error)
    }
})

app.post('/register', async (req, res) => {
    try {
        //new user being created by the request body
        const newuser = new User(req.body)
        //now save new user
        await newuser.save()
        {
            res.send("Registration Successful")
        }
    } catch (error) {
        res.status(400).json(error)
    }
})

app.post('/update', async (req, res) => {
    try {
        await User.findOneAndUpdate({ _id: req.body._id}, req.body);
        const user = await User.findOne({_id: req.body._id})
        res.send(user)
    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = app