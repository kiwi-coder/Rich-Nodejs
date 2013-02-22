exports.HospitalSiteController = function () {
    this.acceptPlayer = function (player, cb) {
        cb();
    };

    this.display = function () {
        return 'H';
    }
};