const Discord = require('discord.js');

module.exports = {
	name: "help",
	description: "Show the message with all the commands names",
	requirements: "none",
	category: "Miscellaneous",
	run: async (bot, message, args) => {
		let embed = new Discord.MessageEmbed()
			.setTitle(`Commands help (prefix ${bot.configs.prefix})`)
		if (!args[1]) {
			let commands = {};
			bot.commands.forEach((cmd) => {
				commands[cmd.category] = commands[cmd.category] ? commands[cmd.category] + `\`${cmd.name}\` ` : `\`${cmd.name}\` `;
			});
			embed.setDescription(`Use ${bot.configs.prefix}help <commandName> for more info about every command`);
			for(let cat in commands) embed.addField(cat, commands[cat]);
			message.channel.send(embed);
		} else {
			let cmd = bot.commands.get(args[1]);
			if (!cmd) message.channel.send('The command doesn\'t exists');
			else {
				embed.setDescription(`Info for \`${bot.configs.prefix}${args[1]}\`:`)
					.addField('Description:', cmd.description)
					.addField('Requirements:', cmd.requirements)
					.addField('Cathegory:', cmd.category);
				message.channel.send(embed);
			}
		}
	}
}