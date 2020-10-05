module.exports = {
	name: "flip",
	description: "Roll a dice (options: d3->d100, default d6)",
	requirements: "none",
	category: "Entertainement",
	run: async (bot, message, args) => {
		let value = Math.floor(Math.random() * 2);
		if(value==1) message.channel.send(`Flipped head`);
		else message.channel.send(`Flipped tail`);
		
	}
}