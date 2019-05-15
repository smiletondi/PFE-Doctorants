const mongoose= require('mongoose');
const These= require('./these');

const doctorantSchema= mongoose.Schema({
    nom : {
        type: String,
        required: true,
        default: 'Mehdi'
    },
    prenom : {
        type: String,
        required: true,
        default: 'Samba'
    },
    profil : {
        type: String,
        required: true,
        default: 'https://picsum.photos/200'
    },
    sexe : {
        type: String,
        required: true,
        default: 'Masculin'
    },
    cin : {
        type: String,
        required: true,
        default: 'jk7493643'
    },
    cne : {
        type: String,
        required: true,
        default: '19-19891092'
    },
    dateNaiss : {
        type: Date,
        required: true,
        default: Date.now
    },
    lieuNaiss : {
        type: String,
        required: true,
        default: 'Agadir'
    },
    nationnalite : {
        type: String,
        required: true,
        default: 'Africain'
    },
    situationFam : {
        type: String,
        required: true,
        default: 'Celibataire'
    },
    adresse : {
        type: String,
        required: true,
        default: 'Agadir'
    },
    specialite : {
        type: String,
        required: true,
        default: 'Informatique'
    },
    tel : {
        type: Number,
        required: true,
        default: 0666666666
    },
    email : {
        type: String,
        required: true,
        default: 'doctorant@fsa.ac.ma'
    },
    bourse : {
        type: Boolean,
        required: true,
        default: false
    },
    dernierDiplome : {
        type: String,
        required: true,
        default: 'Master'
    },
    anneeDiplome : {
        type: Number,
        required: true,
        default: 2019
    }
});

doctorantSchema.pre('remove', next=>{
    // These.findOne()
    console.log('Removing '+this._id);
    next();
});

module.exports = mongoose.model('Doctorant', doctorantSchema);