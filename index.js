const { Client, Collection, Intents } = require("discord.js");
const client = global.client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_VOICE_STATES,
    Intents.FLAGS.GUILD_PRESENCES,
  ]
});
const dotenv = require("dotenv");
dotenv.config();
const { readdir } = require("fs");
require("moment-duration-format");
const config = require("./config");
const commands = client.commands = new Collection();
const aliases = client.aliases = new Collection();
client.cooldown = new Map();
client.commandblocked = [];

require("./src/helpers/function")(client);

readdir("./src/commands/", (err, files) => {
  if (err) console.error(err)
  files.forEach(f => {
    readdir("./src/commands/" + f, (err2, files2) => {
      if (err2) console.log(err2)
      files2.forEach(file => {
        let prop = require(`./src/commands/${f}/` + file);
        console.log(`${prop.name} yüklendi!`);
        commands.set(prop.name, prop);
        prop.aliases.forEach(alias => {
          aliases.set(alias, prop.name);
        });
      });
    });
  });
});

readdir("./src/events", (err, files) => {
  if (err) return console.error(err);
  files.filter((file) => file.endsWith(".js")).forEach((file) => {
    let prop = require(`./src/events/${file}`);
    if (!prop.conf) return;
    client.on(prop.conf.name, prop);
    console.log(`${prop.conf.name} yüklendi!`);
  });
});

client.login(config.bot.token)
  .then(() => console.log(`Bot ${client.user.username} olarak giriş yaptı!`))
  .catch((err) => console.log(`Bot Giriş yapamadı sebep: ${err}`));

  client.on("interactionCreate",async (interaction, message) => {

    if(interaction.isButton()) {

      if(interaction.customId === "etkinlik") {
        let member = interaction.member
        if(member.roles.cache.has(config.roles.etkinlik)) {
          await member.roles.remove(config.roles.etkinlik);
          await interaction.reply({ content: `<@&${config.roles.etkinlik}> rolünü üzerinizden başarıyla aldım!`, ephemeral: true });
        } else {
          await member.roles.add(config.roles.etkinlik);
          await interaction.reply({ content: `<@&${config.roles.etkinlik}> rolünü üzerinize başarıyla ekledim!`, ephemeral: true });
        };
      };
      
      
      if(interaction.customId === "cekilis") {
        let member = interaction.member
        if(member.roles.cache.has(config.roles.çekiliş)) {
          await member.roles.remove(config.roles.çekiliş);
          await interaction.reply({ content: `<@&${config.roles.çekiliş}> rolünü üzerinizden başarıyla aldım!`, ephemeral: true });
        } else {
          await member.roles.add(config.roles.çekiliş);
          await interaction.reply({ content: `<@&${config.roles.çekiliş}> rolünü üzerinize başarıyla ekledim!`, ephemeral: true });
        };
      };

if(interaction.customId === "partner") {
        let member = interaction.member
        if(member.roles.cache.has(config.roles.partner)) {
          await member.roles.remove(config.roles.partner);
          await interaction.reply({ content: `<@&${config.roles.partner}> rolünü üzerinizden başarıyla aldım!`, ephemeral: true });
        } else {
          await member.roles.add(config.roles.partner);
          await interaction.reply({ content: `<@&${config.roles.partner}> rolünü üzerinize başarıyla ekledim!`, ephemeral: true });
        };
      };
if(interaction.customId === "chatetiket") {
        let member = interaction.member
        if(member.roles.cache.has(config.roles.chatetiket)) {
          await member.roles.remove(config.roles.chatetiket);
          await interaction.reply({ content: `<@&${config.roles.chatetiket}> rolünü üzerinizden başarıyla aldım!`, ephemeral: true });
        } else {
          await member.roles.add(config.roles.chatetiket);
          await interaction.reply({ content: `<@&${config.roles.chatetiket}> rolünü üzerinize başarıyla ekledim!`, ephemeral: true });
        };
      };
if(interaction.customId === "günlüksoru") {
        let member = interaction.member
        if(member.roles.cache.has(config.roles.günlüksoru)) {
          await member.roles.remove(config.roles.günlüksoru);
          await interaction.reply({ content: `<@&${config.roles.günlüksoru}> rolünü üzerinizden başarıyla aldım!`, ephemeral: true });
        } else {
          await member.roles.add(config.roles.günlüksoru);
          await interaction.reply({ content: `<@&${config.roles.günlüksoru}> rolünü üzerinize başarıyla ekledim!`, ephemeral: true });
        };
      };
if(interaction.customId === "swduyuru") {
        let member = interaction.member
        if(member.roles.cache.has(config.roles.sunucuduyuru)) {
          await member.roles.remove(config.roles.sunucuduyuru);
          await interaction.reply({ content: `<@&${config.roles.sunucuduyuru}> rolünü üzerinizden başarıyla aldım!`, ephemeral: true });
        } else {
          await member.roles.add(config.roles.sunucuduyuru);
          await interaction.reply({ content: `<@&${config.roles.sunucuduyuru}> rolünü üzerinize başarıyla ekledim!`, ephemeral: true });
        };
      };
      if(interaction.customId === "lovers") {
        let member = interaction.member
        if(member.roles.cache.has(config.roles.couple)) {
          await member.roles.remove(config.roles.couple);
          await interaction.reply({ content: `<@&${config.roles.couple}> rolünü üzerinizden başarıyla aldım!`, ephemeral: true });
        } else {
          await member.roles.add(config.roles.couple);
          
          await member.roles.remove(config.roles.lgbt);
          await member.roles.remove(config.roles.alone);
          await member.roles.remove(config.roles.sevgiliyapmıyorum);
          await interaction.reply({ content: `<@&${config.roles.couple}> rolünü üzerinize başarıyla ekledim!`, ephemeral: true });
        };
      };

if(interaction.customId === "alone") {
        let member = interaction.member
        if(member.roles.cache.has(config.roles.alone)) {
          await member.roles.remove(config.roles.alone);
          await interaction.reply({ content: `<@&${config.roles.alone}> rolünü üzerinizden başarıyla aldım!`, ephemeral: true });
        } else {
          await member.roles.add(config.roles.alone);
           
          await member.roles.remove(config.roles.lgbt);
          await member.roles.remove(config.roles.couple);
          await member.roles.remove(config.roles.sevgiliyapmıyorum);
          await interaction.reply({ content: `<@&${config.roles.alone}> rolünü üzerinize başarıyla ekledim!`, ephemeral: true });
        };
      };
      if(interaction.customId === "sevgiliyapmıyorum") {
        let member = interaction.member
        if(member.roles.cache.has(config.roles.sevgiliyapmıyorum)) {
          await member.roles.remove(config.roles.sevgiliyapmıyorum);
          await interaction.reply({ content: `<@&${config.roles.sevgiliyapmıyorum}> rolünü üzerinizden başarıyla aldım!`, ephemeral: true });
        } else {
          await member.roles.add(config.roles.sevgiliyapmıyorum);

          await member.roles.remove(config.roles.lgbt);
          await member.roles.remove(config.roles.alone);
          await member.roles.remove(config.roles.couple);
          await interaction.reply({ content: `<@&${config.roles.sevgiliyapmıyorum}> rolünü üzerinize başarıyla ekledim!`, ephemeral: true });
        };
      };

if(interaction.customId === "lgbt") {
        let member = interaction.member
        if(member.roles.cache.has(config.roles.lgbt)) {
          await member.roles.remove(config.roles.lgbt);
          await interaction.reply({ content: `<@&${config.roles.lgbt}> rolünü üzerinizden başarıyla aldım!`, ephemeral: true });
        } else {
          await member.roles.add(config.roles.lgbt);

          await member.roles.remove(config.roles.alone);
          await member.roles.remove(config.roles.couple);
          await member.roles.remove(config.roles.sevgiliyapmıyorum);
          await interaction.reply({ content: `<@&${config.roles.lgbt}> rolünü üzerinize başarıyla ekledim!`, ephemeral: true });
        };
      };

    }})

