
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
		if(message.author.id !== "598974473374400512") return;

     message.delete()
		const menu = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('menu1')
					.setPlaceholder('Oyun Rol Seçim.')
					.addOptions([
						{
							label: 'Minecraft',
							description: 'Minecraft rolünü almak için tıklayın.',
							value: 'mc',
						},
						{
							label: 'Mobile Legends',
							description: 'Mobile Legends rolünü almak için tıklayınız.',
							value: 'mlbb',
						},
						{
							label: 'LoL',
							description: 'League of Legends rolünü almak için tıklayınız.',
							value: 'lol',
						},
						{
							label: 'GTA5',
							description: 'GTA 5 rolünü almak için tıklayınız.',
							value: 'gta5',
						},
						{
							label: 'Valorant',
							description: 'Valorant rolünü almak için tıklayınız.',
							value: 'valo',
						},
            {
							label: 'Among Us',
							description: 'Among Us rolünü almak için tıklayınız.',
							value: 'amongus',
						},
            {
							label: 'cs Go',
							description: 'Cs Go rolünü almak için tıklayınız.',
							value: 'csgo',
						},
            {
							label: '🧺 Temizle',
							description: 'Aldığın oyun Rollerini Temizler',
							value: 'otemizle',
						},
					]),
			);

		const m = await message.channel.send({  content: `Aşağıdaki menüden \`oyun\` rollerinizi Seçebilirsiniz.`,components: [menu] });
					
		const collector = m.createMessageComponentCollector({ filter: w=>w.user.id===message.author.id })
	}}
