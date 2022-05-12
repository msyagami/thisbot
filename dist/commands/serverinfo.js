"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const builders_1 = require("@discordjs/builders");
module.exports = {
    name: 'serverinfo',
    data: new builders_1.SlashCommandBuilder()
        .setName('serverinfo')
        .setDescription('Checks the server\'s info'),
    async execute(interaction) {
        await interaction.reply(`Server name: ${interaction.guild.name}. Server ID: ${interaction.guild.id}`);
    }
};
