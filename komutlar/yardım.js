const Discord = require('discord.js'); 
 
exports.run = async(client, message, args) => {
 
 const Embed = new Discord.MessageEmbed()
 .addField(":scroll: Genel ve Yetkili", "`avatar`, `ban`, `ses-kontrol`, `sunucu-bilgi`, `embed-yaz`, `rol-bilgi`, `say`, `nuke`, `mod-log`, `lock`, `unlock`, `sa-as`, `mute`")
  .addField(":wrench: Kayıt", "`erkek`, `kız`, `vip`")
 .setFooter("© Archex", client.user.avatarURL)
 message.channel.send(Embed)
}
exports.config = {
    name: "yardım",
    aliases: []
};