const { MessageEmbed } = require('discord.js')
const { MessageButton } = require('discord-buttons')


module.exports = {
    name: "invite",
    cooldown: 3,
    description: 'view the bot ping',
    aliases: ["ping"],
    run: async function(client, message, args, user) {
  const ipd = new MessageEmbed()
  .setTitle('Invite Me')
  .setDescription('Click the button below to invite me')
  .setColor('GREEN')

  const invite = new MessageButton()
  .setStyle('url')
  .setLabel('Invite Me')
  .setURL('https://dsc.gg/billi')
  .setEmoji('861633373565747211')

  message.channel.send({
    button: invite,
    embed: ipd
  })
    }
}