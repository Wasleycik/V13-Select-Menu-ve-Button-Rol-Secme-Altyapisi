const config = require("../../../config.json")
const db = require('quick.db');
const Discord = require("discord.js");
const moment = require("moment");
const limit = new Map();
moment.locale("tr");
module.exports = {
    name: "etkinlik-button",
    aliases: ["etkinlik"],

    execute: async (client, message, args, embed, author, channel, guild) => {
        if (!message.member.permissions.has("ADMINISTRATOR")) return message.reply({ embeds: [embed.setDescription(`Bu komutu kullanabilmek için öncelikle gerekli yetkin olmalı!`)] }).catch((err) => console.log(err), client.tick(message)).then((e) => setTimeout(() => { e.delete(); }, 10000));
      
       message.delete()
      let button1 = new Discord.MessageButton()
          .setStyle('SUCCESS')
          .setEmoji('🎁')
          .setLabel('Etkinlik Katılımcısı')
          .setCustomId('etkinlik')
  
      let button2 = new Discord.MessageButton()
          .setStyle('SUCCESS')
          .setEmoji('🎉')
          .setLabel('Çekiliş Katılımcısı')
          .setCustomId('cekilis')
  
     
  
  
      let row = new Discord.MessageActionRow()
          .addComponents(button1, button2,)
      
    
  
      message.channel.send({ content:`
Merhaba **${message.guild.name}** üyeleri, 

Aşağıda bulunan butonlardan Çekiliş Katılımcısı alarak çekilişlere katılıp **Netflix, Spotify, Nitro** ve benzeri ödüllerin sahibi  olabilirsiniz.

Aşağıda bulunan butonlardan Etkinlik Katılımcısı alarak **konserlerimizden, oyunlarımızdan, ve etkinliklerimizden** faydalanabilirsiniz.

***NOT***: Kayıtlı olarak hepiniz bu kanalı görebilmektesiniz. Bu sunucumuzda everyone here atılmayacağından dolayı kesinlikle rollerinizi almayı unutmayın!

      `, components: [row]  }) ;
  
  
  
  
    }
}
