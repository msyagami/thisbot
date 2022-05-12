import { SlashCommandBuilder } from "@discordjs/builders";

module.exports = {
    name: 'boop',
    data: new SlashCommandBuilder()
    .setName('boop').setDescription('Complements the bot.'), 
    async execute(interaction) {
        await interaction.reply('Aww!')
    }
}