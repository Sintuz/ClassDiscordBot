module.exports = {
	name: "roll",
	description: "Roll a dice (options: d3->d100, default d6)",
	requirements: "none",
	category: "Entertainement",
	run: async (bot, message, args) => {
		let max = args[1] || "d6";
		let maxNum = parseInt(max.substring(1));
		if(maxNum>100||maxNum<3||isNaN(maxNum)) {
			message.channel.send("Not a valid parameter");
			return;
		}
		else {
			let value = Math.floor(Math.random() * (maxNum - 1 + 1)) + 1;
			message.channel.send(`Rolled a ${max}: ${value}`);
		}
	}
}