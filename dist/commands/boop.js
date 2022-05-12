"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const builders_1 = require("@discordjs/builders");
module.exports = {
    name: 'boop',
    data: new builders_1.SlashCommandBuilder()
        .setName('boop').setDescription('Complements the bot.'),
    async execute(interaction) {
        await interaction.reply('Aww!');
    }
};
