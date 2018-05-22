module.exports = {
    name: 'user',
    description: 'user',
    execute(message, args) {
      var username = message.author.username;
      var id = message.author.id;
      message.channel.send('Your username: ' + username);
      message.channel.send('Your ID: ' + id);
    },
};