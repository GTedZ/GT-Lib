module.exports = function () {
    console.log(getDifference(2, 3));
    return {

        getDifference: function (val1, val2, precision) {
            console.log(val1, val2, precision)
            return precision ? Math.floor((val1 - val2) * 100 * Math.pow(10, precision)) / Math.pow(10, precision) : (val1 - val2) * 100 / val2;
        },

        color: {
            reset: "\x1b[0m",
            bright: "\x1b[1m",
            dim: "\x1b[2m",
            underscore: "\x1b[4m",
            blink: "\x1b[5m",
            reverse: "\x1b[7m",
            hidden: "\x1b[8m",

            black: "\x1b[30m",
            red: "\x1b[31m",
            green: "\x1b[32m",
            yellow: "\x1b[33m",
            blue: "\x1b[34m",
            magenta: "\x1b[35m",
            cyan: "\x1b[36m",
            white: "\x1b[37m",

            bg: {
                black: "\x1b[40m",
                red: "\x1b[41m",
                green: "\x1b[42m",
                yellow: "\x1b[43m",
                blue: "\x1b[44m",
                magenta: "\x1b[45m",
                cyan: "\x1b[46m",
                white: "\x1b[47m",
            }
        }
    }
}()