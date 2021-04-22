const Discord = require('discord.js');

exports.run = async (client, message, args) => { 
    message.channel.send(new Discord.MessageEmbed()
        .setColor('0x36393E')
    .setAuthor(message.guild.name, message.guild.iconURL({dynamic:true}))
        .addField("Üye Sayısı", message.guild.memberCount, true)
      .addField(" Boost Sayısı", message.guild.premiumSubscriptionCount, true)
      .addField(" Boost Seviyesi", message.guild.premiumTier, true).setFooter(
      `© ${client.user.username} 2021-2022`,
      client.user.displayAvatarURL({ dynamic: true })
    ));

}

exports.config = {
  name: "say", //komutunuzun adı
  guildOnly: true, //burası kalsın
  aliases: [] //komutu farklı isimde çalıştırmak için
};
