"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const builders_1 = require("@discordjs/builders");
module.exports = {
    name: 'ping',
    data: new builders_1.SlashCommandBuilder()
        .setName('ping').setDescription('Ping the bot and it will reply \'Pong!\''),
    async execute(interaction) {
        await interaction.reply('Pong!');
    },
};
