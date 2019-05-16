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

encadrantSchema.methods.delThese= function(){
    These.deleteOne({encadrantId: this._id})
        .then(these=>{
            console.log('Removing '+ these.intitule);
            next();
        });
};

module.exports = mongoose.model('Encadrant', encadrantSchema);