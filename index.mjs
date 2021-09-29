import fetch from "node-fetch";
require('dotenv').config();

const appID = process.env.appID;
const guildID = process.env.guildID;
const apiEndpoint = 
  `https://discord.com/api/v8/applications/${appID}/guilds/${guildID}/commands`;
const botToken = process.env.botToken;

const commandData = {
    name: "vmss",
    description: "command to start/stop vm",
    options: [
      {
        name: "action",
        description: "start/stop",
        type: 3,
        required: true,
        choices: [
          {
            name: "start",
            value: "start"
          },
          {
            name: "stop",
            value: "stop"
          },
          {
            name: "test",
            value: "test"
          },
        ],
      },
    ],
  };

  async function main() {

    const response = await fetch(apiEndpoint, {
    method: "post",
    body: JSON.stringify(commandData),
    headers: {
      Authorization: "Bot " + botToken,
      "Content-Type": "application/json",
    },
  });
  const json = await response.json();

  console.log(json);
}
main();