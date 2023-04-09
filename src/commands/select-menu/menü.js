const { Client, Intents,MessageEmbed,  Message, MessageButton ,Collection, interaction, MessageActionRow, MessageSelectMenu } = require('discord.js');
const config = require("../../../config.json")
const db = require('quick.db');
const Discord = require("discord.js");
const moment = require("moment");
const limit = new Map();
moment.locale("tr");
	module.exports = {
    name: "menü-seçim",
    aliases: ["menü"],

    execute: async (client, message, args, embed, author, channel, guild) => {
	if(message.author.id !== config.bot.owner) return message.channel.send({ embeds: [embed.setDescription(`${message.member}, Bu komutu kullanmak için gerekli yetkiye sahip değilsin!`)] }).then((e) => setTimeout(() => { e.delete(); }, 10000));

     message.delete()

   let menüembed = new MessageEmbed()
   .setColor("BLACK")
   .setAuthor({ name: client.guilds.cache.get(config.Guild.GuildID).name, iconURL: client.guilds.cache.get(config.Guild.GuildID).iconURL({dynamic:true})})
   .setDescription(`Aşağıdaki Butonları Kullanarak Kurmak İstediğiniz Menüleri Seçiniz`)

    const row = new MessageActionRow()
		.addComponents(

    new MessageButton()
    .setCustomId("burçkur")
    .setLabel("Burç")
    .setStyle("SECONDARY"),

    new MessageButton()
    .setCustomId("iliskikur")
    .setLabel("İlişki")
    .setStyle("SECONDARY"),

    new MessageButton()
    .setCustomId("oyunkur")
    .setLabel("Oyun")
    .setStyle("SECONDARY"),

    new MessageButton()
    .setCustomId("renkkur")
    .setLabel("Renk")
    .setStyle("SECONDARY"),

    new MessageButton()
    .setCustomId("takimkur")
    .setLabel("Takım")
    .setStyle("SECONDARY"),

	);
    const row2 = new MessageActionRow()
		.addComponents(

    new MessageButton()
    .setCustomId("hepsikur")
    .setLabel("Hepsini Kur")
    .setStyle("SECONDARY"),

    new MessageButton()
    .setCustomId("iptal")
    .setLabel("Kapat / İptal Et")
    .setStyle("SECONDARY"),

	);

 let msg = await message.channel.send({ embeds: [menüembed], components : [row,row2] })

    var filter = (xd) => xd.user.id === message.author.id;
    let collector = await msg.createMessageComponentCollector({ filter,  time: 30000 })
    
    collector.on("collect", async (menü) => {

if (menü.customId === "hepsikur") {
        await msg.delete({ timeout: 1500 });

        client.api.channels(message.channel.id).messages.post({
            data: {
                "content": `**Burç Rol :**`,
                "components": [{
                    "type": 1, "components": [{
                        "type": 3, "custom_id": "burc", "options": [
                            { "label": "Koç", "value": "koç", "emoji": { "name": "♈" }, },
                            { "label": "Boğa", "value": "boğa", "emoji": { "name": "♉" }, },
                            { "label": "İkizler", "value": "ikizler", "emoji": { "name": "♊" }, },
                            { "label": "Yengeç", "value": "yengeç", "emoji": { "name": "♋" }, },
                            { "label": "Aslan", "value": "aslan", "emoji": { "name": "♌" }, },
                            { "label": "Başak", "value": "başak", "emoji": { "name": "♍" }, },
                            { "label": "Terazi", "value": "terazi", "emoji": { "name": "♎" }, },
                            { "label": "Akrep", "value": "akrep", "emoji": { "name": "♏" }, },
                            { "label": "Yay", "value": "yay", "emoji": { "name": "♐" }, },
                            { "label": "Oğlak", "value": "oğlak", "emoji": { "name": "♑" }, },
                            { "label": "Kova", "value": "kova", "emoji": { "name": "♒" }, },
                            { "label": "Balık", "value": "balık", "emoji": { "name": "♓" }, },
                            { "label": "Rol İstemiyorum", "value": "rolsil", "emoji": { "name": "🗑️" }, }
                        ], "placeholder": "Burç Rol Al", "min_values": 1, "max_values": 1
                    }],
                }
                ]
            }
        })

        client.api.channels(message.channel.id).messages.post({
            data: {
                "content": `**İlişki Rol :**`,
                "components": [{
                    "type": 1, "components": [{
                        "type": 3, "custom_id": "iliski", "options": [
                            { "label": "Sevgilim Var", "value": "sevgilimvar", "emoji": { "name": "❤️" }, },
                            { "label": "Sevgilim Yok", "value": "sevgilimyok", "emoji": { "name": "💔" }, },
                            { "label": "Sevgili Yapmıyorum", "value": "sevgiliyapmıyorum", "emoji": { "name": "🤍" }, },
                            { "label": "Lgbt", "value": "lgbt", "emoji": { "name": "🏳️‍🌈" }, },
                            { "label": "Rol İstemiyorum", "value": "rolsil", "emoji": { "name": "🗑️" }, }
                        ], "placeholder": "İlişki Rol Al", "min_values": 1, "max_values": 1
                    }],
                }
                ]
            }
        })	

        client.api.channels(message.channel.id).messages.post({
            data: {
                "content": `**Oyun Rol :**`,
                "components": [{
                    "type": 1, "components": [{
                        "type": 3, "custom_id": "oyun", "options": [
                            { "label": "Minecraft", "value": "mc", "emoji": { "name": "🎯" }, },
                            { "label": "Mobile Legends", "value": "mlbb", "emoji": { "name": "🎯" }, },
                            { "label": "League Of Legends", "value": "lol", "emoji": { "name": "🎯" }, },
                            { "label": "Gta 5", "value": "gta5", "emoji": { "name": "🎯" }, },
                            { "label": "Valorant", "value": "valo", "emoji": { "name": "🎯" }, },
                            { "label": "Among Us", "value": "amongus", "emoji": { "name": "🎯" }, },
                            { "label": "Conter Strike Go", "value": "csgo", "emoji": { "name": "🎯" }, },
                            { "label": "Rol İstemiyorum", "value": "rolsil", "emoji": { "name": "🗑️" }, }
                        ], "placeholder": "Oyun Rol Al", "min_values": 1, "max_values": 1
                    }],
                }
                ]
            }
        })	

        client.api.channels(message.channel.id).messages.post({
            data: {
                "content": `**Renk Rol :**`,
                "components": [{
                    "type": 1, "components": [{
                        "type": 3, "custom_id": "renk", "options": [
                            { "label": "Mavi", "value": "mavi", "emoji": { "name": "🔵" }, },
                            { "label": "Kırmızı", "value": "kırmızı", "emoji": { "name": "🔴" }, },
                            { "label": "Sarı", "value": "sarı", "emoji": { "name": "🟡" }, },
                            { "label": "Siyah", "value": "siyah", "emoji": { "name": "🖤" }, },
                            { "label": "Beyaz", "value": "beyaz", "emoji": { "name": "🤍" }, },
                            { "label": "Yeşil", "value": "yeşil", "emoji": { "name": "🟢" }, },
                            { "label": "Mor", "value": "mor", "emoji": { "name": "🟣" }, },
                            { "label": "Kahverengi", "value": "kahverengi", "emoji": { "name": "🟤" }, },
                            { "label": "Turuncu", "value": "turuncu", "emoji": { "name": "🟠" }, },
                            { "label": "Rol İstemiyorum", "value": "rolsil", "emoji": { "name": "🗑️" }, }
                        ], "placeholder": "Renk Rol Al", "min_values": 1, "max_values": 1
                    }],
                }
                ]
            }
        })

        client.api.channels(message.channel.id).messages.post({
            data: {
                "content": `**Takım Rol :**`,
                "components": [{
                    "type": 1, "components": [{
                        "type": 3, "custom_id": "takim", "options": [
                            { "label": "Galatasaray", "value": "gs", "emoji": { "name": "❤️" }, },
                            { "label": "Fenerbahçe", "value": "fb", "emoji": { "name": "💛" }, },
                            { "label": "Beşiktaş", "value": "bjk", "emoji": { "name": "🖤" }, },
                            { "label": "TrabzonSpor", "value": "ts", "emoji": { "name": "💙" }, },
                            { "label": "Rol İstemiyorum", "value": "rolsil", "emoji": { "name": "🗑️" }, }
                        ], "placeholder": "Takım Rol Al", "min_values": 1, "max_values": 1
                    }],
                }
                ]
            }
        })

        }

if (menü.customId === "burçkur") {
        await msg.delete({ timeout: 1500 });
        client.api.channels(message.channel.id).messages.post({
            data: {
                "content": `**Burç Rol :**`,
                "components": [{
                    "type": 1, "components": [{
                        "type": 3, "custom_id": "burc", "options": [
                            { "label": "Koç", "value": "koç", "emoji": { "name": "♈" }, },
                            { "label": "Boğa", "value": "boğa", "emoji": { "name": "♉" }, },
                            { "label": "İkizler", "value": "ikizler", "emoji": { "name": "♊" }, },
                            { "label": "Yengeç", "value": "yengeç", "emoji": { "name": "♋" }, },
                            { "label": "Aslan", "value": "aslan", "emoji": { "name": "♌" }, },
                            { "label": "Başak", "value": "başak", "emoji": { "name": "♍" }, },
                            { "label": "Terazi", "value": "terazi", "emoji": { "name": "♎" }, },
                            { "label": "Akrep", "value": "akrep", "emoji": { "name": "♏" }, },
                            { "label": "Yay", "value": "yay", "emoji": { "name": "♐" }, },
                            { "label": "Oğlak", "value": "oğlak", "emoji": { "name": "♑" }, },
                            { "label": "Kova", "value": "kova", "emoji": { "name": "♒" }, },
                            { "label": "Balık", "value": "balık", "emoji": { "name": "♓" }, },
                            { "label": "Rol İstemiyorum", "value": "rolsil", "emoji": { "name": "🗑️" }, }
                        ], "placeholder": "Burç Rol Al", "min_values": 1, "max_values": 1
                    }],
                }
                ]
            }
        })

        }
if (menü.customId === "renkkur") {
        await msg.delete({ timeout: 1500 });
        client.api.channels(message.channel.id).messages.post({
            data: {
                "content": `**Renk Rol :**`,
                "components": [{
                    "type": 1, "components": [{
                        "type": 3, "custom_id": "renk", "options": [
                            { "label": "Mavi", "value": "mavi", "emoji": { "name": "🔵" }, },
                            { "label": "Kırmızı", "value": "kırmızı", "emoji": { "name": "🔴" }, },
                            { "label": "Sarı", "value": "sarı", "emoji": { "name": "🟡" }, },
                            { "label": "Siyah", "value": "siyah", "emoji": { "name": "🖤" }, },
                            { "label": "Beyaz", "value": "beyaz", "emoji": { "name": "🤍" }, },
                            { "label": "Yeşil", "value": "yeşil", "emoji": { "name": "🟢" }, },
                            { "label": "Mor", "value": "mor", "emoji": { "name": "🟣" }, },
                            { "label": "Kahverengi", "value": "kahverengi", "emoji": { "name": "🟤" }, },
                            { "label": "Turuncu", "value": "turuncu", "emoji": { "name": "🟠" }, },
                            { "label": "Rol İstemiyorum", "value": "rolsil", "emoji": { "name": "🗑️" }, }
                        ], "placeholder": "Renk Rol Al", "min_values": 1, "max_values": 1
                    }],
                }
                ]
            }
        })

        }
if (menü.customId === "iliskikur") {
        await msg.delete({ timeout: 1500 });

        client.api.channels(message.channel.id).messages.post({
            data: {
                "content": `**İlişki Rol :**`,
                "components": [{
                    "type": 1, "components": [{
                        "type": 3, "custom_id": "iliski", "options": [
                            { "label": "Sevgilim Var", "value": "sevgilimvar", "emoji": { "name": "❤️" }, },
                            { "label": "Sevgilim Yok", "value": "sevgilimyok", "emoji": { "name": "💔" }, },
                            { "label": "Sevgili Yapmıyorum", "value": "sevgiliyapmıyorum", "emoji": { "name": "🤍" }, },
                            { "label": "Lgbt", "value": "lgbt", "emoji": { "name": "🏳️‍🌈" }, },
                            { "label": "Rol İstemiyorum", "value": "rolsil", "emoji": { "name": "🗑️" }, }
                        ], "placeholder": "İlişki Rol Al", "min_values": 1, "max_values": 1
                    }],
                }
                ]
            }
        })	
        }
if (menü.customId === "oyunkur") {
        await msg.delete({ timeout: 1500 });
        client.api.channels(message.channel.id).messages.post({
            data: {
                "content": `**Oyun Rol :**`,
                "components": [{
                    "type": 1, "components": [{
                        "type": 3, "custom_id": "oyun", "options": [
                            { "label": "Minecraft", "value": "mc", "emoji": { "name": "🎯" }, },
                            { "label": "Mobile Legends", "value": "mlbb", "emoji": { "name": "🎯" }, },
                            { "label": "League Of Legends", "value": "lol", "emoji": { "name": "🎯" }, },
                            { "label": "Gta 5", "value": "gta5", "emoji": { "name": "🎯" }, },
                            { "label": "Valorant", "value": "valo", "emoji": { "name": "🎯" }, },
                            { "label": "Among Us", "value": "amongus", "emoji": { "name": "🎯" }, },
                            { "label": "Conter Strike Go", "value": "csgo", "emoji": { "name": "🎯" }, },
                            { "label": "Rol İstemiyorum", "value": "rolsil", "emoji": { "name": "🗑️" }, }
                        ], "placeholder": "Oyun Rol Al", "min_values": 1, "max_values": 1
                    }],
                }
                ]
            }
        })	

        }
if (menü.customId === "takimkur") {
        await msg.delete({ timeout: 1500 });

        client.api.channels(message.channel.id).messages.post({
            data: {
                "content": `**Takım Rol :**`,
                "components": [{
                    "type": 1, "components": [{
                        "type": 3, "custom_id": "takim", "options": [
                            { "label": "Galatasaray", "value": "gs", "emoji": { "name": "❤️" }, },
                            { "label": "Fenerbahçe", "value": "fb", "emoji": { "name": "💛" }, },
                            { "label": "Beşiktaş", "value": "bjk", "emoji": { "name": "🖤" }, },
                            { "label": "TrabzonSpor", "value": "ts", "emoji": { "name": "💙" }, },
                            { "label": "Rol İstemiyorum", "value": "rolsil", "emoji": { "name": "🗑️" }, }
                        ], "placeholder": "Takım Rol Al", "min_values": 1, "max_values": 1
                    }],
                }
                ]
            }
        })
        }

}

  
)}}
