// import { SlashCommandBuilder } from "@discordjs/builders";
// import { MessageActionRow, MessageButton } from "discord.js";
// import * as timer from 'node:timers/promises'
// const row = new MessageActionRow()
// .addComponents(
//     new MessageButton().setCustomId('main').setLabel('KILL').setStyle('DANGER')
// )
// module.exports = {
//     name: 'terminate',
//     data: new SlashCommandBuilder()
//     .setName('terminate').setDescription('Kills the bot.'), 
//     async execute(interaction) {
//         await interaction.deferReply();
//         await timer.setTimeout(4000);
//         await interaction.editReply({ content: 'Are you sure you want to kill the bot?', components: [row]})
//         if (interaction.customId === 'main') {
//             interaction.editReply('Bot is terminated.')
//             process.exit()
//         }
//     }
// }
