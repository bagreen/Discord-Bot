const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands');

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on('ready', () => {
    console.log('Ready!');
});

client.on('message', message => {
    if (message.author.bot) return;
    
    if (message.content.toLowerCase().includes("you suck") || message.content.toLowerCase().includes("u suck")) {
      message.channel.send('no u');
    }

    const args = message.content.slice(prefix.length).split(/ +/);
    
    for (var i = 0; i < args.length; i++) {
      var command = args[i];
      command = command.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?<>/]/g,"");
      //console.log("command is " + command);
      //console.log("arraylength is " + args.length);
      if (client.commands.has(command)) {
        if (message.content.toLowerCase().includes(command)) {
          client.commands.get(command).execute(message, args);
        }
      }
    }

    /*if (!client.commands.has(command)) return;

    try {
        client.commands.get(command).execute(message, args);
    }
    catch (error) {
        message.reply('there was an error trying to execute that command!');
    }*/
});

client.login(token);
