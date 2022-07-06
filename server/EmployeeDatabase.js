const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "185.78.167.117",
  user: "ratecall",
  password: "jHpu60RC+-iN59",
  database: "ratecall_employee",
  port: 3306,
});

module.exports = pool;
