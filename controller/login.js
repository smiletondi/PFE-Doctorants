const Secretary = require("../model/secretary");
const Admin = require("../model/admin");

module.exports.getLogin = async (req, res, next) => {
    res.render('login', {
        title: `Page d'accueil`,
        error: req.flash('error')
    });
}

module.exports.postLogin = (req, res, next) => {
    const userName = req.body.username;
    const userPass = req.body.userPass;
    const userType = req.body.userType;

    switch (userType) {
        case 'admin':
            Admin.findOne({ username: userName, pass: userPass })
                .then((aa) => {
                    if (aa) {
                        req.session.isLoggedIn = true;
                        req.session.user = aa;
                        console.log(aa.username + ' has connected');
                        return res.redirect("/admin/secretary-list");
                    }
                    req.flash('error', "Nom d'utilisateur ou mot de passe Incorrect, Reessayez SVP");
                    return res.redirect("/");
                }).catch(err => {
                    console.log(err)
                });
            break;
        case 'secretary':
            Secretary.findOne({
                username: userName,
                pass: userPass
            }).then(ss => {
                if (ss) {
                    req.session.isLoggedIn = true;
                    req.session.user = ss;
                    console.log(ss.username + ' is connected');
                    return res.redirect("/secretary/doctorant-list");
                }
                req.flash('error', "Nom d'utilisateur ou mot de passe Incorrect, Reessayez SVP");
                return res.redirect("/");
            }).catch(err => console.log(err));
            break;
        default:
            req.flash('error', "Veuillez entrer vos identifiants");
            return res.redirect("/");
    }


}

module.exports.postLogout = (req, res, next) => {
    const username = req.session.user.username;
    req.session.destroy(() => {
        console.log(username + ' has disconnected (Session destroyed)');
        res.redirect('/');
    });
}