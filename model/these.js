const mongoose= require('mongoose');

const theseSchema= mongoose.Schema({
    intitule: String,
    doctorantId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctorant',
        required: true
    },
    encadrantId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Encadrant',
        required: true
    }
});

module.exports= mongoose.model('These', theseSchema);