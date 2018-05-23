// setting things up
const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();
client.commands = new Discord.Collection();

// scans commands folder for the files in it to find commands
const commandFiles = fs.readdirSync('./commands');

// goes through the folder and adds all of the commands to be required
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

// says ready once everything works
client.on('ready', () => {
    console.log('Ready!');
});

// where the client starts scanning for message
client.on('message', message => {
  // bot won't respond to itself 
    if (message.author.username === 'Lemon' ) return;
    
    // responds to you suck
    if (message.content.toLowerCase().includes("you suck") || message.content.toLowerCase().includes("u suck") || message.content.toLowerCase().includes("fuck you") || message.content.toLowerCase().includes("fuk u")) {
      message.channel.send('no u');
    }

    // makes array splitting messages on spaces
    const args = message.content.slice(prefix.length).split(/ +/);
    
    // goes through the array and checks all of the words for commands
    for (var i = 0; i < args.length; i++) {
      var command = args[i];
      command = command.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?<>/]/g,"");
      if (client.commands.has(command)) {
        if (message.content.toLowerCase().includes(command)) {
          client.commands.get(command).execute(message, args);
        }
      }
    }
});

client.login(token);
