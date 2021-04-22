const Discord = require("discord.js");
const ms = require("ms");
const database = require("quick.db");
exports.run = async (client, message, args) => {
  
  let prefix = database.fetch(`prefix.${message.guild.id}`) || "!";

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısınız.`);

 let efeÜye = message.mentions.members.first() || message.guild.members.cache.get(args[0])
  if(!efeÜye) return message.channel.send("Lütfen susturulacak kişiyi etiketleyiniz.");
  if(efeÜye.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Benden yetkili birini susturamam.");
  if (efeÜye.id === message.author.id) return message.channel.send("Kendinizi susturamazsınız.");
  let Rol = database.fetch(`Muted_${message.guild.id}`)

  if(!Rol){
    message.channel.send(new Discord.MessageEmbed().setColor("RED").setTitle("Susturma").setDescription("<@"+message.author.id+">, lütfen `!muted` komutuyla Muted rolü belirle!"))
  } else {

  let efeZaman = args[1];
  let member = message.mentions.members.first()
  if(!efeZaman) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription(`Lütfen bir zaman dilimi giriniz. Örneğin: **${prefix}mute @kişi 1s/m/h/d sebep**`));
  let sebep = args[2]
  if(!sebep) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription(`Lütfen bir sebep giriniz. Örneğin: **${prefix}mute @kişi 1s/m/h/d sebep**`));

  await(efeÜye.roles.add(Rol));
   let embed = new Discord.MessageEmbed()
              .setTitle(`Susturma`)
                .setDescription(`${member} üyesi, ${efeZaman} süreliğine ${message.author} tarafından ${sebep} sebebiyle susturuldu!`)
                .setColor("RANDOM");
  message.channel.send(embed);

  setTimeout(function(){
    efeÜye.roles.remove(Rol);
    let sembed =  new Discord.MessageEmbed()
              .setTitle(`Susturma`)
                .setDescription(`${member} üyesinin, ${efeZaman} sürelik susturulması, otomatik olarak kaldırıldı.`)
                .setColor("RANDOM");
    message.channel.send(sembed);
  }, ms(efeZaman));

  message.delete();

}
};
exports.config = {
  name: "mute",  //komutunuzun adı
  guildOnly: true, //burası kalsın
  aliases: ["sustur"],  //komutu farklı isimde çalıştırmak için 
};
