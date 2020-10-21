const fs = require('fs');

const Discord = require('discord.js');
const bot = new Discord.Client();

bot.commands = new Discord.Collection();
fs.readdir('./cmd/', (err, files) => {
	if (err) throw err;

	let jsfiles = files.filter(f => f.split('.').pop() == 'js');
	if (jsfiles.length <= 0) {
		console.log('Problem loading the commands');
		return;
	}

	console.log('Beginning to load commands');
	jsfiles.forEach((f, i) => {
		let cmd = require('./cmd/' + f);
		console.log('Loading command #' + i + ': ' + cmd.name);
		bot.commands.set(cmd.name, cmd);
	});
	console.log('Commands loaded');
});

bot.configs = require('./config.json');

const setState = () => {
	bot.user.setActivity(`${bot.configs.prefix}help`, {
		type: 'PLAYING',
	}).catch(console.error);
};

bot.once('ready', async () => {
	console.log('Bot online');
	setState();
	setInterval(setState, 60*60*1000);
});

bot.on('message', async (message) => {
	if (!message.content.startsWith(bot.configs.prefix)) return;

	const args = message.content.substring(bot.configs.prefix.length).split(' ');

	let cmd = bot.commands.get(args[0]);
	if (cmd) cmd.run(bot, message, args);

});

const token = require('./token.json').token;
bot.login(token);