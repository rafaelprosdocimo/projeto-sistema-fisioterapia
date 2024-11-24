const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'your_password',
  database: 'fisioterapia'
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

export default connection;