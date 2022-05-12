import { SlashCommandBuilder } from '@discordjs/builders';

module.exports = {
	name: 'ping',
	data: new SlashCommandBuilder()
		.setName('ping').setDescription('Ping the bot and it will reply \'Pong!\''),
	async execute(interaction) {
		await interaction.reply('Pong!');
	},
};