import { SlashCommandBuilder } from "@discordjs/builders";

module.exports = {
    name: 'serverinfo',
    data: new SlashCommandBuilder()
    .setName('serverinfo')
    .setDescription('Checks the server\'s info'),
    async execute(interaction) {
        await interaction.reply(`Server name: ${interaction.guild.name}. Server ID: ${interaction.guild.id}`);
    }
}