module.exports = {
    name: 'dnd',
    description: 'dnd',
    execute(message, args) {
        // picks a random decimal value between 0 and 1
        var value = Math.random();
        // make the value between 0 and 19
        value *= 19;
        // make the value between 1 and 20 (you can't roll a 0)
        value += 1;
        // round from decimal values
        value = Math.round(value);
        message.channel.send('Your die roll was ' + value + " out of 20");
    },
};