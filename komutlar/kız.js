const Discord = require('discord.js')
const db = require('quick.db')


exports.run = async (client, message, args) => {
    if(!message.member.roles.cache.has('824528298268688421')) return message.reply('** :x: Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin!**')

  let verilecek = "834733004240715787"//kız
  let alınıcak = "834733257273638963"//KayıtsızRolİD
  let isim = args[1]
  let yaş = args[2]
  let a = message.mentions.members.first()
  
  if (!a) return message.reply('Bir Üye Belirtin')
    db.add(`kız_${message.author.id}`, 1)

  a.roles.add(verilecek)
  
  message.channel.send(`**:wrench: ${a} Adlı Kullanıcıya başaryla kız rolü verildi <3 archex team**`)
  
  
}
exports.config = {
    name: "kız",
    aliases: []
};