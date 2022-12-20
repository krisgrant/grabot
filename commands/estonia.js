const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('estonia')
		.setDescription('best country'),
	async execute(interaction) {
		await interaction.reply('EESTI #1 🇪🇪🇪🇪🇪🇪🇪🇪🇪🇪🇪🇪🇪🇪🇪🇪🇪🇪🇪🇪 💯💯💯🔥🔥🔥');
	},
};
