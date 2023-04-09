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

client.on("interactionCreate", async(interaction) => {
const member = await client.guilds.cache.get(config.Guild.GuildID).members.fetch(interaction.member.user.id)
if (!member) return;

      if (interaction.customId === "burc") {
        let burçMap = new Map([
            ["koç", config.roles.koç],
            ["boğa", config.roles.boğa],
            ["ikizler", config.roles.ikizler],
            ["yengeç", config.roles.yengeç],
            ["aslan", config.roles.aslan],
            ["başak", config.roles.başak],
            ["terazi", config.roles.terazi],
            ["akrep", config.roles.akrep],
            ["yay", config.roles.yay],
            ["oğlak", config.roles.oğlak],
            ["kova", config.roles.kova],
            ["balık", config.roles.balık],
          ])
          let roles = [config.roles.koç, config.roles.boğa, config.roles.ikizler, config.roles.yengeç, config.roles.aslan, config.roles.başak, config.roles.terazi, config.roles.akrep, config.roles.yay, config.roles.oğlak, config.roles.kova, config.roles.balık]
          let role = burçMap.get(interaction.values[0])
          if (interaction.values[0] === "rolsil") {
            await member.roles.remove(roles)
          } else if (role) {
            if (roles.some(m => member.roles.cache.has(m))) {
              await member.roles.remove(roles)
            }
            await member.roles.add(role)
          }
          interaction.reply({ content: "Başarıyla \`Burç\` Rolleriniz düzenlendi.", ephemeral: true })    
      }

      if (interaction.customId === "iliski") {
        let iliskiMap = new Map([
            ["sevgilimvar", config.roles.couple],
            ["lgbt", config.roles.lgbt],
            ["sevgilimyok", config.roles.alone],
            ["sevgiliyapmıyorum", config.roles.sevgiliyapmıyorum],
          ])
          let roles = [config.roles.couple, config.roles.alone, config.roles.lgbt, config.roles.sevgiliyapmıyorum]
          let role = iliskiMap.get(interaction.values[0])
          if (interaction.values[0] === "rolsil") {
            await member.roles.remove(roles)
          } else if (role) {
            if (roles.some(m => member.roles.cache.has(m))) {
              await member.roles.remove(roles)
            }
            await member.roles.add(role)
          }
          interaction.reply({ content: "Başarıyla \`İlişki\` Rolleriniz düzenlendi.", ephemeral: true })    
      }

if (interaction.customId === "renk") {
        let color = new Map([
          ["mavi", config.roles.mavi],
          ["kirmizi", config.roles.kırmızı],
          ["sarı", config.roles.sarı],
          ["siyah", config.roles.siyah],
          ["beyaz", config.roles.beyaz],
          ["yesil", config.roles.yeşil],
          ["mor", config.roles.mor],
          ["kahverengi", config.roles.kahverengi],
          ["turuncu", config.roles.turuncu],
  
        ])
        let role = color.get(interaction.values[0])
        let renkroller = [config.roles.mavi, config.roles.kırmızı, config.roles.sarı, config.roles.siyah, config.roles.beyaz, config.roles.yeşil, config.roles.mor, config.roles.kahverengi, config.roles.turuncu]
        if (!member.roles.cache.has(config.Guild.tagrol) && !member.roles.cache.has(config.Guild.boosterrol) && !member.permissions.has("ADMINISTRATOR")) {
            interaction.reply({ content: "Rollerin güncellenirken bir sorun meydana geldi **(İsminde Sunucu Tag'ı Yoktur veya Boost basmamışsın)**" , ephemeral: true })
        } else {
          if (interaction.values[0] === "rolsil") {
            await member.roles.remove(renkroller)
          } else if (role) {
            if (renkroller.some(m => member.roles.cache.has(m))) {
              await member.roles.remove(renkroller)
            }
            await member.roles.add(role)
          }
          interaction.reply({ content: "Başarıyla \`Renk\` Rolleriniz düzenlendi.", ephemeral: true })
        }
      }

      if (interaction.customId === "takim") {
        let iliskiMap = new Map([
            ["gs", config.roles.gs],
            ["fb", config.roles.fb],
            ["ts", config.roles.ts],
            ["bjk", config.roles.bjk],
          ])
          let roles = [config.roles.gs, config.roles.ts, config.roles.fb, config.roles.bjk]
          let role = iliskiMap.get(interaction.values[0])
          if (interaction.values[0] === "rolsil") {
            await member.roles.remove(roles)
          } else if (role) {
            if (roles.some(m => member.roles.cache.has(m))) {
              await member.roles.remove(roles)
            }
            await member.roles.add(role)
          }
          interaction.reply({ content: "Başarıyla \`Takım\` Rolleriniz düzenlendi.", ephemeral: true })    
      }

    if (interaction.customId === "oyun") {
        let GameMap = new Map([
          ["mc", config.roles.minecraft],
          ["mlbb", config.roles.mlbb],
          ["lol", config.roles.lol],
          ["gta5", config.roles.gta5],
          ["valo", config.roles.valorant],
          ["amongus", config.roles.amongus],
          ["csgo", config.roles.csgo],
        ])
        let roles = [config.roles.minecraft, config.roles.mlbb, config.roles.lol, config.roles.gta5, config.roles.valorant, config.roles.amongus ,config.roles.csgo]
        var role = []
        for (let index = 0; index < interaction.values.length; index++) {
          let ids = interaction.values[index]
          let den = GameMap.get(ids)
          role.push(den)
        }
        if (!interaction.values.length) {
          await member.roles.remove(roles)
        } else {
          await member.roles.remove(roles)
          await member.roles.add(role)
        } 
        interaction.reply({ content: "Başarıyla \`Oyun\` Rolleriniz düzenlendi.", ephemeral: true })
      }
	
}) 	

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
