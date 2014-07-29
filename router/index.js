/**
 * Created by XadillaX on 14-1-22.
 */
var helper = require("../helper");
var indexController = helper.common.getController("index");

exports.post = {
    "/send"     : indexController.send
};

exports.get = {
    "/"         : indexController.index,
    "/send"     : indexController.send
};
