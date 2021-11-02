const { Discord, MessageEmbed, MessageButton } = require("discord.js");
        module.exports = {
  name: "smart",
  aliases: [],
  run: async function(client, message, args){


    const embed = new MessageEmbed()
    .setTitle('Smart Command')
    .setDescription('Are you Smart')
    .setColor('GREEN')

    const yes = new MessageButton()
    .setStyle('green')
    .setLabel('Yes')
    .setID('smart')

    const no = new MessageButton()
    .setStyle('red')
    .setLabel('No')
    .setID('dumb')

    message.channel.send({
      buttons: [yes, no],
      embed: embed
    })

        }
        }