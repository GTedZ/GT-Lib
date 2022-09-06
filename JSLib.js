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

        logErr: function (errStr, path = '', sync = false, callback = () => { }) {
            path = path ? path : 'error.txt';
            sync = sync ? 'appendFileSync' : 'appendFile';
            fs[sync](path, errStr, function (err) {
                if (err) throw err;
                callback(`${path}: log successful`)
            });
        },

        log: function (logStr, path = '', sync = false, callback = () => { }) {
            path = path ? path : 'log.txt';
            sync = sync ? 'appendFileSync' : 'appendFile';
            fs[sync](path, logStr, function (err) {
                if (err) throw err;
                callback(`${path}: log successful`)
            });
        },

        isIterable: function (obj) {    // check if the obj is iterable
            if (obj == null) return false;
            return typeof obj[Symbol.iterator] === 'function';
        },

        checkArrays: function (...args) {
            let length = -1;
            for (let array of args) {   // check for length || array
                if (!Array.isArray(array)) return false;
                if (length == -1) length = array.length;
                else if (length != array.length) return false;
            }
            console.log('equal lengths')
            for (let x in args) {
                let current_array = args[x];
                let current_length = current_array.length;
                for (let index in args) {
                    if (index == x) break;
                    let resultArr_length = current_array.filter(item => args[index].includes(item)).length;
                    if (resultArr_length != current_length) return false;
                }
            }

            return true;
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