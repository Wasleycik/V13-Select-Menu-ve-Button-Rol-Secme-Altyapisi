const { Client, Intents,Collection, interaction, MessageActionRow, MessageSelectMenu } = require('discord.js');
const config = require("../../../config.json")
const db = require('quick.db');
const Discord = require("discord.js");
const moment = require("moment");
const limit = new Map();
moment.locale("tr");
	module.exports = {
    name: "renk-seçim",
    aliases: ["renk-menü"],

    execute: async (client, message, args, embed, author, channel, guild) => {
		if(message.author.id !== config.bot.owner) return message.channel.send({ embeds: [embed.setDescription(`${message.member}, Bu komutu kullanmak için gerekli yetkiye sahip değilsin!`)] }).then((e) => setTimeout(() => { e.delete(); }, 10000));

     message.delete()
					
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
	}}
