var mongoose = require('mongoose');

var url = 'mongodb://localhost:27017/VolunteerApp'

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('Successfully connected to database');
});


module.exports = {mongoose}