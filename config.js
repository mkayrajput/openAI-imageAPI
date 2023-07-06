require('dotenv').config()
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);
const generateImages = async (userPrompt) => {
  try {
    const response = await openai.createImage({
      prompt: userPrompt,
      n: 3,
      size: "1024x1024",
    });
    return JSON.stringify(response)
  } catch (err) {
    const error = new Error('Something went wrong');
    return error
  }
}
module.exports = generateImages