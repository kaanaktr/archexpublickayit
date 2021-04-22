const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setTitle("<:red:822398531725164564> Bir hata oldu!").setDescription("Bunu yapabilmek için yeterli yetkin yok!"))
  message.channel.overwritePermissions([{ id: message.guild.roles.cache.find(a => a.name === '@everyone').id, allow: ['SEND_MESSAGES'], allow: ['READ_MESSAGE_HISTORY'], allow: ['VIEW_CHANNEL'] }]);
  message.channel.send(new Discord.MessageEmbed().setColor("GREEN").setTitle(`**:dash: İşte bu kadar!**`).setDescription(`**${message.channel.name}** adlı kanal açıldı.`))
};

exports.config = {
  name: "unlock",  //komutunuzun adı
  guildOnly: true, //burası kalsın
  aliases: [],  //komutu farklı isimde çalıştırmak için 
};