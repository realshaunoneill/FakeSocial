const schemaUtils = require('../database/schemaUtils');

exports.init = function (app) {

    app.get('/dashboard', async (req, res) => {
        let logins = await schemaUtils.fetchLogins();

        res.render('dashboard', {
            loginEntries: logins
        })
    });
};