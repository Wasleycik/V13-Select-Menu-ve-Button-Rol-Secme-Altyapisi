
const { Client, Intents,Collection, interaction, MessageActionRow, MessageSelectMenu } = require('discord.js');
const config = require("../../../config.json")
const db = require('quick.db');
const Discord = require("discord.js");
const moment = require("moment");
const limit = new Map();
moment.locale("tr");
	module.exports = {
    name: "takım-seçim",
    aliases: ["takım-menü"],

    execute: async (client, message, args, embed, author, channel, guild) => {
		if(message.author.id !== config.bot.owner) return message.channel.send({ embeds: [embed.setDescription(`${message.member}, Bu komutu kullanmak için gerekli yetkiye sahip değilsin!`)] }).then((e) => setTimeout(() => { e.delete(); }, 10000));

     message.delete()
					
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
	}}
