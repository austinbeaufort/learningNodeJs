// CORE MODULES NODE SHIPS WITH

// http => launch a server, send requests
// https => launch a SLL server
// fs 
// path
// os

//  require('./ ') will ALWAYS look for a local path to a file.
// require (' ') will ALWAYS look for a global module.

// http.createServer(function(req, res) {

//});

// server.listen(3000);

// EVENT LOOP CONTINUES TO RUN AS LONG AS..
// THERE ARE EVENT LISTENERS REGISTERED

// PROCESS.EXIT() DOES A "HARD EXIT" OF THE EVENT LOOP


// CAN USE NPM RUN **PLACE YOUR SCRIPT NAME HERE** TO RUN YOUR,
// OWN CUSTOM SCRIPTS IN THE PACKAGE.JSON FILE

// nodemon can be used for automatically refreshing server.
// --save-dev will install an npm package only in the dev dependencies

// *npm install* by itself will go through all packages in..
// package.json and update them to the latest versions.


// IF NOT WORKING ON A PROJECT, CAN DELETE THE NODE MODULES FOLDER..
// AND THEN RERUN *NPM INSTALL* TO REDOWNLOAD THE FOLDER WITH..
// ALL OF IT'S DEPENDENCIES.

// Core Node.js Modules don't need to be installed..
// (NO npm install is required) but you need to import..
//  them when you want to use features exposed by them.

// MUST IMPORT CORE NODE.JS MODULES IF WE WANT TO USE THEM.

// TYPES OF ERRORS:
// SYNTAX ERRORS, GRAMMER ERRORS
// RUNTIME ERRORS, BREAKS ON RUNTIME
// LOGICAL ERRORS, NEVER SEE AN ERROR MESSAGE, APP NOT WORKING CORRECTLY.
