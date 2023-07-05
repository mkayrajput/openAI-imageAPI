require('dotenv').config()
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);
const generateImages = async (userPrompt) => {
  const response = await openai.createImage({
    prompt: userPrompt,
    n: 3,
    size: "1024x1024",
  });

  return JSON.stringify(response)
}
module.exports = generateImages