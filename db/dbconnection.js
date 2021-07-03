const mysql = require("mysql2/promise");
const pool = mysql.createPool({
  socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
  host: "localhost",
  user: "root", //univmlhx_ucnetwork
  password: "root", // XaGu^jgQExGl
  database: "treesports", // univmlhx_ucnetwork
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});
module.exports = pool;
