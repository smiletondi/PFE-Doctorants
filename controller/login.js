const Secretary = require("../model/secretary");
const Admin = require("../model/admin");

module.exports.getLogin =async (req, res, next) => {
    res.render('login', { title: `Page d'accueil` });
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
                        req.session.isLoggedIn= true;
                        req.session.user=aa;
                        console.log(aa.username+' has connected');
                        return res.redirect("/admin/secretary-list");
                    }
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
                        req.session.isLoggedIn= true;
                        req.session.user=ss;
                        console.log(ss.username+' is connected');
                    return res.redirect("/secretary/doctorant-list");
                }
                return res.redirect("/");
            }).catch(err => console.log(err));
            break;
        default:
            return res.redirect("/");
    }

       
}

module.exports.postLogout= (req,res,next)=>{
    const username= req.session.user.username;
    req.session.destroy(()=>{
       console.log(username+' has disconnected (Session destroyed)') ;
        res.redirect('/');
    });
}