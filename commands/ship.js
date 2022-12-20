const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ship')
		.setDescription(
			'Input 2 people and it will give you a (totally not random) percentage of how well they fit together',
		)
		.addStringOption((option) =>
			option
				.setName('1st_person')
				.setDescription('Person to be shipped with someone')
				.setRequired(true),
		)
		.addStringOption((option) =>
			option
				.setName('2nd_person')
				.setDescription('Person who you want to ship them with')
				.setRequired(true),
		),
	async execute(interaction) {
		const firstPerson = interaction.options.getString('1st_person');
		const secondPerson = interaction.options.getString('2nd_person');
		const randomNum = Math.floor(Math.random() * 100);

		await interaction.reply(
			`**${firstPerson}** and **${secondPerson}** are **${randomNum}%** Compatible!`,
		);
	},
};
