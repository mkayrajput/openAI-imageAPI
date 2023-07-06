require('dotenv').config()
const express = require("express")
const app = express();
const path = require('path');
const generateImage = require("./config.js");
const { error } = require('console');

// set the view engine to ejs
app.use(express.static('public'))
app.use(express.json());



app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
})
app.post("/", async(req, res) => {
    const userPrompt = (req.body.userPrompt)
    const response = await generateImage(userPrompt)
    res.send(response)
})




//.............server..........................

app.listen(process.env.PORT || 5500, () => {
    console.log("Server is Running...")
})
