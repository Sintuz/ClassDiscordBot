module.exports = {
	name: "unban",
	description: "Unban a user",
	requirements: "Administrator",
	category: "Administration",
	run: async (bot, message, args) => {
		if (!message.member.hasPermission('ADMINISTRATOR')) return;

		let member = message.mentions.members.first();
		if (!member) return;

		message.guild.unban(member.id);
	}
}