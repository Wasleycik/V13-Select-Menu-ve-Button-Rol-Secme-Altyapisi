
const { Client, Intents,Collection, interaction, MessageActionRow, MessageSelectMenu } = require('discord.js');
const config = require("../../../config.json")
const db = require('quick.db');
const Discord = require("discord.js");
const moment = require("moment");
const limit = new Map();
moment.locale("tr");
	module.exports = {
    name: "oyun-seçim",
    aliases: ["oyuun","oyun-menü"],

    execute: async (client, message, args, embed, author, channel, guild) => {
		if(message.author.id !== config.bot.owner) return message.channel.send({ embeds: [embed.setDescription(`${message.member}, Bu komutu kullanmak için gerekli yetkiye sahip değilsin!`)] }).then((e) => setTimeout(() => { e.delete(); }, 10000));

     message.delete()
			
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
	}}

