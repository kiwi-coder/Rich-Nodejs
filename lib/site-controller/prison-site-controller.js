exports.PrisonSiteController = function () {
    this.acceptPlayer = function (player, cb) {
        cb();
    };

    this.display = function() {
        return 'P';
    };
};