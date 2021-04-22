const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client({
  autoReconnect: true
});
require("./turemeosta/yukleoc.js")(client);

client.on("ready", () => {
  console.log(
    `[BOT]: ${client.user.tag} ismiyle bağlandım!`
  );
  client.user.setPresence({
    activity: {
      name: `v12 bos altyapi`,
      url: "https://www.twitch.tv/archexmelih",
      type: "STREAMING"
    },
    status: "idle"
  });
});

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  console.log(`[BOT]: ${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    console.log(`[BOT]: ${props.config.name} komutu yüklendi.`);
    client.commands.set(props.config.name, props);
    props.config.aliases.forEach(alias => {
      client.aliases.set(alias, props.config.name);
    });
  });
});

client.login(process.env.token).catch(error => { console.log("token yanlış birader.") }); // .env dosyasında token yerinin karşısına token gir.
 


// komutlaar bundan sonra :D eqw xD

client.on("userUpdate", async (stg, yeni) => {
  var sunucu = client.guilds.cache.get('SUNUCU ID'); // Buraya Sunucu ID
  var uye = sunucu.members.cache.get(yeni.id);
  var tag = "TAG"; // Buraya Ekip Tag
  var tagrol = "TAG ROL ID"; // Buraya Ekip Rolünün ID
  var logKanali = "TAG LOG KANAL ID"; // Loglanacağı Kanalın ID

  if (!sunucu.members.cache.has(yeni.id) || yeni.bot || stg.username === yeni.username) return;
  
  if ((yeni.username).includes(tag) && !uye.roles.cache.has(tagrol)) {
    try {
      await uye.roles.add(tagrol);
      await uye.send(`Tagımızı aldığın için teşekkürler! Aramıza hoş geldin.`);
      await client.channels.cache.get(logKanali).send(new Discord.MessageEmbed().setColor('GREEN').setDescription(`${yeni} adlı üye tagımızı alarak aramıza katıldı!`));
    } catch (err) { console.error(err) };
  };
  
  if (!(yeni.username).includes(tag) && uye.roles.cache.has(tagrol)) {
    try {
      await uye.roles.remove(uye.roles.cache.filter(rol => rol.position >= sunucu.roles.cache.get(tagrol).position));
      await uye.send(`Tagımızı bıraktığın için ekip rolü ve yetkili rollerin alındı! Tagımızı tekrar alıp aramıza katılmak istersen;\nTagımız: **${tag}**`);
      await client.channels.cache.get(logKanali).send(new Discord.MessageEmbed().setColor('RED').setDescription(`${yeni} adlı üye tagımızı bırakarak aramızdan ayrıldı!`));
    } catch(err) { console.error(err) };
  };
});

// BOOST BASINCA ROL VERME ARCEHX TEAM 

const logs = require('discord-logs');
logs(client);
client.on('guildMemberBoost', member => {
let guild = member.guild;
if(member.user.bot) return;
let rol = guild.roles.cache.get('rol id')//agam verilecek olan rolün idsi gir
guild.members.cache.get(member.user.id).roles.add(rol.id);
});


// FAKE KATIL 

client.on('message', async message => {
if (message.content === '!fakekatıl') { // Buraya ne yazarsanız yazdığınız şeye göre çalışır
  client.emit('guildMemberAdd', message.member || await message.guild.fetchMember(message.author));
    }
});


// KANALA SADECE RESİM archex

client.on("message", İleti => {
  if (İleti.channel.id !== "BURAYA KANAL ID") {
    return;
  }
  if (İleti.author.id === İleti.guild.ownerID) return;
  if (İleti.attachments.size < 1) {
    İleti.delete();
  }
});


// hg  archex
client.on('guildMemberAdd', atl=> {
  const mesaj = new Discord.MessageEmbed()
    .setTitle(`HOSGELDIN`)
    .setDescription(`${atl} Hoşgeldin Seni Arazmıda Görmek Ne Güzel <3`)
  atl.guild.channels.cache.get(`834854262906552350`).send(mesaj)
});

// bb archex

client.on('guildMemberRemove', atl=> {
  const mesaj = new Discord.MessageEmbed()
    .setTitle(`GÖRÜŞÜRÜZ`)
    .setDescription(`${atl} Keşke Gitmeseydin be aga :(`)
  atl.guild.channels.cache.get(`834854262906552350`).send(mesaj)
});

// archex team               ghost team  archexteam

// tag archex

client.on("message", message => {
  const db = require("quick.db");
  let tag = db.get(`tag_${message.guild.id}`);
  if (message.author.bot) return;
  var spl = message.content.split(" ");
  if (spl[0] == "tag") {
    if (!tag) {
      message.channel.send(
        new Discord.MessageEmbed()
          .setColor("RED")
          .setDescription(
            `» **${message.guild.name}** adlı sunucuda tag ayarlanmamış!`
          )
      );
      return;
    }
    message.channel.send(
      new Discord.MessageEmbed()
        .setColor("#11657d")
        .setDescription(
          `» **${message.guild.name}** adlı sunucunun tagı \`${tag}\`'dır!`
        )
    );
  }
});