///////////////////////////////////// OYUN ROL ALMA ////////////////////////////////////////
 


client.on("interactionCreate", async(interaction) => {
	if(interaction.values && interaction.values[0] == 'mc'){
			if(!interaction.member.roles.cache.has(config.roles.minecraft)) {
				await interaction.member.roles.add(config.roles.minecraft).catch(err => {})
				await interaction.reply({content: `Başarıyla <@&${config.roles.minecraft}> rolünü aldın.`, ephemeral: true})
			} else {
				await interaction.member.roles.remove(config.roles.minecraft).catch(err => {})
			    await interaction.reply({content: `Başarıyla <@&${config.roles.minecraft}> rolünü üzerinden kaldırdın.`, ephemeral: true})
			}
	}

	if(interaction.values && interaction.values[0] == 'mlbb'){
		if(!interaction.member.roles.cache.has(config.roles.mlbb)) {
			await interaction.member.roles.add(config.roles.mlbb).catch(err => {})
			await interaction.reply({content: `Başarıyla <@&${config.roles.mlbb}> rolünü aldın.`, ephemeral: true})
		} else {
			await interaction.member.roles.remove(config.roles.mlbb).catch(err => {})
			await interaction.reply({content: `Başarıyla <@&${config.roles.mlbb}> rolünü üzerinden kaldırdın.`, ephemeral: true})
			
		}
}

if(interaction.values && interaction.values[0] == 'amongus'){
		if(!interaction.member.roles.cache.has(config.roles.amongus)) {
			await interaction.member.roles.add(config.roles.amongus).catch(err => {})
			await interaction.reply({content: `Başarıyla <@&${config.roles.amongus}> rolünü aldın.`, ephemeral: true})
		} else {
			await interaction.member.roles.remove(config.roles.amongus).catch(err => {})
			await interaction.reply({content: `Başarıyla <@&${config.roles.amongus}> rolünü üzerinden kaldırdın.`, ephemeral: true})
			
		}
}

if(interaction.values && interaction.values[0] == 'csgo'){
		if(!interaction.member.roles.cache.has(config.roles.csgo)) {
			await interaction.member.roles.add(config.roles.csgo).catch(err => {})
			await interaction.reply({content: `Başarıyla <@&${config.roles.csgo}> rolünü aldın.`, ephemeral: true})
		} else {
			await interaction.member.roles.remove(config.roles.csgo).catch(err => {})
			await interaction.reply({content: `Başarıyla <@&${config.roles.csgo}> rolünü üzerinden kaldırdın.`, ephemeral: true})
			
		}
}



if(interaction.values && interaction.values[0] == 'lol'){
	if(!interaction.member.roles.cache.has(config.roles.lol)) {
		await interaction.member.roles.add(config.roles.lol).catch(err => {})
		await interaction.reply({content: `Başarıyla <@&${config.roles.lol}> rolünü aldın.`, ephemeral: true})
	} else {
		await interaction.member.roles.remove(config.roles.lol).catch(err => {})
		await interaction.reply({content: `Başarıyla <@&${config.roles.lol}> rolünü üzerinden kaldırdın.`, ephemeral: true})
	}
}

if(interaction.values && interaction.values[0] == 'gta5'){
	if(!interaction.member.roles.cache.has(config.roles.gta5)) {
		await interaction.member.roles.add(config.roles.gta5).catch(err => {})
		await interaction.reply({content: `Başarıyla <@&${config.roles.gta5}> rolünü aldın.`, ephemeral: true})
	} else {
		await interaction.member.roles.remove(config.roles.gta5).catch(err => {})
		await interaction.reply({content: `Başarıyla <@&${config.roles.gta5}> rolünü üzerinden kaldırdın.`, ephemeral: true})
	}
}

if(interaction.values && interaction.values[0] == 'valo'){
	if(!interaction.member.roles.cache.has(config.roles.valorant)) {
		await interaction.member.roles.add(config.roles.valorant).catch(err => {})
		await interaction.reply({content: `Başarıyla <@&${config.roles.valorant}> rolünü aldın.`, ephemeral: true})
	} else {
		await interaction.member.roles.remove(config.roles.valorant).catch(err => {})
		await interaction.reply({content: `Başarıyla <@&${config.roles.valorant}> rolünü üzerinden kaldırdın.`, ephemeral: true})
	}
}

if(interaction.values && interaction.values[0] == 'otemizle'){
	if(!interaction.member.roles.cache.has(config.roles.valorant)) {
		await interaction.member.roles.remove(config.roles.valorant).catch(err => {})
    await interaction.member.roles.remove(config.roles.gta5).catch(err => {})
    await interaction.member.roles.remove(config.roles.lol).catch(err => {})
    await interaction.member.roles.remove(config.roles.csgo).catch(err => {})
    await interaction.member.roles.remove(config.roles.amongus).catch(err => {})
    await interaction.member.roles.remove(config.roles.mlbb).catch(err => {})
    await interaction.member.roles.remove(config.roles.minecraft).catch(err => {})
		await interaction.reply({content: `Başarıyla <@&${config.roles.valorant}> rolünü aldın.`, ephemeral: true})
	} 
}
	
})  

