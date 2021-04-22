const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle("*Bir hata oldu!*")
        .setDescription(
          `Bu komutu kullanabilmek için \`Mesajları Yönet\` yetkisine ihtiyacın var!`
        )
    );

  let prefix = db.fetch(`prefix.${message.guild.id}`) || "v!";

  let adet = args[0];

  if (!adet)
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle("*Bir hata oldu!*")
        .setDescription("Silinecek mesaj sayısını belirtmen gerek!")
    );

  if (adet > 100)
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle(" Bir hata oldu!")
        .setDescription(`**\`100\`**'den fazla mesaj silemem!`)
    );

  if (adet < 1)
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle(" Bir hata oldu!")
        .setDescription(`**\`1\`**'den az mesaj silemem!`)
    );
 let user = message.author;
  this.user = user;
    message.channel.bulkDelete(adet).then(emoji => {   message.channel.send(new Discord.MessageEmbed().setAuthor(this.user.username, this.user.displayAvatarURL({dynamic:true}))
    .addField(`Silinen Mesaj Adedi:`, `**${adet}**`)
    .addField(`Silinen Mesaj Kanalı:`, `<#${message.channel.id}>`)
    .addField(`Silinen Mesaj Yetkilisi:`, `<@${message.author.id}>`)
    .setFooter(
      `© ${client.user.username} 2021-2022`,
      client.user.displayAvatarURL({ dynamic: true })
    )
    .setColor("GREEN")).then(a => a.delete({ timeout: 10000 }));}, error => { message.channel.send(new Discord.MessageEmbed().setColor("RED").setTitle(`Bir hata oldu!`).setDescription("`14` günden önceki mesajları silemem!"))});

  message.delete();
};
exports.config = {
    name: "sil",
    aliases: ["sil"]
};