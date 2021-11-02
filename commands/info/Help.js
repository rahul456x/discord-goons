const { MessageEmbed } = require('discord.js')
const { MessageButton } = require('discord.js')


module.exports = {
    name: "help",
    cooldown: 3,
    description: 'view the bot ping',
    aliases: ["h"],
    run: async function(client, message, args, user) {
    const helpcmd = new MessageEmbed()
    .setTitle('Help')
    .setDescription('Click the buttons to access the Help Categories')
    .setImage('https://cdn.discordapp.com/attachments/904624531539382294/905038165302210600/350kb.gif')

    const fun = new MessageButton()
    .setStyle('red')
    .setLabel('Fun')
    .setID('fun')

    const info = new MessageButton()
    .setStyle('red')
    .setLabel('Information')
    .setID('info')

    const images = new MessageButton()
    .setStyle('red')
    .setLabel('Images')
    .setID('images')

    const games = new MessageButton()
    .setStyle('red')
    .setLabel('Games')
    .setID('games')

    const music = new MessageButton()
    .setStyle('red')
    .setLabel('Music')
    .setID('music')
    .setDisabled(false)

    const next = new MessageButton()
    .setStyle('grey')
    .setLabel('Next')
    .setID('next')

    const supportserver = new MessageButton()
    .setStyle('url')
    .setLabel('Support Server')
    .setURL('https://discord.gg/EGdbUSbpsE')
    
    message.channel.send({
      buttons: [fun, info, images, next, supportserver],
      embed: helpcmd
    })
    }
}