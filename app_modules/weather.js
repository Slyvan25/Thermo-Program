let request = require("request");
let config = require("../config");

//https://api.openweathermap.org/data/2.5/weather?q=deventer,nl&appid=43d5db978ff94da8490287fe534a266c
exports.get = function()
{
    request({
        url: `https://api.openweathermap.org/data/2.5/weather?q=` + config.weather.city +`&appid=` + config.weather.apikey,
        json: true
    },
    function(body)
    { 
        exports.icon = body;
    });
}