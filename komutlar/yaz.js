const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("puşt yetkin yok!");
  let msg = args[0];
  if(!msg) return message.reply("puşt bir şeyler yaz!")
  return message.channel.send(msg).then((msg) => { message.delete() });
};

exports.config = {
    name: "yaz",
    aliases: []
};