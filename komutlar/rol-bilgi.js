const Discord = require ('discord.js')
exports.run= async (client,message,args)=> {
const rol = message.mentions.roles.first()
if (rol){
  const embed = new Discord.MessageEmbed()
  .setTitle(`Bilgiler`)
  .addField('Rolün İsmi', rol.name, true)
  .addField('Rol İd',rol.id, true)
  .addField('Rol Renk', rol.hexColor,true )
  .addField('Rol Entegrasyon mu?', rol.managed ?"Evet":"Hayır",true)
  .addField('Rolden Bahsedilebilirmi?', rol.mentionable ? "Evet" : "Hayır",true)
  .addField('Rolün Sırası', message.guild.roles.cache.size -rol.position,true)
  .addField('Kaç Kişi Bu Role Sahlp', rol.members.size,true)
  .addField('Rol Oluşturma Tarihi', rol.createdAt.toLocaleDateString("tr-tr")  ,true)
    .addField('Rol Diğer Üyelerden Ayrımı Gösteriliyor',rol.hoist ? "Evet" : "Hayır",true)
  message.channel.send(embed)
} else {
  var role = message.guild.roles.cache.find(r => r.name === args.join(" "))
  if(!role) role = message.guild.roles.cache.find (r => r.id === args.join (" "))
  if(!role ) return message.channel.send('Yazdığın Rolü Bulamadım')
  const embed = new Discord.MessageEmbed()
  .setTitle(`${rol.name} Rolü Hakkında Bilgiler`)
  .addField('Rolün İsmi', role.name, true)
  .addField('Rol İd',role.id, true)
  .addField('Rol Renk', role.hexColor,true )
  .addField('Rol Entegrasyon mu?', role.managed ?"Evet":"Hayır",true)
  .addField('Rolden Bahsedilebilirmi?', role.mentionable ? "Evet" : "Hayır",true)
  .addField('Rolün Sırası', role.position,true)
  .addField('Kaç Kişi Bu Role Sahlp', role.members.size,true)
  .addField('Rol Oluşturma Tarihi', role.createdTimestamp.toLocaleDateString("tr-tr"),true)
    .addField('Rol Diğer Üyelerden Ayrımı Gösteriliyor',role.hoist ? "Evet" : "Hayır",true)
  message.channel.send(embed)
};
}
exports.config = {
  name:"rolbilgi",
  aliases:["rolbilgi","rol-bilgi","rol"]
};