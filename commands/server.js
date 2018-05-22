module.exports = {
    name: 'server',
    description: 'server',
    execute(message, args) {
      var username = message.guild.name;
      var totalMembers = message.guild.memberCount;
      message.channel.send("This server's name is: " + username);
      message.channel.send("Total members: " + totalMembers);
    },
};