// stores the active TCP connection object
let connection;

// setup interface to handle user input from stdin
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {

  // ctrl+c to exit the game
  if (key === '\u0003') {
    process.exit();
  };
  // WASD movement
  if (key === 'w') {
    connection.write("Move: up");
  };
  if (key === 'a') {
    connection.write("Move: left");
  };
  if (key === 's') {
    connection.write("Move: down");
  };
  if (key === 'd') {
    connection.write("Move: right");
  };
  // special messages
  if (key === 'o') {
    connection.write("Say: OOPS!");
  };
  if (key === 'p') {
    connection.write("Say: sorry :P");
  };
  if (key === 'l') {
    connection.write("Say: WOW!");
  };
};

module.exports = { setupInput };