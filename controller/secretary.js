const Doctorant = require("../model/doctorant");
const Encadrant= require('../model/encadrant');
const These= require('../model/these');

module.exports.getDoctList = (req, res, next) => {
    Doctorant.findAll().then(doctList => {
        res.render("./secretary/doctorant-list", {
            title: "Liste des doctorants",
            AL: doctList
        });
    }).catch(err => console.log(err));
};
module.exports.postDocList = (req, res, next) => {
    const docId = req.body.encId;
    res.redirect('doctorant-detail/'+docId);
};

module.exports.getAddDoct = (req, res, next) => {
    res.render("./secretary/add-doctor", {
        title: "Ajouter doctorant",
    });
};

module.exports.postAddDoct = (req, res, next) => {
    const prenom = req.body.prenom;
    const nom = req.body.nom;
    const profil = req.body.profil;
    const cin = req.body.cin;
    const cne = req.body.cne;
    const sexe = req.body.sexe;
    const sitFam = req.body.sitFam;
    const dateNaiss = req.body.dateNaiss
    const lieuNaiss = req.body.lieuNaiss;
    const nation = req.body.nation;
    const adress = req.body.adress;
    const specialite = req.body.special;
    const telephone = req.body.tel;
    const email = req.body.email;
    const bourse = req.body.bourse;
    const ddiplome = req.body.ddiplome;
    const annDiplome = req.body.annDiplome;

    Doctorant.create({
        nom: nom,
        prenom: prenom,
        profil: profil,
        sexe: sexe,
        cin: cin,
        cne: cne,
        dateNaiss: dateNaiss,
        lieuNaiss: lieuNaiss,
        nationalite: nation,
        situationFam: sitFam,
        adresse: adress,
        specialite: specialite,
        tel: telephone,
        email: email,
        bourse: bourse,
        dernierDiplome: ddiplome,
        anneeDiplome: annDiplome
    }).then(() => {
        console.log('Doctorant created');
        res.redirect("/secretary/doctorant-list");
    }).catch(err=> console.log(err));

};

module.exports.getDocDetail = (req, res, next) => {
    const docId = req.params.doctorantId;
    Doctorant.findOne({where: {id: docId}})
        .then(doctorant=>{
            res.render("./secretary/doctor-detail", {
                title: "Details du doctorant",
                doc: doctorant
            });
        }).catch(err=>console.log(err));
};

module.exports.postDoctDetail = (req, res, next) => {
    const doctId = req.body.docId;
    Doctorant.findOne({where: {id: doctId}})
        .then(doctorant=> doctorant.destroy())
        .then(()=>{
            console.log('Doctorant deleted');
            res.redirect('/secretary/doctorant-list');
        }).catch(err=>console.log(err));
};



module.exports.getEncList = (req, res, next) => {
    Encadrant.findAll().then(encList => {
        res.render("./secretary/encadrant-list", {
            title: "Liste des encadrants",
            AL: encList
        });
    }).catch(err => console.log(err));
};
module.exports.postEncList = (req, res, next) => {
    const encId = req.body.encId;
    res.redirect('encadrant-detail/'+encId);
};

module.exports.getAddEnc = (req, res, next) => {
    res.render("./secretary/add-encadrant", {
        title: "Ajouter doctorant",
    });
};
module.exports.postAddEnc = (req, res, next) => {
    const prenom = req.body.prenom;
    const nom = req.body.nom;
    const profil = req.body.profil;
    const cin = req.body.cin;
    const dateNaiss = req.body.dateNaiss
    const lieuNaiss = req.body.lieuNaiss;
    const specialite = req.body.special;
    const telephone = req.body.tel;
    const email = req.body.email;

    Encadrant.create({
        nom: nom,
        prenom: prenom,
        profil: profil,
        cin: cin,
        dateNaiss: dateNaiss,
        lieuNaiss: lieuNaiss,
        specialite: specialite,
        tel: telephone,
        email: email,
    }).then(() => {
        console.log('Encadrant created');
        res.redirect("/secretary/encadrant-list");
    }).catch(err=> console.log(err));

};

module.exports.getEncDetail = (req, res, next) => {
    const encId = req.params.encadrantId;
    Encadrant.findOne({where: {id: encId}})
        .then(encadrant=>{
            res.render("./secretary/Encadrant-detail", {
                title: "Details du doctorant",
                doc: encadrant
            });
        }).catch(err=>console.log(err));
};
module.exports.postEncDetail = (req, res, next) => {
    const encId = req.body.encId;
    Encadrant.findOne({where: {id: encId}})
        .then(encadrant=> encadrant.destroy())
        .then(()=>{
            console.log('Encadrant deleted');
            res.redirect('/secretary/encadrant-list');
        }).catch(err=>console.log(err));
};




module.exports.getTheseList = (req, res, next) => {
    These.findAll({include: [Encadrant, Doctorant]}).then(theseList => {
        res.render("./secretary/these-list", {
            title: "Liste des encadrants",
            AL: theseList
        });
    }).catch(err => console.log(err));
};
module.exports.postTheseList = (req, res, next) => {
    const theseId = req.body.thId;
    These.findOne({where:{id: theseId}})
        .then(these=> these.destroy())
        .then(()=>{
            console.log('These destroyed');
            res.redirect('/secretary/these-list');
        }).catch(err => console.log(err));
};


module.exports.getAddThese = (req, res, next) => {
    let encList,docList;
    Encadrant.findAll().then(enc=>{
        encList=enc;
        return Doctorant.findAll({include: [These]});
    }).then(docTh=>{
        docList= docTh.filter(elem=> elem.these==null);
        res.render("./secretary/add-these", {
            title: "Ajouter these",
            encadrants: encList,
            doctorants: docList
        });
    }).catch(err=>console.log(err));
};
module.exports.postAddThese = (req, res, next) => {
    const doctId = req.body.doctorant;
    const encId = req.body.encadrant;
    const intitule = req.body.intitule;

    These.create({
        intitule: intitule,
        doctorantId: doctId,
        encadrantId: encId
    }).then(() => {
        console.log('These created');
        res.redirect("/secretary/These-list");
    }).catch(err=> console.log(err));

};
