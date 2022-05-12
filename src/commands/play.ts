import { SlashCommandBuilder } from "@discordjs/builders";
import { MessageActionRow, MessageButton } from "discord.js";
import * as timer from 'node:timers/promises'

const row = new MessageActionRow()
.addComponents(
    new MessageButton().setCustomId('main').setLabel('Press me!').setStyle('SUCCESS')
)

module.exports = {
    name: 'play',
    data: new SlashCommandBuilder()
    .setName('play').setDescription('Complements the bot.'), 
    async execute(interaction) {
        await interaction.deferReply();
        await timer.setTimeout(4000);
        await interaction.editReply({ content: 'Now Playing...', components: [row]})
    }
}