/**
 * Created by XadillaX on 14-1-22.
 */
var server = require("./server");
var router = require("./router");
var useDB = require("./useDB");
var secret = require("./secret");
var logger = require("./log4js")(server.environment);
var upload = require("./upload");
var renderData = require("./renderData");
var kafka = require("./kafka");

module.exports = {
    server      : server,
    router      : router,
    logger      : logger,
    secret      : secret,
    upload      : upload,
    renderData  : renderData,
    kafka       : kafka
};

for(var key in useDB) {
    module.exports[key] = useDB[key];
}
