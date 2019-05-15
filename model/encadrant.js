const mongoose= require('mongoose');
const These= require('./these');

const encadrantSchema= mongoose.Schema({
    nom: String,
    prenom: String,
    profil: String,
    cin: String,
    dateNaiss: {
        type: Date,
        required: true,
        default: Date.now
    },
    lieuNaiss: String,
    specialite: String,
    tel: Number,
    email: String
    
});

encadrantSchema.pre('remove', next=>{
    // These.findOne()
    console.log('Removing '+this._id);
    next();
});

module.exports = mongoose.model('Encadrant', encadrantSchema);