///////////////////////////////////// burç ROL ALMA ////////////////////////////////////////
 

client.on("interactionCreate", async(interaction) => {
	if(interaction.values && interaction.values[0] == 'koç'){
	if(!interaction.member.roles.cache.has(config.roles.koç)) {
    await interaction.member.roles.remove(config.roles.boğa).catch(err => {})
    await interaction.member.roles.remove(config.roles.ikizler).catch(err => {})
    await interaction.member.roles.remove(config.roles.yengeç).catch(err => {})
    await interaction.member.roles.remove(config.roles.aslan).catch(err => {})
    await interaction.member.roles.remove(config.roles.başak).catch(err => {})
    await interaction.member.roles.remove(config.roles.terazi).catch(err => {})
    await interaction.member.roles.remove(config.roles.akrep).catch(err => {})
    await interaction.member.roles.remove(config.roles.yay).catch(err => {})
    await interaction.member.roles.remove(config.roles.oğlak).catch(err => {})
    await interaction.member.roles.remove(config.roles.kova).catch(err => {})
    await interaction.member.roles.remove(config.roles.balık).catch(err => {})
		await interaction.member.roles.add(config.roles.koç).catch(err => {})
		await interaction.reply({content: 'Başarıyla \`koç\` rolünü aldın.', ephemeral: true})
	} else {
		await interaction.member.roles.remove(config.roles.koç).catch(err => {})
		await interaction.reply({content: 'Başarıyla \`koç\` rolünü üzerinden kaldırdın.', ephemeral: true})
			}
	}

	if(interaction.values && interaction.values[0] == 'boğa'){
	if(!interaction.member.roles.cache.has(config.roles.boğa)) {
    await interaction.member.roles.remove(config.roles.koç).catch(err => {})
    await interaction.member.roles.remove(config.roles.ikizler).catch(err => {})
    await interaction.member.roles.remove(config.roles.yengeç).catch(err => {})
    await interaction.member.roles.remove(config.roles.aslan).catch(err => {})
    await interaction.member.roles.remove(config.roles.başak).catch(err => {})
    await interaction.member.roles.remove(config.roles.terazi).catch(err => {})
    await interaction.member.roles.remove(config.roles.akrep).catch(err => {})
    await interaction.member.roles.remove(config.roles.yay).catch(err => {})
    await interaction.member.roles.remove(config.roles.oğlak).catch(err => {})
    await interaction.member.roles.remove(config.roles.kova).catch(err => {})
    await interaction.member.roles.remove(config.roles.balık).catch(err => {})
		await interaction.member.roles.add(config.roles.boğa).catch(err => {})
		await interaction.reply({content: 'Başarıyla \`boğa\` rolünü aldın.', ephemeral: true})
	} else {
		await interaction.member.roles.remove(config.roles.boğa).catch(err => {})
		await interaction.reply({content: 'Başarıyla \`boğa\` rolünü üzerinden kaldırdın.', ephemeral: true})
			
		}
}

if(interaction.values && interaction.values[0] == 'ikizler'){
	if(!interaction.member.roles.cache.has(config.roles.ikizler)) {
    await interaction.member.roles.remove(config.roles.koç).catch(err => {})
    await interaction.member.roles.remove(config.roles.boğa).catch(err => {})
    await interaction.member.roles.remove(config.roles.yengeç).catch(err => {})
    await interaction.member.roles.remove(config.roles.aslan).catch(err => {})
    await interaction.member.roles.remove(config.roles.başak).catch(err => {})
    await interaction.member.roles.remove(config.roles.terazi).catch(err => {})
    await interaction.member.roles.remove(config.roles.akrep).catch(err => {})
    await interaction.member.roles.remove(config.roles.yay).catch(err => {})
    await interaction.member.roles.remove(config.roles.oğlak).catch(err => {})
    await interaction.member.roles.remove(config.roles.kova).catch(err => {})
    await interaction.member.roles.remove(config.roles.balık).catch(err => {})
		await interaction.member.roles.add(config.roles.ikizler).catch(err => {})
		await interaction.reply({content: 'Başarıyla \`ikizler\` rolünü aldın.', ephemeral: true})
	} else {
		await interaction.member.roles.remove(config.roles.ikizler).catch(err => {})
		await interaction.reply({content: 'Başarıyla \`ikizler\` rolünü üzerinden kaldırdın.', ephemeral: true})
		
		}
}

if(interaction.values && interaction.values[0] == 'yengeç'){
	if(!interaction.member.roles.cache.has(config.roles.yengeç)) {
    await interaction.member.roles.remove(config.roles.koç).catch(err => {})
    await interaction.member.roles.remove(config.roles.boğa).catch(err => {})
    await interaction.member.roles.remove(config.roles.ikizler).catch(err => {})
    await interaction.member.roles.remove(config.roles.aslan).catch(err => {})
    await interaction.member.roles.remove(config.roles.başak).catch(err => {})
    await interaction.member.roles.remove(config.roles.terazi).catch(err => {})
    await interaction.member.roles.remove(config.roles.akrep).catch(err => {})
    await interaction.member.roles.remove(config.roles.yay).catch(err => {})
    await interaction.member.roles.remove(config.roles.oğlak).catch(err => {})
    await interaction.member.roles.remove(config.roles.kova).catch(err => {})
    await interaction.member.roles.remove(config.roles.balık).catch(err => {})
		await interaction.member.roles.add(config.roles.yengeç).catch(err => {})
		await interaction.reply({content: 'Başarıyla \`yengeç\` rolünü aldın.', ephemeral: true})
	} else {
		await interaction.member.roles.remove(config.roles.yengeç).catch(err => {})
		await interaction.reply({content: 'Başarıyla \`yengeç\` rolünü üzerinden kaldırdın.', ephemeral: true})
		
		}
}

if(interaction.values && interaction.values[0] == 'aslan'){
	if(!interaction.member.roles.cache.has(config.roles.aslan)) {
    await interaction.member.roles.remove(config.roles.koç).catch(err => {})
    await interaction.member.roles.remove(config.roles.boğa).catch(err => {})
    await interaction.member.roles.remove(config.roles.ikizler).catch(err => {})
    await interaction.member.roles.remove(config.roles.yengeç).catch(err => {})
    await interaction.member.roles.remove(config.roles.başak).catch(err => {})
    await interaction.member.roles.remove(config.roles.terazi).catch(err => {})
    await interaction.member.roles.remove(config.roles.akrep).catch(err => {})
    await interaction.member.roles.remove(config.roles.yay).catch(err => {})
    await interaction.member.roles.remove(config.roles.oğlak).catch(err => {})
    await interaction.member.roles.remove(config.roles.kova).catch(err => {})
    await interaction.member.roles.remove(config.roles.balık).catch(err => {})
		await interaction.member.roles.add(config.roles.aslan).catch(err => {})
		await interaction.reply({content: 'Başarıyla \`aslan\` rolünü aldın.', ephemeral: true})
	} else {
		await interaction.member.roles.remove(config.roles.aslan).catch(err => {})
		await interaction.reply({content: 'Başarıyla \`aslan\` rolünü üzerinden kaldırdın.', ephemeral: true})
	}
}

if(interaction.values && interaction.values[0] == 'başak'){
	if(!interaction.member.roles.cache.has(config.roles.başak)) {
    await interaction.member.roles.remove(config.roles.koç).catch(err => {})
    await interaction.member.roles.remove(config.roles.boğa).catch(err => {})
    await interaction.member.roles.remove(config.roles.ikizler).catch(err => {})
    await interaction.member.roles.remove(config.roles.yengeç).catch(err => {})
    await interaction.member.roles.remove(config.roles.aslan).catch(err => {})
    await interaction.member.roles.remove(config.roles.terazi).catch(err => {})
    await interaction.member.roles.remove(config.roles.akrep).catch(err => {})
    await interaction.member.roles.remove(config.roles.yay).catch(err => {})
    await interaction.member.roles.remove(config.roles.oğlak).catch(err => {})
    await interaction.member.roles.remove(config.roles.kova).catch(err => {})
    await interaction.member.roles.remove(config.roles.balık).catch(err => {})
		await interaction.member.roles.add(config.roles.başak).catch(err => {})
		await interaction.reply({content: 'Başarıyla \`başak\` rolünü aldın.', ephemeral: true})
	} else {
		await interaction.member.roles.remove(config.roles.başak).catch(err => {})
		await interaction.reply({content: 'Başarıyla \`başak\` rolünü üzerinden kaldırdın.', ephemeral: true})
	}
}

if(interaction.values && interaction.values[0] == 'terazi'){
	if(!interaction.member.roles.cache.has(config.roles.terazi)) {
    await interaction.member.roles.remove(config.roles.koç).catch(err => {})
    await interaction.member.roles.remove(config.roles.boğa).catch(err => {})
    await interaction.member.roles.remove(config.roles.ikizler).catch(err => {})
    await interaction.member.roles.remove(config.roles.yengeç).catch(err => {})
    await interaction.member.roles.remove(config.roles.aslan).catch(err => {})
    await interaction.member.roles.remove(config.roles.başak).catch(err => {})
    await interaction.member.roles.remove(config.roles.akrep).catch(err => {})
    await interaction.member.roles.remove(config.roles.yay).catch(err => {})
    await interaction.member.roles.remove(config.roles.oğlak).catch(err => {})
    await interaction.member.roles.remove(config.roles.kova).catch(err => {})
    await interaction.member.roles.remove(config.roles.balık).catch(err => {})
		await interaction.member.roles.add(config.roles.terazi).catch(err => {})
		await interaction.reply({content: 'Başarıyla \`terazi\` rolünü aldın.', ephemeral: true})
	} else {
		await interaction.member.roles.remove(config.roles.terazi).catch(err => {})
		await interaction.reply({content: 'Başarıyla \`terazi\` rolünü üzerinden kaldırdın.', ephemeral: true})
	}
}

if(interaction.values && interaction.values[0] == 'akrep'){
	if(!interaction.member.roles.cache.has(config.roles.akrep)) {
    await interaction.member.roles.remove(config.roles.koç).catch(err => {})
    await interaction.member.roles.remove(config.roles.boğa).catch(err => {})
    await interaction.member.roles.remove(config.roles.ikizler).catch(err => {})
    await interaction.member.roles.remove(config.roles.yengeç).catch(err => {})
    await interaction.member.roles.remove(config.roles.aslan).catch(err => {})
    await interaction.member.roles.remove(config.roles.başak).catch(err => {})
    await interaction.member.roles.remove(config.roles.terazi).catch(err => {})
    await interaction.member.roles.remove(config.roles.yay).catch(err => {})
    await interaction.member.roles.remove(config.roles.oğlak).catch(err => {})
    await interaction.member.roles.remove(config.roles.kova).catch(err => {})
    await interaction.member.roles.remove(config.roles.balık).catch(err => {})
		await interaction.member.roles.add(config.roles.terazi).catch(err => {})
		await interaction.reply({content: 'Başarıyla \`akrep\` rolünü aldın.', ephemeral: true})
	} else {
		await interaction.member.roles.remove(config.roles.akrep).catch(err => {})
		await interaction.reply({content: 'Başarıyla \`akrep\` rolünü üzerinden kaldırdın.', ephemeral: true})
	}
}

if(interaction.values && interaction.values[0] == 'yay'){
	if(!interaction.member.roles.cache.has(config.roles.yay)) {
    await interaction.member.roles.remove(config.roles.koç).catch(err => {})
    await interaction.member.roles.remove(config.roles.boğa).catch(err => {})
    await interaction.member.roles.remove(config.roles.ikizler).catch(err => {})
    await interaction.member.roles.remove(config.roles.yengeç).catch(err => {})
    await interaction.member.roles.remove(config.roles.aslan).catch(err => {})
    await interaction.member.roles.remove(config.roles.başak).catch(err => {})
    await interaction.member.roles.remove(config.roles.terazi).catch(err => {})
    await interaction.member.roles.remove(config.roles.akrep).catch(err => {})
    await interaction.member.roles.remove(config.roles.oğlak).catch(err => {})
    await interaction.member.roles.remove(config.roles.kova).catch(err => {})
    await interaction.member.roles.remove(config.roles.balık).catch(err => {})
		await interaction.member.roles.add(config.roles.yay).catch(err => {})
		await interaction.reply({content: 'Başarıyla \`yay\` rolünü aldın.', ephemeral: true})
	} else {
		await interaction.member.roles.remove(config.roles.yay).catch(err => {})
		await interaction.reply({content: 'Başarıyla \`yay\` rolünü üzerinden kaldırdın.', ephemeral: true})
	}
}

if(interaction.values && interaction.values[0] == 'oğlak'){
	if(!interaction.member.roles.cache.has(config.roles.oğlak)) {
    await interaction.member.roles.remove(config.roles.koç).catch(err => {})
    await interaction.member.roles.remove(config.roles.boğa).catch(err => {})
    await interaction.member.roles.remove(config.roles.ikizler).catch(err => {})
    await interaction.member.roles.remove(config.roles.yengeç).catch(err => {})
    await interaction.member.roles.remove(config.roles.aslan).catch(err => {})
    await interaction.member.roles.remove(config.roles.başak).catch(err => {})
    await interaction.member.roles.remove(config.roles.terazi).catch(err => {})
    await interaction.member.roles.remove(config.roles.akrep).catch(err => {})
    await interaction.member.roles.remove(config.roles.yay).catch(err => {})
    await interaction.member.roles.remove(config.roles.kova).catch(err => {})
    await interaction.member.roles.remove(config.roles.balık).catch(err => {})
		await interaction.member.roles.add(config.roles.oğlak).catch(err => {})
		await interaction.reply({content: 'Başarıyla \`oğlak\` rolünü aldın.', ephemeral: true})
	} else {
		await interaction.member.roles.remove(config.roles.oğlak).catch(err => {})
		await interaction.reply({content: 'Başarıyla \`oğlak\` rolünü üzerinden kaldırdın.', ephemeral: true})
	}
}

if(interaction.values && interaction.values[0] == 'kova'){
	if(!interaction.member.roles.cache.has(config.roles.kova)) {
    await interaction.member.roles.remove(config.roles.koç).catch(err => {})
    await interaction.member.roles.remove(config.roles.boğa).catch(err => {})
    await interaction.member.roles.remove(config.roles.ikizler).catch(err => {})
    await interaction.member.roles.remove(config.roles.yengeç).catch(err => {})
    await interaction.member.roles.remove(config.roles.aslan).catch(err => {})
    await interaction.member.roles.remove(config.roles.başak).catch(err => {})
    await interaction.member.roles.remove(config.roles.terazi).catch(err => {})
    await interaction.member.roles.remove(config.roles.akrep).catch(err => {})
    await interaction.member.roles.remove(config.roles.yay).catch(err => {})
    await interaction.member.roles.remove(config.roles.oğlak).catch(err => {})
    await interaction.member.roles.remove(config.roles.balık).catch(err => {})
		await interaction.member.roles.add(config.roles.kova).catch(err => {})
		await interaction.reply({content: 'Başarıyla \`kova\` rolünü aldın.', ephemeral: true})
	} else {
		await interaction.member.roles.remove(config.roles.kova).catch(err => {})
		await interaction.reply({content: 'Başarıyla \`kova\` rolünü üzerinden kaldırdın.', ephemeral: true})
	}
}

if(interaction.values && interaction.values[0] == 'balık'){
	if(!interaction.member.roles.cache.has(config.roles.balık)) {
    await interaction.member.roles.remove(config.roles.koç).catch(err => {})
    await interaction.member.roles.remove(config.roles.boğa).catch(err => {})
    await interaction.member.roles.remove(config.roles.ikizler).catch(err => {})
    await interaction.member.roles.remove(config.roles.yengeç).catch(err => {})
    await interaction.member.roles.remove(config.roles.aslan).catch(err => {})
    await interaction.member.roles.remove(config.roles.başak).catch(err => {})
    await interaction.member.roles.remove(config.roles.terazi).catch(err => {})
    await interaction.member.roles.remove(config.roles.akrep).catch(err => {})
    await interaction.member.roles.remove(config.roles.yay).catch(err => {})
    await interaction.member.roles.remove(config.roles.oğlak).catch(err => {})
    await interaction.member.roles.remove(config.roles.kova).catch(err => {})
		await interaction.member.roles.add(config.roles.balık).catch(err => {})
		await interaction.reply({content: 'Başarıyla \`balık\` rolünü aldın.', ephemeral: true})
	} else {
		await interaction.member.roles.remove(config.roles.balık).catch(err => {})
		await interaction.reply({content: 'Başarıyla \`balık\` rolünü üzerinden kaldırdın.', ephemeral: true})
	}
}

if(interaction.values && interaction.values[0] == 'btemizle'){
	if(!interaction.member.roles.cache.has(config.roles.balık)) {
    await interaction.member.roles.remove(config.roles.koç).catch(err => {})
    await interaction.member.roles.remove(config.roles.boğa).catch(err => {})
    await interaction.member.roles.remove(config.roles.ikizler).catch(err => {})
    await interaction.member.roles.remove(config.roles.yengeç).catch(err => {})
    await interaction.member.roles.remove(config.roles.aslan).catch(err => {})
    await interaction.member.roles.remove(config.roles.başak).catch(err => {})
    await interaction.member.roles.remove(config.roles.terazi).catch(err => {})
    await interaction.member.roles.remove(config.roles.akrep).catch(err => {})
    await interaction.member.roles.remove(config.roles.yay).catch(err => {})
    await interaction.member.roles.remove(config.roles.oğlak).catch(err => {})
    await interaction.member.roles.remove(config.roles.kova).catch(err => {})
		await interaction.member.roles.remove(config.roles.balık).catch(err => {})
		await interaction.reply({content: 'Başarıyla Burç Rollerin temizlendi', ephemeral: true})
	} 
}
	
})  

  ///////////////////////////////////// ILISKI ROL ALMA ////////////////////////////////////////



