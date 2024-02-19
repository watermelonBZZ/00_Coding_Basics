module.exports = function (req, res, next) {
    if (!req.session.userName) {
        res.redirect('/login')
        return
    }
    next()
}