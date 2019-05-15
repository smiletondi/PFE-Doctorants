const mongoose= require('mongoose');

const theseSchema= mongoose.Schema({
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

module.exports= mongoose.model('These', theseSchema);