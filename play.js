//main file through which we will launch the game client

const net = require("net");
const { stdin } = require("process");

// establishes a connection with the game server
const connect = require('./client')

console.log("Connecting ...");
connect();

// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {

  //ctrl+c to exit the game
  if (key === '\u0003') {
    process.exit();
  };
}
