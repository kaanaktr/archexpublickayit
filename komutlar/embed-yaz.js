const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let mesaj = args.slice(0).join(' ');
    if (!mesaj) return message.reply('Bana Birşeyler Yazdırmalısın');
    message.delete();
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`**${mesaj}**`)
    return message.channel.send(embed);
};
exports.config = {
    name: "embed-yaz",
    aliases: []
};