const db = require('quick.db')
const Discord = require('discord.js')
 
 
exports.run = async (bot, message, args) => {
  if (!args[0]) return message.channel.send(`Aç yada kapat yazmalısın!! Örnek: **g!sa-as aç**`)
  if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send( new Discord.MessageEmbed() .setDescription(' Bu komutu kullanmak için \`MESAJLARI_YÖNET\` yetkisine sahip olmalısın!') .setColor('BLUE'))
 
  if (args[0] === 'aç') {
     let prefix = db.fetch(`prefix_${message.guild.id}`) || "!"; 
    db.set(`sa_${message.guild.id}`, 'acik')
    message.channel.send( new Discord.MessageEmbed() .setDescription(`Artık bot Sa diyince As diyecek. Kapatmak için "\`${prefix}sa-as kapat\`" yazmalısın.`) .setColor('BLUE'))
 
  }
  
  if (args[0] === 'kapat') {
    
    db.set(`sa_${message.guild.id}`, 'kapali')
    message.channel.send( new Discord.MessageEmbed() .setDescription(`Artık biri sa diyince cevap vermicek.`) .setColor('BLUE'))

  }
 
}

exports.config = {
  name: "sa-as",  //komutunuzun adı
  guildOnly: true, //burası kalsın
  aliases: ["saas"],  //komutu farklı isimde çalıştırmak için 
};
