module.exports = {
	name: "ban",
	description: "Ban a user",
	requirements: "Administrator",
	run: async (bot, message, args) => {
		if (!message.member.hasPermission('ADMINISTRATOR')) return;

		let member = message.mentions.members.first();
		if (!member) return;

		message.guild.ban(member.id);
	}
}