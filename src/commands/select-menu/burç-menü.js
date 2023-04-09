
const { Client, Intents,Collection, interaction, MessageActionRow, MessageSelectMenu } = require('discord.js');
const config = require("../../../config.json")
const db = require('quick.db');
const Discord = require("discord.js");
const moment = require("moment");
const limit = new Map();
moment.locale("tr");
	module.exports = {
    name: "buçr-seçim",
    aliases: ["burç-menü","burç-menü"],

    execute: async (client, message, args, embed, author, channel, guild) => {
	if(message.author.id !== config.bot.owner) return message.channel.send({ embeds: [embed.setDescription(`${message.member}, Bu komutu kullanmak için gerekli yetkiye sahip değilsin!`)] }).then((e) => setTimeout(() => { e.delete(); }, 10000));

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

}
