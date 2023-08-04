require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const { Configuration, OpenAIApi } = require("openai");

// set the view engine to ejs
app.use(express.static("public"));
app.use(express.json());

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.post("/", async (req, res) => {
  const userPrompt = req.body.userPrompt;
  try {
    const response = await openai.createImage({
      prompt: userPrompt,
      n: 3,
      size: "1024x1024",
    });
    return res.status(201).json(response);
  } catch (err) {
    return res.status(502).json({ message: "Something went wrong." });
  }
});

//.............server..........................

app.listen(process.env.PORT || 5500, () => {
  console.log("Server is Running...");
});
