const { MessageEmbed } = require("discord.js");

module.exports = {
    config:{
        url:"webhookURL" 
    },
    run: () => {

        const embed = new MessageEmbed()
            .setTitle("Test Embed")
            .setDescription("This is a test embed, we use https://discord.js.org/#/docs/main/stable/class/MessageEmbed to make these embeds")

        return [embed]
    }
}