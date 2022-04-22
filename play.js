//main file through which we will launch the game client

const net = require("net");
const { stdin } = require("process");
const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");

setupInput(connect());