// LOG sistemi archex 


client.on('messageUpdate', async (oldMsg, newMsg)  => {
  let db = require("quick.db");
  if (!oldMsg.guild) return;
  if (oldMsg.author.bot) return;
  let kanal = await db.fetch(`Log_${oldMsg.guild.id}`)
            const embed = new Discord.MessageEmbed()
            .setColor(3066993)
            .setAuthor(`${oldMsg.author.username}  ${oldMsg.channel.name} Kanalına gönderdiği mesajını düzenledi.` , oldMsg.author.avatarURL)
            .addField('Eski Mesaj' , '```' +  oldMsg.content + '```')
      .addField('Yeni Mesaj' , '```' + newMsg.content  + '```')
            .setFooter(`ID: ${oldMsg.id}`);
  oldMsg.guild.channels.cache.get(kanal).send(embed)
});

client.on('messageDelete', async msg => {
  let db = require("quick.db");
  if (!msg.guild) return;
  let kanal = await db.fetch(`Log_${msg.guild.id}`)
if (msg.author.bot) return;
            var embed = new Discord.MessageEmbed()
            .setAuthor(msg.author.tag, msg.author.avatarURL())
            .setColor(15158332)
            .setDescription(`<@!${msg.author.id}> tarafından <#${msg.channel.id}> kanalına gönderilen mesajı silindi.`)
            .addField('Silinen Mesajı' , '```' + msg.content +'```')
            .setFooter(`ID: ${msg.id}`)
            msg.guild.channels.cache.get(kanal).send(embed)
})

client.on('channelCreate', async channel => {
  let db = require("quick.db");
   if(!channel.guild) return;
   let kanal = await db.fetch(`Log_${channel.guild.id}`)
  if (channel.type === "text") {
                var embed = new Discord.MessageEmbed()
                .setColor(3066993)
                .setAuthor(channel.guild.name, channel.guild.iconURL())
                .setDescription(`<#${channel.id}> kanalı oluşturuldu. _(metin kanalı)_`)
                .setFooter(`ID: ${channel.id}`)
                channel.guild.channels.cache.get(kanal).send({embed})
  }
  if (channel.type === "voice") {
                var embed = new Discord.MessageEmbed()
                .setColor(3066993)
                .setAuthor(channel.guild.name, channel.guild.iconURL())
                .setDescription(`${channel.name} kanalı oluşturuldu. _(ses kanalı)_`)
                .setFooter(`ID: ${channel.id}`)
        channel.guild.channels.cache.get(kanal).send({embed})
}
})

client.on('channelDelete', async channel => {
  let db = require("quick.db");
   if(!channel.guild) return;
   let kanal = await db.fetch(`Log_${channel.guild.id}`) 
  if (channel.type === "text") {
                var embed = new Discord.MessageEmbed()
                .setColor(3066993)
                .setAuthor(channel.guild.name, channel.guild.iconURL())
                .setDescription(`#${channel.name} kanalı silindi. _(metin kanalı)_`)
                .setFooter(`ID: ${channel.id}`)
                channel.guild.channels.cache.get(kanal).send({embed})
  }
  if (channel.type === "voice") {
                var embed = new Discord.MessageEmbed()
                .setColor(3066993)
                .setAuthor(channel.guild.name, channel.guild.iconURL())
                .setDescription(`${channel.name} kanalı silindi. _(ses kanalı)_`)
                .setFooter(`ID: ${channel.id}`)
        channel.guild.channels.cache.get(kanal).send({embed})
}
})



// sa as archex

client.on("message", async msg => {
  let db = require("quick.db");

    let saas = await db.fetch(`sa_${msg.guild.id}`);
  
    if (saas == 'kapali') return;
  
    if (saas == 'acik') {
  
    if (msg.content.toLowerCase() === 'sa') {
  
      msg.reply(new Discord.MessageEmbed() .setDescription('ve aleykum selam!') .setColor('BLUE'));
  
    }
  
    }

  })
