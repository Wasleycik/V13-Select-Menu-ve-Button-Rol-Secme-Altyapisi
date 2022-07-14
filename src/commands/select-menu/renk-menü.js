
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
		if(message.author.id !== "598974473374400512") return;

     message.delete()
		const menu = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('menu1')
					.setPlaceholder('Renk Rol Seçim.')
					.addOptions([
						{
							label: '⚪️ Beyaz',
							description: 'Beyaz Renk rolünü almak için tıklayın.',
							value: 'beyaz',
						},
						{
							label: '⚫️ Siyah',
							description: 'Siyah Renk rolünü almak için tıklayınız.',
							value: 'siyah',
						},
						{
							label: '🟢 Yeşil',
							description: 'Yeşil Renk rolünü almak için tıklayınız.',
							value: 'yeşil',
						},
						{
							label: '🟡 Sarı',
							description: 'Sarı Renk rolünü almak için tıklayınız.',
							value: 'sarı',
						},
						{
							label: '🔴 Kırmızı',
							description: 'Kırmızı Renk rolünü almak için tıklayınız.',
							value: 'kırmızı',
						},
            {
							label: '🟣 Mor',
							description: 'Mor Renk rolünü almak için tıklayınız.',
							value: 'mor',
						},
            {
							label: '🔵 Mavi',
							description: 'Mavi Renk rolünü almak için tıklayınız.',
							value: 'mavi',
						},
            {
							label: '🟤 kahverengi',
							description: 'Kahverengi Renk rolünü almak için tıklayınız.',
							value: 'kahverengi',
						},
            {
							label: '🟠 Turuncu',
							description: 'Turuncu Renk rolünü almak için tıklayınız.',
							value: 'turuncu',
						},
            {
							label: '🧺 Temizle',
							description: 'Aldığın oyun Rollerini Temizler',
							value: 'rtemizle',
						},
					]),
			);

		const m = await message.channel.send({  content: `Aşağıdaki menüden \`Renk\` rollerinizi Seçebilirsiniz.`,components: [menu] });
					
		const collector = m.createMessageComponentCollector({ filter: w=>w.user.id===message.author.id })
	}}
