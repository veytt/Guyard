//botun main dosyası 

const { Client, GatewayIntentBits, Partials } = require("discord.js");
const client = new Client({ intents: Object.values(GatewayIntentBits).filter(x => typeof x === "string"), partials: [Object.values(Partials).filter(x => typeof x === "string")]});
const { token, topgg } = require("./src/base/settings.json");
const DBL = require("dblapi.js");
let dbl;
if(topgg) dbl = new DBL(topgg, { webhookPort: 5000, webhookAuth: 'password' });
require("./src/base/app.js")(client, dbl)

client.login(token);

process.on("uncaughtException", _ => {});
process.on("unhandledRejection", _ => {});

//botun main dosyası 

const { joinVoiceChannel } = require('@discordjs/voice');
 client.on('ready', () => { 
  joinVoiceChannel({
channelId: "1216495391093035052",
guildId: "1216495391067996371",
adapterCreator: global.client.guilds.cache.get("1216495391067996371").voiceAdapterCreator
    });
});
client.on("ready", () =>
console.log(`[START]`) + chalk.green(` ${client.user.username} 🤖 Aktif Edildi!`))


