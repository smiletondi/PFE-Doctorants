const Secretary = require("../model/secretary");

module.exports.getAddSecretary=(req, res, next)=>{
    res.render("./admin/add-secretary", {title: "Ajouter Seceretaire"});
}

module.exports.postAddSecretary=(req, res, next)=>{
    const userN= req.body.userN;
    const userP= req.body.userPass;
    const s1= new Secretary({
        username: userN,
        pass: userP
    });
    s1.save().then(()=>{
        console.log('Secretary Created');
        res.redirect("/admin/secretary-list");
    }).catch( err=> console.log(err));
}

module.exports.postDeleteSecretary=(req, res, next)=>{
    const userId= req.body.secId;
    Secretary.deleteOne({_id: userId})
        .then(()=>{
            console.log('Secretary deleted');
            res.redirect("/admin/secretary-list");
        }).catch(err=> console.log(err));
}

module.exports.getSecretaryList=(req, res, next)=>{
    Secretary.find().then(sL=>{
        // console.log(sL)
        res.render("./admin/secretary-list", {title: "Liste des secretaires", SL: sL});
    })
}