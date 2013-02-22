exports.QuitCommand = function (player) {
    this.execute = function () {
        process.exit(0);
    }
}