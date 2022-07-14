
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
	if(message.author.id !== "598974473374400512") return;

     message.delete()
		const menu = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('menu1')
					.setPlaceholder('İlişki Rol Seçim.')
					.addOptions([
						{
							label: '❤️ Lovers',
							description: 'Lovers rolünü almak için tıklayın.',
							value: 'lovers',
						},
            {
							label: '💔 Alone',
							description: 'Alone rolünü almak için tıklayınız.',
							value: 'alone',
						},
            {
							label: '🤍 sevgili yapmıyorum',
							description: 'sevgili yapmıyorum rolünü almak için tıklayınız.',
							value: 'sevgiliyapmıyorum',
						},
						{
							label: '🏳️‍🌈 LGBT',
							description: 'LGBT rolünü almak için tıklayınız.',
							value: 'lgbt',
						},
            {
							label: '🧺 Temizle',
							description: 'Aldığın ilişki Rollerini Temizler',
							value: 'itemizle',
						},
					]),
			);

		const m = await message.channel.send({  content: `Aşağıdaki menüden \`ilişki\` rollerinizi seçebilirsiniz.`,components: [menu] });
					
		const collector = m.createMessageComponentCollector({ filter: w=>w.user.id===message.author.id })
	}}
