module.exports = {
    name: 'lemon',
    description: 'lemon',
    execute(message, args) {
        var value = Math.random();
        value *= 10;
        value = Math.round(value);
        message.channel.send('This conversation is ' + value + " :lemon:");
    },
};