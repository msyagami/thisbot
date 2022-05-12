//deprecated 

// import { REST } from "@discordjs/rest";
// import { Routes } from 'discord-api-types/v9';
// import * as cf from "./config.json";
// import * as fs from 'node:fs';
// import * as path from 'node:path';
// import 'dotenv/config';

// const token = process.env.BOT_TOKEN;

// const commands = [
//     // new SlashCommandBuilder().setName('ping').setDescription('Ping the bot and it will reply \'Pong!\''),
//     // new SlashCommandBuilder().setName('boop').setDescription('Complements the bot.'),
//     // new SlashCommandBuilder().setName('serverinfo').setDescription('Checks the server\'s info')
// ]

// const commandFiles = fs.readdirSync(path.resolve(__dirname, 'commands')).filter(file => file.endsWith('.js'));

// for (const file of commandFiles) {
//     const command = require(`./commands/${file}`)
//     commands.push(command.data.toJSON());
// }

//     // .map(c => c.toJSON());

// const rest = new REST({ version: '9' }).setToken(token);

// (async () => {
//     try {
//         console.log('Initiaing Application Slash Commands...')
//         await rest.put(Routes.applicationGuildCommands(cf.clientId, cf.guildId), {body: commands})
//         console.log('Applcation\'s Slash Commands are inititated.')
//     }
//     catch (e) {
//         console.error(e);
//     }
// } )();

// // rest.put(Routes.applicationGuildCommands(cf.clientId, cf.guildId), { body: commands })
// // .then(() => console.log('Commands set!')).catch(console.error);