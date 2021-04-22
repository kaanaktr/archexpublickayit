const Discord = require("discord.js");
const database = require("quick.db");

exports.run = async (client, message, args) => {
  
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription(`» Bu komutu kullanabilmek için \`Üyeleri Yasakla\` yetkisine ihtiyacın var!`));
  
   let prefix =
    database.fetch(`prefix.${message.guild.id}`) || "v!";
  let ghost = message.guild;
  ghost
    .fetchBans()
    .then(ghosT =>
    message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription(`<:red:822398531725164564> Sunucunuzda **${ghosT.size}** banlanmış üye bulunmaktadır!`))
  )
    .catch(console.error);
};

exports.config = {
  name: "bansay",  //komutunuzun adı
  guildOnly: true, //burası kalsın
  aliases: ["ban-say"],  //komutu farklı isimde çalıştırmak için 
};