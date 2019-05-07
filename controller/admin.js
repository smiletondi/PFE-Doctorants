const Secretary = require("../model/secretary");

module.exports.getAddSecretary=(req, res, next)=>{
    res.render("./admin/add-secretary", {title: "Ajouter Seceretaire"});
}

module.exports.postAddSecretary=(req, res, next)=>{
    const userN= req.body.userN;
    const userP= req.body.userPass;
    Secretary.create({
        username: userN,
        pass: userP
    }).then(()=>{
        console.log('Secretary added');
        res.redirect("/admin/secretary-list");
    }).catch( err=> console.log(err));
}

module.exports.postDeleteSecretary=(req, res, next)=>{
    const userId= req.body.secId;
    Secretary.findOne({where: {id: userId}})
        .then(sec=>{
            return sec.destroy();
        }).then(()=>{
            console.log('Secretary destroyed');
            res.redirect("/admin/secretary-list");
        }).catch(err=> console.log(err));
}

module.exports.getSecretaryList=(req, res, next)=>{
    Secretary.findAll().then(sL=>{
        // console.log(sL)
        res.render("./admin/secretary-list", {title: "Liste des secretaires", SL: sL});
    })
}