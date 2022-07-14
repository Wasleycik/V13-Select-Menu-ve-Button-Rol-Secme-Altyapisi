const config = require("../../../config.json")
const db = require('quick.db');
const Discord = require("discord.js");
const moment = require("moment");
const limit = new Map();
moment.locale("tr");
module.exports = {
    name: "iliski-button",
    aliases: ["ilişki-button"],

    execute: async (client, message, args, embed, author, channel, guild) => {
        if (!message.member.permissions.has("ADMINISTRATOR")) return message.reply({ embeds: [embed.setDescription(`Bu komutu kullanabilmek için öncelikle gerekli yetkin olmalı!`)] }).catch((err) => console.log(err), client.tick(message)).then((e) => setTimeout(() => { e.delete(); }, 10000));
  
       message.delete()
      let button1 = new Discord.MessageButton()
          .setStyle('SUCCESS')
          .setEmoji('❤️')
          .setLabel('Sevgilim Var')
          .setCustomId('lovers')
      
      let button2 = new Discord.MessageButton()
          .setStyle('SUCCESS')
          .setEmoji('💔')
          .setLabel('Sevgilim Yok')
          .setCustomId('alone')
   
      let button3 = new Discord.MessageButton()
          .setStyle('SUCCESS')
          .setEmoji('🤍')
          .setLabel('Sevgili Yapmıyorum')
          .setCustomId('sevgiliyapmıyorum')
 
      let button4 = new Discord.MessageButton()
          .setStyle('SUCCESS')
          .setEmoji('🏳️‍🌈')
          .setLabel('Lgbt')
          .setCustomId('lgbt')
     
  
      let row = new Discord.MessageActionRow()
          .addComponents(button1,button2,button3,button4)
      
    
  
      message.channel.send({ content:`Aşağıdaki Butonlara Basarak \`İlişki\` Durumunuzu Seçebilirsiniz
  
      `, components: [row]  }) ;
  
  
  
  
    }
}
