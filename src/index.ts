/* eslint-disable @typescript-eslint/no-var-requires */
import { Client, Collection, Intents } from 'discord.js';
import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';
import 'dotenv/config';
import * as cf from './config.json';
import * as fs from 'node:fs';
import * as path from 'node:path';

const token = process.env.BOT_TOKEN;

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

console.log(`ThisBot version ${cf.version}.`);

const commands = [];

client.commands = new Collection();

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

const rest = new REST({ version: '9' }).setToken(token);

(async () => {
	try {
		console.log('Initiaing Application Slash Commands...');
		await rest.put(Routes.applicationGuildCommands(cf.clientId, cf.guildId), { body: commands });
		console.log('Applcation\'s Slash Commands are inititated.');
	}
	catch (e) {
		console.error(e);
	}
}) ();


client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;
	if(!interaction.isButton) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

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