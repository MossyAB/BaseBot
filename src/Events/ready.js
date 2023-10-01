const Event = require("../Structures/Event");


module.exports = new Event("ready", async(client) => {
    console.log("Bot Started")
    client.user.setActivity('You.', {type : 'WATCHING'}); //This Controls The Status Of The Bot

});