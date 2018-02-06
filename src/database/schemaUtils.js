const driver = require('./driver');

exports.saveNewLogin = function (serviceName, username, password) {
    let newLogin = new driver.getModals().Creds({
        username: username,
        password: password,
        service: serviceName
    });
    newLogin.save();
};