client.on("interactionCreate", async(interaction) => {
	if(interaction.values && interaction.values[0] == 'lovers'){
			if(!interaction.member.roles.cache.has(config.roles.couple)) {
        await interaction.member.roles.remove(config.roles.lgbt).catch(err => {})
        await interaction.member.roles.remove(config.roles.alone).catch(err => {})
        await interaction.member.roles.remove(config.roles.sevgiliyapmıyorum).catch(err => {})
				await interaction.member.roles.add(config.roles.couple).catch(err => {})
				await interaction.reply({content: 'Başarıyla \`Lovers\` rolünü aldın.', ephemeral: true})
			} else {
				await interaction.member.roles.remove(config.roles.couple).catch(err => {})
			    await interaction.reply({content: 'Başarıyla \`Lovers\` rolünü üzerinden kaldırdın.', ephemeral: true})
			}
	}

	if(interaction.values && interaction.values[0] == 'lgbt'){
		if(!interaction.member.roles.cache.has(config.roles.lgbt)) {
      await interaction.member.roles.remove(config.roles.alone).catch(err => {})
      await interaction.member.roles.remove(config.roles.couple).catch(err => {})
      await interaction.member.roles.remove(config.roles.sevgiliyapmıyorum).catch(err => {})
			await interaction.member.roles.add(config.roles.lgbt).catch(err => {})
			await interaction.reply({content: 'Başarıyla \`LGBT\` rolünü aldın.', ephemeral: true})
		} else {
			await interaction.member.roles.remove(config.roles.lgbt).catch(err => {})
			await interaction.reply({content: 'Başarıyla \`LGBT\` rolünü üzerinden kaldırdın.', ephemeral: true})
			
		}
}

if(interaction.values && interaction.values[0] == 'alone'){
	if(!interaction.member.roles.cache.has(config.roles.alone)) {
    await interaction.member.roles.remove(config.roles.lgbt).catch(err => {})
    await interaction.member.roles.remove(config.roles.couple).catch(err => {})
    await interaction.member.roles.remove(config.roles.sevgiliyapmıyorum).catch(err => {})
		await interaction.member.roles.add(config.roles.alone).catch(err => {})
		await interaction.reply({content: 'Başarıyla \`Alone\` rolünü aldın.', ephemeral: true})
	} else {
		await interaction.member.roles.remove(config.roles.alone).catch(err => {})
		await interaction.reply({content: 'Başarıyla \`Alone\` rolünü üzerinden kaldırdın.', ephemeral: true})
	}
}

if(interaction.values && interaction.values[0] == 'sevgiliyapmıyorum'){
	if(!interaction.member.roles.cache.has(config.roles.sevgiliyapmıyorum)) {
    await interaction.member.roles.remove(config.roles.lgbt).catch(err => {})
    await interaction.member.roles.remove(config.roles.couple).catch(err => {})
     await interaction.member.roles.remove(config.roles.alone).catch(err => {})
		await interaction.member.roles.add(config.roles.sevgiliyapmıyorum).catch(err => {})
		await interaction.reply({content: 'Başarıyla \`sevgiliyapmıyorum\` rolünü aldın.', ephemeral: true})
	} else {
		await interaction.member.roles.remove(config.roles.alone).catch(err => {})
		await interaction.reply({content: 'Başarıyla \`sevgiliyapmıyorum\` rolünü üzerinden kaldırdın.', ephemeral: true})
	}
}

if(interaction.values && interaction.values[0] == 'itemizle'){
	if(!interaction.member.roles.cache.has(config.roles.sevgiliyapmıyorum)) {
    await interaction.member.roles.remove(config.roles.lgbt).catch(err => {})
    await interaction.member.roles.remove(config.roles.couple).catch(err => {})
     await interaction.member.roles.remove(config.roles.alone).catch(err => {})
		await interaction.member.roles.remove(config.roles.sevgiliyapmıyorum).catch(err => {})
		await interaction.reply({content: 'Başarıyla Rollerin temizlendi', ephemeral: true})
	}
}
	
})  
 ///////////////////////////////////// Takım ROL ALMA ////////////////////////////////////////



