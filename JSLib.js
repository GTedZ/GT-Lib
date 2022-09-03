module.exports = function () {
    const fs = require('fs');
    return {

        difference: function (val1, val2, precision = undefined) {
            return precision ? Math.floor(((val1 - val2) / val2) * Math.pow(10, precision)) / Math.pow(10, precision) : (val1 - val2) / val2;
        },

        time: function (millis = false, date = false, hour24 = false, millisPrecision = 3) {
            let Func = date ? 'toLocaleDateString' : 'toLocaleTimeString';
            return millis ? new Date()[Func]([], { hour12: !hour24, hour: '2-digit', minute: '2-digit', fractionalSecondDigits: millisPrecision }) : new Date()[Func]([], { hour12: !hour24, hour: '2-digit', minute: '2-digit' });
        },

        fixBetween: function (value = undefined, lowerBound = undefined, upperBound = undefined) {
            return value < 0 || !value ? lowerBound : value > upperBound ? upperBound : value;
        },

        logErr: function (str, path = '', sync = false, callback = () => { }) {
            path = path ? path : 'error.txt';
            sync = sync ? 'appendFileSync' : 'appendFile';
            fs[sync](path, str, function (err) {
                if (err) throw err;
                callback(`${path}: log successful`)
            });
        },

        log: function (str, path = '', sync = false, callback = () => { }) {
            path = path ? path : 'log.txt';
            sync = sync ? 'appendFileSync' : 'appendFile';
            fs[sync](path, str, function (err) {
                if (err) throw err;
                callback(`${path}: log successful`)
            });
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