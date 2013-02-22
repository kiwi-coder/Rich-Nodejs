exports.QuitCommand = function (player, callback) {
    this.execute = function () {
        process.exit(0);
    }
}