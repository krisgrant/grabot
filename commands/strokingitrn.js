const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('strokingitrn')
		.setDescription('uh-huh'),
	async execute(interaction) {
		await interaction.reply(`I’m over here strokin my dick I got lotion on my dick rn I’m jus strokin my shit I’m horny as fuck man I’m a freak`);
	},
};