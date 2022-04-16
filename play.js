//main file through which we will launch the game client

const net = require("net");

// establishes a connection with the game server
const connect = function () {
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

  return conn;
};

console.log("Connecting ...");
connect();