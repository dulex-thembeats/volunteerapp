var mongoose = require('mongoose');

var user = mongoose.model('user', {
    email:{
        type: String, 
        required: true,
        trim:true,
        minlength:1,
        unique:true
        // validate:{
        //     validate:(value) =>{

        //     },
        //     message: '{VALUE} is not a valid email'
        
    }
});


module.exports = {user}