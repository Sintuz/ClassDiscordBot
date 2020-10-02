module.exports = {
	name: "compile",
	description: "Compile a c program",
	requirements: "none",
	run: async (bot, message, args) => {
		let code = message.content.split('```')[1]
		console.log(code);
	}
}