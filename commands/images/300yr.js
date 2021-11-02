const Discord = require("discord.js")
const AmeClient = require("amethyste-api");
module.exports = {
  name: "3000yr",
  aliases: ["3000yrs", "3000yr"],
  run: async function (client, message, args, data, db) {
 
 let apicore = "bb03f373caa534fcfcbaeae177a65134f44a6e57ba7a7b098be273867b376d8a677ddae3c23c6ded4fec8288573945e8c3483689deb13f229376ad4b5b60231d";
let AmeAPI = new AmeClient(apicore);
const user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
 
		const buffer = await AmeAPI.generate("3000years", { url: user.displayAvatarURL({ format: "png", size: 512 }) });
		const attachment = new Discord.MessageAttachment(buffer, "approved.png");
	
		message.channel.send(attachment);

	}
}
  module.exports.help = {
    name: "3000yrs",
    description: "Sends a 3000yrs photo of mentioned person ",
    usage: "3000yrs",
    type: "Image" 
}
