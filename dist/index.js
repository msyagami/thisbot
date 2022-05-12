"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-var-requires */
const discord_js_1 = require("discord.js");
const rest_1 = require("@discordjs/rest");
const v9_1 = require("discord-api-types/v9");
require("dotenv/config");
const cf = __importStar(require("./config.json"));
const fs = __importStar(require("node:fs"));
const path = __importStar(require("node:path"));
const token = process.env.BOT_TOKEN;
const client = new discord_js_1.Client({ intents: [discord_js_1.Intents.FLAGS.GUILDS] });
console.log(`ThisBot version ${cf.version}.`);
const commands = [];
client.commands = new discord_js_1.Collection();
const commandFiles = fs.readdirSync(path.resolve(__dirname, 'commands')).filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.data.name, command);
    commands.push(command.data.toJSON());
}
// client.once('ready', () => {
//     console.log(`Ready at ${date}`)
// })
const eventFiles = fs.readdirSync(path.resolve(__dirname, 'events')).filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
    const event = require(`./events/${file}`);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args));
    }
    else {
        client.on(event.name, (...args) => event.execute(...args));
    }
}
const rest = new rest_1.REST({ version: '9' }).setToken(token);
(async () => {
    try {
        console.log('Initiaing Application Slash Commands...');
        await rest.put(v9_1.Routes.applicationGuildCommands(cf.clientId, cf.guildId), { body: commands });
        console.log('Applcation\'s Slash Commands are inititated.');
    }
    catch (e) {
        console.error(e);
    }
})();
client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand())
        return;
    if (!interaction.isButton)
        return;
    const command = client.commands.get(interaction.commandName);
    if (!command)
        return;
    try {
        await command.execute(interaction);
    }
    catch (e) {
        console.error(e);
        await interaction.reply({ content: `Oops! Error excecuting command! ELOG:${e}`, ephemeral: true });
    }
    // const {commandName} = interaction;
    // if (commandName === 'ping') {
    //     await interaction.reply('Pong!')
    // } else if (commandName === 'boop') {
    //     await interaction.reply('Aww!')
    // } else if (commandName === 'serverinfo') {
    //     await interaction.reply(`Server name: ${interaction.guild.name}. Server ID: ${interaction.guild.id}`)
    // }
});
client.login(token);
