const mongoose= require('mongoose');

const secretarySchema= mongoose.Schema({
    intitule: String,
    doctId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctorant',
        required: true
    },
    encId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Encadrant',
        required: true
    }
});

module.exports= mongoose.model('Secretary', secretarySchema);