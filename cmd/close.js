module.exports = {
	name: "close",
	description: "Close the created channel",
	requirements: "Administrator",
	category: "Channels",
	run: async (bot, message, args) => {
		if (!message.channel.name.startsWith('ticket-')) return;
		if (message.member.hasPermission('ADMINISTRATOR')) {
			message.channel.send('Il canale verrà cancellato in 5 secondi');
			setTimeout(async () => {
				let cat = message.channel.parent;

				await cat.children.forEach(async channel => {
					await channel.delete();
				});
				cat.delete();
			}, 3000);
		}
	}
}