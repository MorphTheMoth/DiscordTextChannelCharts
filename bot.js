const Discord = require("discord.js");
const bot = new Discord.Client();
const fetchAll = require('discord-fetch-all');
const fs = require('fs');

bot.on("ready", async() => {
  console.log("I am ready!");

  let ch = bot.channels.get('INSERT CHANNEL ID HERE');
  let finalMs = (await ch.fetchMessages({ limit: 100 })).array();
  finalMs = finalMs.map(m => { return { content: m.content, id: m.id, user: m.author.username, userid: m.author.id, timestamp: m.createdTimestamp, data: m.createdAt }; });

  while (true) {
    console.log(finalMs.length);
    console.log(finalMs[finalMs.length - 1].data);
    let ms = (await ch.fetchMessages({ limit: 100, before: finalMs[finalMs.length - 1].id })).array();
    if (ms.length == 0)
      break;
    finalMs = [...finalMs, ...ms.map(m => { return { content: m.content, id: m.id, user: m.author.username, userid: m.author.id, timestamp: m.createdTimestamp, data: m.createdAt }; })];
  }

  finalMs = finalMs.filter(v => v.content!='');

  fs.writeFileSync('jsonDiscord/' + ch.name + '.json', JSON.stringify(finalMs, null, 2));
  console.log('done');
});

bot.on("message", async (message) => {
});

bot.login("INSERT BOT TOKEN HERE");
