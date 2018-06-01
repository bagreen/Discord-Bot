module.exports = {
    name: 'lemonworth',
    description: 'lemonworth',
    execute(message, args) {
        // send back "Pong." to the channel the message was sent in
        if (message.author.username === 'NuclearWalrus') {
          message.channel.send('You are worth 4:lemon:');
        }
        else if (message.author.username === 'SpruceMoose') {
          message.channel.send('You are worth 2:lemon:');
        }
        else if (message.author.username === 'supremearmchaircommander') {
          message.channel.send('You are worth 5:lemon:');
        }
    },
};