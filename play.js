//main file through which we will launch the game client

const net = require("net");
const { stdin } = require("process");

// establishes a connection with the game server
const { connect } = require("./client");
// setup interface to handle user input from stdin
const { setupInput } = require("./input");

console.log("Connecting ...");
connect();

setupInput();
