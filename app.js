const config = require("./config");
const RESTAPI = require("./app_modules/firebase").api;
const api = RESTAPI();

api(config.firebase.apiKey, config.firebase.authDomain, config.firebase.databaseURL, config.firebase.storageBucket);