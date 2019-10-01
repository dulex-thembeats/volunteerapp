var mongoose = require('mongoose');

var admin = mongoose.model('admin', {
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
   }
})