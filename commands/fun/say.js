const Discord = require('discord.js');

module.exports = {
   name: 'say',
   aliases: ['tell'],
   description: 'Tells',


   async run(bot, message, args) {
       const messageToSay = args.join("  ");
       try{
           await message.channel.send(messageToSay).then(() => message.delete());
       } catch (err) {
           console.log(err);
           message.channel.send('I am not able to send that message 🥺 ');
       }
   }





}