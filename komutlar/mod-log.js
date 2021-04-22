const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {
    let channel = message.mentions.channels.first()
      const uyari = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setDescription('Lütfen bir kanal belirt.')
  if (!channel) {
      const uyari = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .addField('Başarısız!', '\nLütfen bir kanal belirt.')
    return message.channel.send(uyari)
  }
  db.set(`Log_${message.guild.id}`,channel.id)
  const embed = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .addField(` Başarılı!`,`\nlog kanalı <#` + channel + `> olarak ayarlandı.`)
  message.channel.send(embed)
}
exports.config = {
  name: "log", //komutunuzun adı
  guildOnly: true, //burası kalsın
  aliases: [] //komutu farklı isimde çalıştırmak için
};
