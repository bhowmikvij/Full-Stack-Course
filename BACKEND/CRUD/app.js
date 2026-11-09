const express = require("express");
const app = express();

const userModel = require('./usermodel');

app.get('/', (req, res) => {
    res.send("hey");
})

app.get('/create', async (req, res) => {
    let createduser = await userModel.create({
        name: "Bhowmiklies",
        email: "bhowmiklies@gmail.com",
        username: "BHoqmiklies"
    })

    res.send(createduser);
})

app.get('/update', async (req, res) => {
    let updateduser =  await userModel.findOneAndUpdate({username: "BHoqmik"}, {name: "Bhowmik Vij"}, { new: true })
    res.send(updateduser);
})

app.get("/read", async (req, res) => {
    let users = await userModel.find(); // find gives array and finfOne gives object
    res.send(users);
})

app.get("/delete", async (req, res) => {
    let users = await userModel.findOneAndDelete({username: "BHoqmik"}); // find gives array and finfOne gives object
    res.send(users);
})

app.listen(3000);
