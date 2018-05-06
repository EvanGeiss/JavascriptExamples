var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();

var company;
function getData(company){
        this.company = company;
        return "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=" + company + "&apikey=P4MRG4508G7EX840";
}

var URL = getData("AMZN");

console.log(URL);
var request = new XMLHttpRequest();
request.open('GET', URL);
request.responseType = 'json';
request.send();

request.onload = function() {
var MetaData = request.response;

// var closingPrice = MetaData["Time Series (1min)"]["2018-04-23 16:00:00"]["1. open"];

// var openingPrice = MetaData["Time Series (1min)"]["2018-04-23 09:30:00"]["1. open"];


var apriltwentythird = MetaData["Time Series (Daily)"]["2018-04-23"]["1. open"];
var apriltwenith = MetaData["Time Series (Daily)"]["2018-04-20"]["1. open"];

var change = apriltwentythird - apriltwenith;
console.log('Opening price for ' + company + ' is ' + change);
}