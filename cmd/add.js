module.exports = {
	name: "add",
	description: "Add a user to a created channel",
	requirements: "Administrator",
	category: "Channels",
	run: async (bot, message, args) => {
		if (!message.channel.name.startsWith('ticket-')) return;
		if (!message.member.hasPermission('ADMINISTRATOR')) return;

		let member = message.mentions.members.first();
		if (!member) return;

		await message.channel.parent.updateOverwrite(member.id, {
			VIEW_CHANNEL: true,
			SEND_MESSAGES: true
		});
	}
}