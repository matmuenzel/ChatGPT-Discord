require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const { Configuration, OpenAIApi } = require('openai');

// Prepare Discord-API
const client = new Client({ intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
]})

client.login(process.env.DISCORD_TOKEN);
console.log("Discord connected.");

// Prepare OpenAI API
const configuration = new Configuration({
    organization: process.env.OPENAI_ORG,
    apiKey: process.env.OPENAI_KEY
});
const openai = new OpenAIApi(configuration);

// Check Discord messages
client.on('messageCreate', async function(message) {
    try {
        if(message.author.bot) return;

        const gptResponse = await openai.createCompletion({
            model: "davinci",
            prompt: `ChatGPT is a friendly discord chatbot with a sense of humor. \n\
            ChatGPT: Hello, how u doing? \n\
            ${message.author.username}: ${message.content} \n\
            ChatGPT:`,
            temperature: 0.9,
            max_tokens: 100,
        })
        message.reply(`${gptResponse.data.choices[0].text}`);
        return;
    }
    catch(err){
        console.log(err);
    }
})