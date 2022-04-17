
const net = require("net");

// establishes a connection with the game server
const connect = function () {
  //create an object conn that represents connection with server
  const conn = net.createConnection({
    host: '192.168.1.47',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  //added event for when ded
  conn.on("data", () => {
    console.log("you ded cuz you idled bruh")
  });

  //added event for when connection successful
  conn.on("connect", () => {
    console.log("connection successful-- let's SNAKE!");
    //send our name to server after connecting
    conn.write('Name: WML');
  });

  // //testing: added event for snake to move up one square every 50ms on connection
  // conn.on("connect", () => {
  //   conn.write("Move: up");
  //   setTimeout(() => {
  //     conn.write("Move: up");
  //   }, 50);
  //   setTimeout(() => {
  //     conn.write("Move: up");
  //   }, 100);
  //   setTimeout(() => {
  //     conn.write("Move: up");
  //   }, 150);
  // });

  return conn;
};

module.exports = connect;
