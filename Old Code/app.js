

var async = require('async')
var Alexa = require('./models/alexaData.js')
var fs = require('fs')
//Sets up mongoose connection
var mongoose = require('mongoose');
var mongoDB = 'mongodb://carpenter:Mayyam17@ds131099.mlab.com:31099/alexadata';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


// Reads the JSON data parses it into a JavaScript object and then runs that through the schema. All under the variable alexaData
var alexaData = new Alexa(JSON.parse(fs.readFileSync('C:/Users/liamc/Desktop/LearningLab/AlexaMongo/alexa.json')));


alexaData.save(function (err){
  if(err){
    console.log(err)
    return
  }
  else{
    console.log('New Data:' + alexaData)
    db.close()
  }

})
