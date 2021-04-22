const Discord = require("discord.js");
const db = require("quick.db")

exports.run = async (client, message, args) => {
  
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription(`» Bu komutu kullanabilmek için \`Üyeleri Yasakla\` yetkisine ihtiyacın var!`));
  
   let prefix =
    db.fetch(`prefix.${message.guild.id}`) || "!";
      let banned = message.mentions.users.first() || client.users.resolve(args[0]);
    let reason = args.slice(1).join(" ");
  
  if (!banned) {
      let baninfoembed = new Discord.MessageEmbed()
      .setTitle("Bir hata oldu!")
        .setDescription(`Yasaklamak için bir kişi etiketle!`)
        .setColor("RED");
      message.channel.send(baninfoembed);
    
    return;
    
  };
      if (message.author === banned) {
      let sanctionyourselfembed = new Discord.MessageEmbed()
      .setTitle("Bir hata oldu!")
        .setDescription(`Kendini yasaklayamazsın!`)
        .setColor("RED");
      message.channel.send(sanctionyourselfembed);
  
      return;
    }
  
  message.guild.members.ban(banned, { reason: reason });
  let user = message.author;
  this.user = user;
    let discord = new Discord.MessageEmbed()
  .setAuthor(this.user.username, this.user.displayAvatarURL({dynamic:true}))
    .addField(`Yasaklanan Kullanıcı:`, `${banned.tag}`)
    .addField(`Yasaklayan Kullanıcı:`, `<@${this.user.id}>`)
    .addField(` Yasaklanma Sebebi:`, `${reason || "Sebep belirtilmedi!"}`)
    .setFooter(
      `© ${client.user.username} 2021-2022`,
      client.user.displayAvatarURL({ dynamic: true })
    )
    .setColor("#11657d");
message.channel.send(discord)
  
};
  
  exports.config = {
  name: "ban",  //komutunuzun adı
  guildOnly: true, //burası kalsın
  aliases: ["yasakla"],  //komutu farklı isimde çalıştırmak için 
};