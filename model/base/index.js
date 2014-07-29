/**
 * Created by XadillaX on 14-1-23.
 */
var mongoose = require("mongoose");
var config = require("../../config");

/**
 * base model.
 * @constructor
 */
var BaseModel = function() {
    // you have to create it.
    // eg. this.model = baseModel.createModel(name, structure);
    this.model = null;
};

exports.Model = BaseModel;
exports.Mongoose = mongoose;
exports.Schema = mongoose.Schema;

/**
 * connect to the database (mongodb)
 */
exports.connect = function(callback) {
    var connectionUri = "mongodb://" + config.mongodb.hostname + ":" + config.mongodb.port + "/" + config.mongodb.dbname;

    config.logger.trace("The connection uri: " + connectionUri + ".");
    mongoose.connect(connectionUri, {
        server: {
            poolSize: config.mongodb.poolSize
        }
    }, function(err) {
        if(err) {
            config.logger.error(err.message);
            process.exit(1);
        } else {
            callback();
        }
    });
};
