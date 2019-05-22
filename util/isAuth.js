module.exports = (req, res, next) => {
    if (!req.session.isLoggedIn) {
        req.flash('error', "Veuillez vous connecter SVP");
        return res.redirect('/');
    }
    next();
};