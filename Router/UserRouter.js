const express = require("express");

const User = require("../models/User")

const router = express.Router();

// Create operation
router.post("/create", async (req, res) => {
    const { name, email, age } = req.body;  //-------------------{1}---------------------->
    
    try {
        const userData = await User.create({
            name: name,
            email: email,
            age: age
        });
    
        res.status(201).json({ success: true, alert: "User successfully created" });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
});

// Get operation
router.get('/', async (req, res) => {
    try {
        const allUsers = await User.find();
        res.status(200).json(allUsers);
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
});

//get single User by ID
router.get('/:id', async (req, res) => {
    const {id}=req.params;    //-------------------{2}---------------------->   ((1 user input se liya h) and (2 mein mongoDB se liya h) are different....)

    try {
        const SingleUsers = await User.findById({_id : id});
        res.status(200).json(SingleUsers);
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
});

//Delete
router.delete('/:id', async (req, res) => {
    const {id}=req.params;    //-------------------{2}---------------------->   ((1 user input se liya h) and (2 mein mongoDB se liya h) are different....)

    try {
        const SingleUsers = await User.findByIdAndDelete({_id : id});
        res.status(200).json(SingleUsers);
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
});

// // Delete One by One without ID
// router.delete('/', async (req, res) => {
//     try {
//         const allUsers = await User.findOneAndDelete();
//         res.status(200).json(allUsers);
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ success: false, message: "Server Error" });
//     }
// });

//Update
router.patch('/:id', async (req, res) => {
    const {id}=req.params;    //-------------------{2}---------------------->   ((1 user input se liya h) and (2 mein mongoDB se liya h) are different....)
    const { name, email, age } = req.body;
    try {
        const UpdateUsers = await User.findByIdAndUpdate(id,req.body,{new:true});
        res.status(200).json(UpdateUsers);
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
});

module.exports = router