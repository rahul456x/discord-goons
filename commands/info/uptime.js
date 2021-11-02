const Discord = require("discord.js");
const { MessageButton } = require('discord.js');
const moment = require("moment")
require("moment-duration-format")

    module.exports = {
  name: "uptime",
  aliases: ['up'],
  run: async function(client, message, args, data, db) {


  
const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
let embed = new Discord.MessageEmbed()
.setTitle("Uptime")
.setColor('RANDOM')

const uptimed = new MessageButton()
.setStyle('blurple')
.setLabel(`${duration}`)
.setID('duration')

message.channel.send({
  button: uptimed,
  embed: embed
});
}
    }