
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
		if(message.author.id !== "598974473374400512") return;

     message.delete()
		const menu = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('menu1')
					.setPlaceholder('Takım Rol Seçim.')
					.addOptions([
						{
							label: '❤️ GalataSaray ❤️',
							description: 'GalataSaray rolünü almak için tıklayın.',
							value: 'gs',
						},
						{
							label: '💛 FenerBahçe 💛',
							description: 'FenerBahçe rolünü almak için tıklayınız.',
							value: 'fb',
						},
						{
							label: '🖤 BeşikTaş 🖤',
							description: 'BeşikTaş rolünü almak için tıklayınız.',
							value: 'bjk',
						},
						{
							label: '💙 TrabzonSpor 💙',
							description: 'TrabzonSpor rolünü almak için tıklayınız.',
							value: 'ts',
						},
            {
							label: '🧺 Temizle',
							description: 'Aldığın Takım Rollerini Temizler',
							value: 'ttemizle',
						},
					]),
			);

		const m = await message.channel.send({  content: `Aşağıdaki menüden \`Takım\` rollerinizi Seçebilirsiniz.`,components: [menu] });
					
		const collector = m.createMessageComponentCollector({ filter: w=>w.user.id===message.author.id })
	}}
