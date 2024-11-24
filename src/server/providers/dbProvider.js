const mysql = require('mysql2');



const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Your MySQL username
  password: '1234', // Your MySQL password
  database: 'fisioterapia',
  port: 3306,
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.message);
    return;
  }
  console.log('Connected to the MySQL database.');
});

module.exports = db;
