const allcatdata = require("../contentData");

const allcatfun = (req, res) => {
    return res.send(allcatdata);
}

module.exports = allcatfun;