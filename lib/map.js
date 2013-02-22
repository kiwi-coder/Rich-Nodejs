exports.Map = function (width, height) {
    var width = width;
    var height = height;
    var sites = [];

    this.size = function () {
        return width * height - (width - 2) * (height - 2);
    };

    this.setSite = function (index, site) {
        sites[index] = site;
    };

    this.getSite = function (index) {
        return sites[index];
    }

    this.display = function () {
        var result = "";
        for (var w = 0; w < width; w++) {
            result += sites[w].display();
        }
        result += "\n";

        for (var h = 1; h < height - 1; h++) {
            result += sites[sites.length - h].display();
            for (var w = 1; w < width - 1; w++) {
                result += " ";
            }
            result += sites[h + width - 1].display();
            result += "\n";
        }

        for (var w = 0; w < width; w++) {
            result += sites[sites.length - height - w + 1].display();
        }
        result += "\n";

        return result;
    }
};