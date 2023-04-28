class GTLib {

    setTerminalTitle(title) {
        process.stdout.write(
            String.fromCharCode(27) + "]0;" + title + String.fromCharCode(7)
        );
    }

    delay(ms) {
        return new Promise(r => setTimeout(r, ms));
    }

}

const instance = new GTLib();
module.exports = instance;