const Discord = require("discord.js");
const serverCooldown = new Set();
exports.run = (client, message, args) => {
  
      if (serverCooldown.has(message.guild.id)) {
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("RED")// archex 
        .setDescription(
          `» **${client.user.username}** adlı bottan tekrar komut kullanabilmek için \`5 Saniye\` beklemen gerek!`
        )
    );
  }
    serverCooldown.add(message.guild.id);
  setTimeout(() => {
    serverCooldown.delete(message.guild.id);
  }, 300);
  
  if (!message.member.hasPermission("MANAGE_GUILD"))
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription(
          `» Bu komutu kullanabilmek için \`Sunucuyu Yönet\` yetkisine ihtiyacın var!`
        )
    );
  message.channel.clone().then(knl => {
    let position = message.channel.position;
    knl.setPosition(position);
    message.channel.delete();
    knl.send(`Kanal bombalandı.\nhttps://imgur.com/LIyGeCR`)
  });
};

exports.config = {
  name: "nuke", //komutunuzun adı
  guildOnly: true, //burası kalsın
  aliases: [] //komutu farklı isimde çalıştırmak için
};
