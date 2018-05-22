module.exports = {
    name: 'dnd',
    description: 'dnd',
    execute(message, args) {
        var value = Math.random();
        value *= 20;
        value = Math.round(value);
        message.channel.send('Your die roll was ' + value);
    },
};