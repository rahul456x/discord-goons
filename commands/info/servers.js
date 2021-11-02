const client = require('discord.js')
const { MessageEmbed } = require('discord.js')
module.exports = {
  name: "wbsmoke",
  description: "bugreport command",
  aliases: ['servers'],
async run(client, message, args) {
    message.channel.send()
  
const lupo = new MessageEmbed()
.setTitle('Server')
.setDescription(`I am on ${client.guilds.cache.size} server`)
.addField(`${client.guilds.cache.size} / 100`, 'servers')

message.channel.send(lupo)
  }
}
