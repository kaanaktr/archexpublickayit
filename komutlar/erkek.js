const Discord = require('discord.js')
const db = require('quick.db')


exports.run = async (client, message, args) => {
    if(!message.member.roles.cache.has('824528298268688421')) return message.reply('** :x: Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin!**')

  let verilecek = "834732968861892638"//ErkekRolİd
  let alınıcak = "834733257273638963"//KayıtsızRolİD
  let isim = args[1]
  let yaş = args[2]
  let a = message.mentions.members.first()
  
  if (!a) return message.reply('Bir Üye Belirtin')
  if (!isim || !yaş) return message.reply('Lütfen **İsim** Ve **Yaş** Belirt')
  if  (isNaN(yaş)) return message.reply('**Yaşı lütfen rakamlarla yaz.**')
    db.add(`erkek_${message.author.id}`, 1)

 a.setNickname(`${isim} | ${yaş}`)
  a.roles.add(verilecek)
  a.roles.remove(alınıcak)
  
  message.channel.send(`**:man: ${a} Adlı Kullanıcı Başarıyla Kayıt Oldu İyi Vakit Geçirmen Dileğiyle**`)
  
  
}
exports.config = {
    name: "erkek",
    aliases: []
};