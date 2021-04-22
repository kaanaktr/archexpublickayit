const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setTitle("**Bir hata oldu!**").setDescription("Bunu yapabilmek için yeterli yetkin yok!"))
  message.channel.overwritePermissions([{ id: message.guild.roles.cache.find(a => a.name === '@everyone').id, deny: ['SEND_MESSAGES'], allow: ['READ_MESSAGE_HISTORY'], allow: ['VIEW_CHANNEL'] }]);
  message.channel.send(new Discord.MessageEmbed().setColor("GREEN").setTitle(`**:pushpin: İşte bu kadar!**`).setDescription(`**${message.channel.name}** adlı kanal kapatıldı.`))
};

exports.config = {
  name: "lock",  //komutunuzun adı
  guildOnly: true, //burası kalsın
  aliases: [],  //komutu farklı isimde çalıştırmak için 
};