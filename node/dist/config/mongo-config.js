"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoDB = void 0;
const mongoose_1 = require("mongoose");
const config_json_1 = require("./config.json");
class MongoDB {
    connectMongoDB() {
        try {
            const isCluster = config_json_1.ENV.IS_MONGODB_CLUSTER;
            if (isCluster) {
                mongoose_1.connect(`${config_json_1.ENV.MONGODB_CLUSTER_URL}`, { useUnifiedTopology: true, useNewUrlParser: true });
            }
            else {
                if (config_json_1.ENV.MONGODB_USER && config_json_1.ENV.MONGODB_PASSWORD) {
                    mongoose_1.connect(`mongodb://${config_json_1.ENV.MONGODB_USER}:${config_json_1.ENV.MONGODB_PASSWORD}@${config_json_1.ENV.MONGODB_HOST}:${config_json_1.ENV.MONGODB_PORT}/${config_json_1.ENV.MONGODB_NAME}`, { useUnifiedTopology: true, useNewUrlParser: true });
                }
                else {
                    mongoose_1.connect(`mongodb://${config_json_1.ENV.MONGODB_HOST}:${config_json_1.ENV.MONGODB_PORT}/${config_json_1.ENV.MONGODB_NAME}`, { useUnifiedTopology: true, useNewUrlParser: true });
                }
            }
        }
        catch (err) {
            throw err;
        }
    }
}
exports.MongoDB = MongoDB;
