/**
 * Created by XadillaX on 14-1-22.
 */
var helper = require("../helper");
var config = require("../config");
var async = require("async");

/**
 * index.
 * @param req
 * @param resp
 */
exports.index = function(req, resp) {
    resp.render("index");
};

exports.send = function(req, resp) {
    var kafka = config.kafka.producer;
    var topic = req.param("topic");
    var message = req.param("message");

    if(!topic || !message || topic.trim() === "" || message.trim() === "") {
        resp.send(200, { status: false, message: "Please fill the blanks." });
        return;
    }

    async.waterfall([
        /**
         * step 1.
         *   create the topic (if not exists)
         *
         * @param next
         */
        function(next) {
            kafka.createTopics([topic], false, function(err, data) {
                next(err);
            });
        },

        /**
         * step 2.
         *   oh, yeah~
         *
         * @param next
         */
        function(next) {
            kafka.send([{
                topic   : topic,
                messages: [message]
            }], function(err, data) {
                next(err, data);
            });
        }
    ], function(err, data) {
        if(err) {
            return resp.send(200, { status: false, message: err.message });
        }

        resp.send(200, {
            status  : true,
            data    : data
        })
    });
};