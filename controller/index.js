const Secretary = require("../model/secretary");
const Admin = require("../model/admin");
const Doctorant= require('../model/doctorant');

module.exports.getIndex =async (req, res, next) => {
    let doctorants=await Doctorant.findAll();
    console.log(doctorants);
    res.render('index', { title: `Page d'accueil` });
}

module.exports.postIndex = (req, res, next) => {
    const userName = req.body.username;
    const userPass = req.body.userPass;
    const userType = req.body.userType;

    switch (userType) {
        case 'admin':
            Admin.findOne({ where: { username: userName, pass: userPass } })
                .then((aa) => {
                    if (aa) {
                        return res.redirect("/admin/secretary-list");
                    }
                    return res.redirect("/");
                }).catch(err => {
                    console.log(err)
                });
            break;
        case 'secretary':
            Secretary.findOne({
                where: {
                    username: userName,
                    pass: userPass
                }
            }).then(ss => {
                if (ss) {
                    return res.redirect("/secretary/doctorant-list");
                }
                return res.redirect("/");
            }).catch(err => console.log(err));
            break;
        default:
            return res.redirect("/");
    }

       
}