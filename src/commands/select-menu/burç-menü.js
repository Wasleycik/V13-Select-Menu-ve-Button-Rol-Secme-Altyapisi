
const { Client, Intents,Collection, interaction, MessageActionRow, MessageSelectMenu } = require('discord.js');
const config = require("../../../config.json")
const db = require('quick.db');
const Discord = require("discord.js");
const moment = require("moment");
const limit = new Map();
moment.locale("tr");
	module.exports = {
    name: "burç-seçim",
    aliases: ["burç-menü"],

    execute: async (client, message, args, embed, author, channel, guild) => {
		if(message.author.id !== "598974473374400512") return;

     message.delete()
		const menu = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('menu1')
					.setPlaceholder('Burç Rol Seçim.')
					.addOptions([
						{
							label: '♈ Koç',
							description: 'Koç rolünü almak için tıklayın.',
							value: 'koç',
						},
						{
							label: '♉ Boğa',
							description: 'Boğa rolünü almak için tıklayınız.',
							value: 'boğa',
						},
						{
							label: '♊ İkizler',
							description: 'İkizler rolünü almak için tıklayınız.',
							value: 'ikizler',
						},
						{
							label: '♋ Yengeç',
							description: 'Yengeç rolünü almak için tıklayınız.',
							value: 'yengeç',
						},
						{
							label: '♌ Aslan',
							description: 'Aslan rolünü almak için tıklayınız.',
							value: 'aslan',
						},
            {
							label: '♍ Başak',
							description: 'Başak rolünü almak için tıklayınız.',
							value: 'başak',
						},
            {
							label: '♎ Terazi',
							description: 'Terazi rolünü almak için tıklayınız.',
							value: 'terazi',
						},
            {
							label: '♏ Akrep',
							description: 'Akrep rolünü almak için tıklayınız.',
							value: 'akrep',
						},
            {
							label: '♐ Yay',
							description: 'yay rolünü almak için tıklayınız.',
							value: 'yay',
						},
            {
							label: '♑ Oğlak',
							description: 'Oğlak rolünü almak için tıklayınız.',
							value: 'oğlak',
						},
            {
							label: '♒ Kova',
							description: 'Kova rolünü almak için tıklayınız.',
							value: 'kova',
						},
            {
							label: '♓ Balık',
							description: 'Balık rolünü almak için tıklayınız.',
							value: 'balık',
						},
            {
							label: '🧺 Temizle',
							description: 'Aldığın Burç Rollerini Temizler',
							value: 'btemizle',
						},
					]),
			);

		const m = await message.channel.send({  content: `Aşağıdaki menüden \`Burç\` rollerinizi Seçebilirsiniz.`,components: [menu] });
					
		const collector = m.createMessageComponentCollector({ filter: w=>w.user.id===message.author.id })
	}}