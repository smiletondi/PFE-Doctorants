const mongoose= require('mongoose');

const secretarySchema= mongoose.Schema({
    username: String,
    pass: String
});

module.exports= mongoose.model('Secretary', secretarySchema);