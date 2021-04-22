const Discord = require("discord.js")
module.exports.run= async(client, message, args) => {
let user;
if(message.mentions.members.first()) user = message.mentions.members.first()

if(!user && args[0]) user = message.guild.members.cache.get(args[0])
if(!user) return message.reply('Birisini Etiketle Veya ID Gir!')

let sonuc 
if(!user.voice.channel.id) sonuc = "** :x:Bu Üye Sesli Kanalda Değil!**"
if(user.voice.channel.id) sonuc = `${user} İsimli Kişi <#${user.voice.channel.id}> İsimli Sesli Odada! :tada:`

message.channel.send(sonuc)

}
exports.config = {
  name: "ses-kontrol", //komutunuzun adı
  guildOnly: true, //burası kalsın
  aliases: ["seskontrol"] //komutu farklı isimde çalıştırmak için
};
