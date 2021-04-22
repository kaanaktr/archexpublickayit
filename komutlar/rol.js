const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {
    let channel = message.mentions.roles.first()
      const uyari = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setDescription('Lütfen bir rol belirt.')
  if (!channel) {
      const uyari = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .addField('Başarısız!', '\nLütfen bir rol belirt.')
    return message.channel.send(uyari)
  }
  db.set(`Muted_${message.guild.id}`,channel.id)
  const embed = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .addField(` Başarılı!`,`\nMuted rolü <@&` + channel + `> olarak ayarlandı.`)
  message.channel.send(embed)
}
exports.config = {
  name: "muted", //komutunuzun adı
  guildOnly: true, //burası kalsın
  aliases: [] //komutu farklı isimde çalıştırmak için
};
