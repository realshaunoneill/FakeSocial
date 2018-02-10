# FakeSocial
An educational program used to show how easy it is to make phishing websites look identical to their respective official
websites.

## Installation
Download or clone the repository to your computer.  Run <code>npm install</code>.  This should only take a minute.
The next step is to supply configuration arguments to the program, you can either rename the 'ex_config.js' to 'config.js' and edit
the values or they can be passed in as enviroment values [<b>mode</b> | <b>dburl</b> | <b>port</b> | <b>debug</b>].  If no mode is entered, it will ask you to enter one.
<br/><b>Note:</b> The default value for the port is <b>80</b> and with no dburl, messages will be sent to the console. Debug mode
is disabled by default.  Enabling this will display all status 200 connections on the console

## Social Media Websites
- [x] Facebook
- [x] Twitter
- [ ] Paypal
- [ ] Instagram
- [ ] Reddit

## Dashboard
A dashboard at location <code>/secret/dashboard</code> is used to display the saved database entries.
This is <b>NOT</b> protected, so anyone can access it.
<b>Note:</b> This dashboard is disabled when there is no <code>dburl</code> or it is disabled using the <code>dis_dashboard</code>
environment variable / config option.

## Supporting
This program was developed so adding extra modules would be super easy.  If you feel like contributing, have a look at how the <code>_example.js</code> is made.  Once you're finished, make a pull request and I'll have a look at it and if its good, I'll merge it.

## Disclaimer
This program outputs the username and password for each social media website, this is to be used for educational purposes <b>ONLY</b>.
If you choose to use this for any illegal activity, it's your own liability.
