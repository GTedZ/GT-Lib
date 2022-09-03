module.exports = () => {


    return {
        getDifference: function (val1, val2, precision = false) {
            return precision ? Math.floor((val1 - val2) * Math.pow(10, precision)) / Math.pow(10, precision) : (val1 - val2) / val2;
        }

        hi
    }
}