var mongoose = require('mongoose');



var PostSchema = new mongoose.Schema({
    header: {
        type: String,
        required: true,
        minlength: 1,
        trim: false
    },
    body: {
        type: String,
        required: true, 
    }
});


var Post = mongoose.model('Post', PostSchema);

module.exports = {Post}