client.on("interactionCreate", async(interaction) => {
	if(interaction.values && interaction.values[0] == 'gs'){
			if(!interaction.member.roles.cache.has(config.roles.gs)) {
        await interaction.member.roles.remove(config.roles.ts).catch(err => {})
        await interaction.member.roles.remove(config.roles.fb).catch(err => {})
        await interaction.member.roles.remove(config.roles.bjk).catch(err => {})
				await interaction.member.roles.add(config.roles.gs).catch(err => {})
				await interaction.reply({content: 'Başarıyla \`GalataSaray\` rolünü aldın.', ephemeral: true})
			} else {
				await interaction.member.roles.remove(config.roles.gs).catch(err => {})
			    await interaction.reply({content: 'Başarıyla \`GalataSaray\` rolünü üzerinden kaldırdın.', ephemeral: true})
			}
	}

	if(interaction.values && interaction.values[0] == 'fb'){
		if(!interaction.member.roles.cache.has(config.roles.fb)) {
      await interaction.member.roles.remove(config.roles.bjk).catch(err => {})
      await interaction.member.roles.remove(config.roles.gs).catch(err => {})
      await interaction.member.roles.remove(config.roles.ts).catch(err => {})
			await interaction.member.roles.add(config.roles.fb).catch(err => {})
			await interaction.reply({content: 'Başarıyla \`FenerBahçe\` rolünü aldın.', ephemeral: true})
		} else {
			await interaction.member.roles.remove(config.roles.fb).catch(err => {})
			await interaction.reply({content: 'Başarıyla \`FenerBahçe\` rolünü üzerinden kaldırdın.', ephemeral: true})
			
		}
}

if(interaction.values && interaction.values[0] == 'bjk'){
	if(!interaction.member.roles.cache.has(config.roles.bjk)) {
    await interaction.member.roles.remove(config.roles.ts).catch(err => {})
    await interaction.member.roles.remove(config.roles.fb).catch(err => {})
    await interaction.member.roles.remove(config.roles.gs).catch(err => {})
		await interaction.member.roles.add(config.roles.bjk).catch(err => {})
		await interaction.reply({content: 'Başarıyla \`BeşikTaş\` rolünü aldın.', ephemeral: true})
	} else {
		await interaction.member.roles.remove(config.roles.bjk).catch(err => {})
		await interaction.reply({content: 'Başarıyla \`BeşikTaş\` rolünü üzerinden kaldırdın.', ephemeral: true})
	}
}

if(interaction.values && interaction.values[0] == 'ts'){
	if(!interaction.member.roles.cache.has(config.roles.ts)) {
    await interaction.member.roles.remove(config.roles.gs).catch(err => {})
    await interaction.member.roles.remove(config.roles.fb).catch(err => {})
     await interaction.member.roles.remove(config.roles.bjk).catch(err => {})
		await interaction.member.roles.add(config.roles.ts).catch(err => {})
		await interaction.reply({content: 'Başarıyla \`TrabzonSpor\` rolünü aldın.', ephemeral: true})
	} else {
		await interaction.member.roles.remove(config.roles.ts).catch(err => {})
		await interaction.reply({content: 'Başarıyla \`TrabzonSpor\` rolünü üzerinden kaldırdın.', ephemeral: true})
	}
}

if(interaction.values && interaction.values[0] == 'ttemizle'){

    await interaction.member.roles.remove(config.roles.fb).catch(err => {})
    await interaction.member.roles.remove(config.roles.ts).catch(err => {})
     await interaction.member.roles.remove(config.roles.bjk).catch(err => {})
		await interaction.member.roles.remove(config.roles.gs).catch(err => {})
		await interaction.reply({content: 'Başarıyla Rollerin temizlendi', ephemeral: true})
	}

	
})  

