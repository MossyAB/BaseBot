const Command = require("../Structures/Command");
const Discord = require('discord.js');

module.exports = new Command({
    name:"Reply",
    description:"Example Of An Reply Command",
    permission:"SEND_MESSAGES",
    aliases:"rpy",
    async run(message, args, client){

        message.reply("Hello Welcome To The Base Discord Bot By MossyAB"); //This Replies To The Send Command


    }
})