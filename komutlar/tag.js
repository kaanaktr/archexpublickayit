const Discord = require('discord.js');
const db = require("quick.db");
const serverCooldown = new Set();

exports.run = async (client, message, args) => {
  
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription(`» Bu komutu kullanabilmek için \`Yönetici\` yetkisine ihtiyacın var!`));
  
  let prefix = db.fetch(`prefix_${message.guild.id}`) || "!";

      if (serverCooldown.has(message.guild.id)) {
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription(
          `» **${client.user.username}** adlı bottan tekrar komut kullanabilmek için \`5 Saniye\` beklemen gerek!`
        )
    );
  }
    serverCooldown.add(message.guild.id);
  setTimeout(() => {
    serverCooldown.delete(message.guild.id);
  }, 300);
  
  let tag = args[0];
  let tagg = db.fetch(`tag_${message.guild.id}`)
  
  if (!tag) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription('» Bir tag girmelisin.'))
  
    if(args[0] === "sıfırla") {
    if(!tagg) {
      message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription(`» Ayarlanmayan şeyi sıfırlayamazsın.`))
      return
    }
    
    db.delete(`tag_${message.guild.id}`)
    message.channel.send(new Discord.MessageEmbed().setColor("GREEN").setDescription(`» Tag başarıyla sıfırlandı.`))
    return
  }
  
  db.set(`tag_${message.guild.id}`, tag)
  message.channel.send(new Discord.MessageEmbed().setColor("GREEN").setDescription(`» Tag başarıyla \`${tag}\` olarak ayarlandı, sohbete sadece \`tag\` yazman yeterli.`))
   
}

exports.config = {
  name: "tag",  //komutunuzun adı
  guildOnly: true, //burası kalsın
  aliases: ["tag-ayarla"],  //komutu farklı isimde çalıştırmak için 
};