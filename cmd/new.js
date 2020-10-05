module.exports = {
	name: "new",
	description: "Create a new private channel",
	requirements: "none",
	category: "Channels",
	run: async (bot, message, args) => {
		message.guild.channels.create('ticket-' + message.author.username, {
				type: 'category'
			})
			.then(async category => {
				category.updateOverwrite(message.guild.roles.everyone, {
					VIEW_CHANNEL: false
				});
				category.updateOverwrite(message.author.id, {
					VIEW_CHANNEL: true,
					SEND_MESSAGES: true
				});
				message.guild.channels.create(`ticket-${message.author.username}`, {
						type: 'text',
						parent: category.id
					})
					.then(async channel => {
						await channel.setParent(category.id);
						await channel.lockPermissions();
						channel.send(`Benvenuto <@${message.author.id}>`)
					});
				message.guild.channels.create(`ticket-${message.author.username}`, {
						type: 'voice',
						parent: category.id
					})
					.then(async channel => {
						await channel.setParent(category.id);
						await channel.lockPermissions();
					});
			});
		message.delete();
	}
}