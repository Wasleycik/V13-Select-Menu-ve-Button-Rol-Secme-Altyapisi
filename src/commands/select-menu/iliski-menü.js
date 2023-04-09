
const { Client, Intents,Collection, interaction, MessageActionRow, MessageSelectMenu } = require('discord.js');
const config = require("../../../config.json")
const db = require('quick.db');
const Discord = require("discord.js");
const moment = require("moment");
const limit = new Map();
moment.locale("tr");
	module.exports = {
    name: "iliski-seçim",
    aliases: ["ilişki-menü","iliski-menü"],

    execute: async (client, message, args, embed, author, channel, guild) => {
	if(message.author.id !== config.bot.owner) return message.channel.send({ embeds: [embed.setDescription(`${message.member}, Bu komutu kullanmak için gerekli yetkiye sahip değilsin!`)] }).then((e) => setTimeout(() => { e.delete(); }, 10000));

     message.delete()
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
	}}
