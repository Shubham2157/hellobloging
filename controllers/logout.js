module.exports = (req, res) => {
        req.session.destroy(() => {
            res.redirect('/')
        })

     req.session.cookie.expires = new Date().getTime();
     res.redirect('/');
 }