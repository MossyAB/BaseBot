const Command = require("../Structures/Command");
const Discord = require('discord.js');

module.exports = new Command({
    name:"Message",
    description:"Example Of An Message Command",
    permission:"SEND_MESSAGES",
    aliases:"msg",
    async run(message, args, client){

        message.channel.send("Hello Welcome To The Base Discord Bot By MossyAB"); //This Sends The Message To The Channel The Command Was Sent To As A New Message With No Links To The Origianl

        message.delete(); //This Deletes The Command Message

    }
})