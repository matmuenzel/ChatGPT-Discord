# Discord Chatbot with OpenAI GPT Integration

A Discord chatbot that combines Discord.js with OpenAI's GPT-3 for engaging conversations.

## Prerequisites
- Node.js installed.
- Discord bot token.
- OpenAI API credentials (organization ID and API key).
## Installation
1. Clone this repo:

      `git clone https://github.com/matmuenzel/discord-gpt-chatbot.git`

3. Navigate to the project folder:
   
      `cd discord-gpt-chatbot`

5. Install dependencies:
   
      `npm install`

7. Create a .env file with your Discord token, OpenAI org ID, and API key:
   
      `DISCORD_TOKEN=your_discord_bot_token OPENAI_ORG=your_openai_organization_id OPENAI_KEY=your_openai_api_key`

## Usage
1. Start the bot:
   
    `npm start`

3. The bot will log "Discord connected." when it connects successfully.
4. Invite the bot to your Discord server with the necessary permissions.
5. Chat with the bot, and it will reply using GPT-3 generated responses.

## Configuration
Customize the bot's behavior in `index.js`. You can adjust Discord intents and GPT-3 model settings.
