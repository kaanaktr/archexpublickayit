const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  let user = message.mentions.users.first() || message.author;
    this.user = user;
  let discordavatarpro = new Discord.MessageEmbed()
  .setAuthor(this.user.username, this.user.displayAvatarURL({dynamic:true}))
  .setImage(user.displayAvatarURL({dynamic:true}))
  .addField("» **"+user.tag+"** adlı kullanıcının avatarı:", "_ _")
        .setFooter(
      `© ${client.user.username} 2021-2022`,
      client.user.displayAvatarURL({ dynamic: true })
    )
  .setColor("0x36393E");
  message.channel.send(discordavatarpro)
};
exports.config = {
  name: "avatar",  //komutunuzun adı
  guildOnly: true, //burası kalsın
  aliases: ["pp"],  //komutu farklı isimde çalıştırmak için 
};