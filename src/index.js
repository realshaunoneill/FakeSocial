const fs = require('fs');
const path = require('path');
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const readLine = require('readline');

const app = exports.app = express();
let specificMode = process.env.mode;
const serviceDir = path.join(__dirname, 'services');

const availableServices = [];
const availableServiceNames = [];

try {
    fs.readdir(serviceDir, (err, files) => {
        if (err) return console.error(`Failed to read directory ${serviceDir}, no service modules will be loaded, Error: ${err.stack}`);
        files.forEach(file => {
            if (!file.startsWith('_') && file.endsWith('.js')) {
                let service = require(path.join(serviceDir, file));

                if (typeof service.name !== 'undefined' && typeof service.execute !== 'undefined') {
                    availableServices[service.name] = service;
                    availableServiceNames.push(service.name);
                } else {
                    console.error(`Error loading module, ${file}, module is corrupt`);
                }
            }
        })

    })
} catch (err) {
    console.error(`Error while setting up available modes, Error: ${err.stack}`);
}

try {
    if (!specificMode || !availableServiceNames.includes(specificMode.toLowerCase())) {
        let prompt = readLine.createInterface(process.stdin, process.stdout);
        prompt.setPrompt(`Please select a service to run: `);
        prompt.prompt();
        prompt.on('line', line => {
            if (availableServiceNames.includes(line.toLowerCase())) {
                specificMode = line;
                prompt.close();
            } else prompt.prompt();
        })
    }
} catch (err) {
    console.error(`Error enabling specific mode, Error: ${err.stack}`);
}

try {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(express.static('Web'));
    app.set('views', `${__dirname}/views`);
    app.set('view engine', 'ejs');
    app.use('/', express.static(`${__dirname}/static`));
} catch (err) {
    console.error(`Error during web init, Error: ${err.stack}`);
}

// Set up final server
try {
    const httpServer = http.createServer(app);
    let port = process.env.PORT || 80;
    httpServer.listen(port, (err) => {
        if (err) {
            console.error(`FAILED TO OPEN WEB SERVER, ERROR: ${err.stack}`);
            return;
        }
        console.info(`Successfully started server..listening on port ${port}`);
    })
} catch (err) {
    console.error(`Error starting up server, Error: ${err.stack}`)
}