///////////////////////////////////// Takım ROL ALMA ////////////////////////////////////////



client.on("interactionCreate", async(interaction) => {
	if(interaction.values && interaction.values[0] == 'beyaz'){
			if(!interaction.member.roles.cache.has(config.roles.beyaz)) {
        await interaction.member.roles.remove(config.roles.siyah).catch(err => {})
        await interaction.member.roles.remove(config.roles.yeşil).catch(err => {})
        await interaction.member.roles.remove(config.roles.sarı).catch(err => {})
        await interaction.member.roles.remove(config.roles.kırmızı).catch(err => {})
        await interaction.member.roles.remove(config.roles.mor).catch(err => {})
        await interaction.member.roles.remove(config.roles.mavi).catch(err => {})
        await interaction.member.roles.remove(config.roles.kahverengi).catch(err => {})
        await interaction.member.roles.remove(config.roles.turuncu).catch(err => {})
				await interaction.member.roles.add(config.roles.beyaz).catch(err => {})
				await interaction.reply({content: 'Başarıyla \`Beyaz\` rolünü aldın.', ephemeral: true})
			} else {
				await interaction.member.roles.remove(config.roles.beyaz).catch(err => {})
			    await interaction.reply({content: 'Başarıyla \`Beyaz\` rolünü üzerinden kaldırdın.', ephemeral: true})
			}
	}

	if(interaction.values && interaction.values[0] == 'siyah'){
		if(!interaction.member.roles.cache.has(config.roles.siyah)) {
        await interaction.member.roles.remove(config.roles.beyaz).catch(err => {})
        await interaction.member.roles.remove(config.roles.yeşil).catch(err => {})
        await interaction.member.roles.remove(config.roles.sarı).catch(err => {})
        await interaction.member.roles.remove(config.roles.kırmızı).catch(err => {})
        await interaction.member.roles.remove(config.roles.mor).catch(err => {})
        await interaction.member.roles.remove(config.roles.mavi).catch(err => {})
        await interaction.member.roles.remove(config.roles.kahverengi).catch(err => {})
        await interaction.member.roles.remove(config.roles.turuncu).catch(err => {})
			await interaction.member.roles.add(config.roles.siyah).catch(err => {})
			await interaction.reply({content: 'Başarıyla \`Siyah\` rolünü aldın.', ephemeral: true})
		} else {
			await interaction.member.roles.remove(config.roles.siyah).catch(err => {})
			await interaction.reply({content: 'Başarıyla \`Siyah\` rolünü üzerinden kaldırdın.', ephemeral: true})
			
		}
}

if(interaction.values && interaction.values[0] == 'yeşil'){
	if(!interaction.member.roles.cache.has(config.roles.yeşil)) {
await interaction.member.roles.remove(config.roles.siyah).catch(err => {})
        await interaction.member.roles.remove(config.roles.beyaz).catch(err => {})
        await interaction.member.roles.remove(config.roles.sarı).catch(err => {})
        await interaction.member.roles.remove(config.roles.kırmızı).catch(err => {})
        await interaction.member.roles.remove(config.roles.mor).catch(err => {})
        await interaction.member.roles.remove(config.roles.mavi).catch(err => {})
        await interaction.member.roles.remove(config.roles.kahverengi).catch(err => {})
        await interaction.member.roles.remove(config.roles.turuncu).catch(err => {})
		await interaction.member.roles.add(config.roles.yeşil).catch(err => {})
		await interaction.reply({content: 'Başarıyla \`Yeşil\` rolünü aldın.', ephemeral: true})
	} else {
		await interaction.member.roles.remove(config.roles.yeşil).catch(err => {})
		await interaction.reply({content: 'Başarıyla \`Yeşil\` rolünü üzerinden kaldırdın.', ephemeral: true})
	}
}

if(interaction.values && interaction.values[0] == 'sarı'){
	if(!interaction.member.roles.cache.has(config.roles.sarı)) {
        await interaction.member.roles.remove(config.roles.siyah).catch(err => {})
        await interaction.member.roles.remove(config.roles.yeşil).catch(err => {})
        await interaction.member.roles.remove(config.roles.beyaz).catch(err => {})
        await interaction.member.roles.remove(config.roles.kırmızı).catch(err => {})
        await interaction.member.roles.remove(config.roles.mor).catch(err => {})
        await interaction.member.roles.remove(config.roles.mavi).catch(err => {})
        await interaction.member.roles.remove(config.roles.kahverengi).catch(err => {})
        await interaction.member.roles.remove(config.roles.turuncu).catch(err => {})
		await interaction.member.roles.add(config.roles.sarı).catch(err => {})
		await interaction.reply({content: 'Başarıyla \`Sarı\` rolünü aldın.', ephemeral: true})
	} else {
		await interaction.member.roles.remove(config.roles.sarı).catch(err => {})
		await interaction.reply({content: 'Başarıyla \`Sarı\` rolünü üzerinden kaldırdın.', ephemeral: true})
	}
}
if(interaction.values && interaction.values[0] == 'kırmızı'){
	if(!interaction.member.roles.cache.has(config.roles.kırmızı)) {
        await interaction.member.roles.remove(config.roles.siyah).catch(err => {})
        await interaction.member.roles.remove(config.roles.yeşil).catch(err => {})
        await interaction.member.roles.remove(config.roles.beyaz).catch(err => {})
        await interaction.member.roles.remove(config.roles.sarı).catch(err => {})
        await interaction.member.roles.remove(config.roles.mor).catch(err => {})
        await interaction.member.roles.remove(config.roles.mavi).catch(err => {})
        await interaction.member.roles.remove(config.roles.kahverengi).catch(err => {})
        await interaction.member.roles.remove(config.roles.turuncu).catch(err => {})
		await interaction.member.roles.add(config.roles.kırmızı).catch(err => {})
		await interaction.reply({content: 'Başarıyla \`Kırmızı\` rolünü aldın.', ephemeral: true})
	} else {
		await interaction.member.roles.remove(config.roles.kırmızı).catch(err => {})
		await interaction.reply({content: 'Başarıyla \`Kırmızı\` rolünü üzerinden kaldırdın.', ephemeral: true})
	}
}

if(interaction.values && interaction.values[0] == 'mor'){
	if(!interaction.member.roles.cache.has(config.roles.mor)) {
        await interaction.member.roles.remove(config.roles.siyah).catch(err => {})
        await interaction.member.roles.remove(config.roles.yeşil).catch(err => {})
        await interaction.member.roles.remove(config.roles.beyaz).catch(err => {})
        await interaction.member.roles.remove(config.roles.kırmızı).catch(err => {})
        await interaction.member.roles.remove(config.roles.sarı).catch(err => {})
        await interaction.member.roles.remove(config.roles.mavi).catch(err => {})
        await interaction.member.roles.remove(config.roles.kahverengi).catch(err => {})
        await interaction.member.roles.remove(config.roles.turuncu).catch(err => {})
		await interaction.member.roles.add(config.roles.mor).catch(err => {})
		await interaction.reply({content: 'Başarıyla \`Mor\` rolünü aldın.', ephemeral: true})
	} else {
		await interaction.member.roles.remove(config.roles.mor).catch(err => {})
		await interaction.reply({content: 'Başarıyla \`Mor\` rolünü üzerinden kaldırdın.', ephemeral: true})
	}
}
if(interaction.values && interaction.values[0] == 'mavi'){
	if(!interaction.member.roles.cache.has(config.roles.mavi)) {
         await interaction.member.roles.remove(config.roles.siyah).catch(err => {})
        await interaction.member.roles.remove(config.roles.yeşil).catch(err => {})
        await interaction.member.roles.remove(config.roles.beyaz).catch(err => {})
        await interaction.member.roles.remove(config.roles.kırmızı).catch(err => {})
        await interaction.member.roles.remove(config.roles.mor).catch(err => {})
        await interaction.member.roles.remove(config.roles.sarı).catch(err => {})
        await interaction.member.roles.remove(config.roles.kahverengi).catch(err => {})
        await interaction.member.roles.remove(config.roles.turuncu).catch(err => {})
		await interaction.member.roles.add(config.roles.mavi).catch(err => {})
		await interaction.reply({content: 'Başarıyla \`Mavi\` rolünü aldın.', ephemeral: true})
	} else {
		await interaction.member.roles.remove(config.roles.mavi).catch(err => {})
		await interaction.reply({content: 'Başarıyla \`Mavi\` rolünü üzerinden kaldırdın.', ephemeral: true})
	}
}

if(interaction.values && interaction.values[0] == 'kahverengi'){
	if(!interaction.member.roles.cache.has(config.roles.kahverengi)) {
        await interaction.member.roles.remove(config.roles.siyah).catch(err => {})
        await interaction.member.roles.remove(config.roles.yeşil).catch(err => {})
        await interaction.member.roles.remove(config.roles.beyaz).catch(err => {})
        await interaction.member.roles.remove(config.roles.kırmızı).catch(err => {})
        await interaction.member.roles.remove(config.roles.mor).catch(err => {})
        await interaction.member.roles.remove(config.roles.mavi).catch(err => {})
        await interaction.member.roles.remove(config.roles.sarı).catch(err => {})
        await interaction.member.roles.remove(config.roles.turuncu).catch(err => {})
		await interaction.member.roles.add(config.roles.kahverengi).catch(err => {})
		await interaction.reply({content: 'Başarıyla \`Kahverengi\` rolünü aldın.', ephemeral: true})
	} else {
		await interaction.member.roles.remove(config.roles.kahverengi).catch(err => {})
		await interaction.reply({content: 'Başarıyla \`Kahverengi\` rolünü üzerinden kaldırdın.', ephemeral: true})
	}
}

if(interaction.values && interaction.values[0] == 'turuncu'){
	if(!interaction.member.roles.cache.has(config.roles.turuncu)) {
        await interaction.member.roles.remove(config.roles.siyah).catch(err => {})
        await interaction.member.roles.remove(config.roles.yeşil).catch(err => {})
        await interaction.member.roles.remove(config.roles.beyaz).catch(err => {})
        await interaction.member.roles.remove(config.roles.kırmızı).catch(err => {})
        await interaction.member.roles.remove(config.roles.mor).catch(err => {})
        await interaction.member.roles.remove(config.roles.mavi).catch(err => {})
        await interaction.member.roles.remove(config.roles.kahverengi).catch(err => {})
        await interaction.member.roles.remove(config.roles.sarı).catch(err => {})
		await interaction.member.roles.add(config.roles.turuncu).catch(err => {})
		await interaction.reply({content: 'Başarıyla \`Turuncu\` rolünü aldın.', ephemeral: true})
	} else {
		await interaction.member.roles.remove(config.roles.turuncu).catch(err => {})
		await interaction.reply({content: 'Başarıyla \`Turuncu\` rolünü üzerinden kaldırdın.', ephemeral: true})
	}
}

if(interaction.values && interaction.values[0] == 'rtemizle'){

        await interaction.member.roles.remove(config.roles.siyah).catch(err => {})
        await interaction.member.roles.remove(config.roles.yeşil).catch(err => {})
        await interaction.member.roles.remove(config.roles.beyaz).catch(err => {})
        await interaction.member.roles.remove(config.roles.kırmızı).catch(err => {})
        await interaction.member.roles.remove(config.roles.mor).catch(err => {})
        await interaction.member.roles.remove(config.roles.mavi).catch(err => {})
        await interaction.member.roles.remove(config.roles.kahverengi).catch(err => {})
        await interaction.member.roles.remove(config.roles.turuncu).catch(err => {})
        await interaction.member.roles.remove(config.roles.sarı).catch(err => {})

		await interaction.reply({content: 'Başarıyla Rollerin temizlendi', ephemeral: true})
	}

	
})  
///////////////////////////////////////////////////////////////    /////////////////////////////////////////////////////////////////////////////////
