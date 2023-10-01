const Command = require("../Structures/Command");
const Discord = require('discord.js');

module.exports = new Command({
    name:"Embed",
    description:"Example Of An Embed Command",
    permission:"SEND_MESSAGES",
    aliases:"em",
    async run(message, args, client){

        let Author = message.author.username; //Gets The Username Of The Person Who Sent The Message

        const embed = new Discord.MessageEmbed() //Creates The Base Of An Enbed
        .setAuthor(Author) //This Is The Top Line Of The Embed (Medium Sized Text)
        .setTitle("This Is An Embed") //This Is The Second Line Of The Embed (Big Text)
        .setDescription("This Is An Example Command" + "\n" + "\n" +
            "**THANK YOU FOR USING MY CODE!**" + "\n" + "\n" +
            "For Help Add Me On Discord! MossyAB") //This Is The Main Body Of The Embed
        .setColor("#00b0f4") //This Is The Colour Used For The Side Bar As A Hex Colour
        .setFooter("MossyAB On Top") //This Is At The Bottom Of The Embed (Small Text)
        .setTimestamp(); //This Adds The Time The Embed Was Sent

await message.channel.send({ embeds: [embed] }); //This Sends The Embed To The Channel The Command Was Sent


    }
})