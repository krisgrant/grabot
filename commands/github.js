const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('source')
		.setDescription('Sends the bot\'s Github link!'),
	async execute(interaction) {
		const embed = new EmbedBuilder()
			.setTitle('GitHub')
			.setURL('https://github.com/krisgrant/grabot')
			.setColor('#161B22');
		// interaction.guild is the object representing the Guild in which the command was run
		await interaction.reply({
			content: 'This project is on Github! Go check it out!',
			embeds: [embed],
		});
	},
};
