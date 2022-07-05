const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();

if (
  process.env.DB_HOST &&
  process.env.DB_PORT &&
  process.env.DB_USER &&
  process.env.DB_PASS &&
  process.env.DB_NAME
) {
  console.log("Database Connect Successful!");
} else {
  throw new Error(`Cannot find DB Creds in env variables`);
}

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

connection.connect((err) => {
  if (err) {
    console.error("error connecting to database " + err.stack);
    return;
  }
  console.log("Successfully Connected to Database");
});


const selectMultiple = async (query, ...args) => {
  const [rows] = await connection.promise().query(query, args);
  return rows;
};

const insertQuery = async (query, ...args) => {
  await connection.promise().query(query, args);
};

module.exports = {
  selectMultiple,
  insertQuery,
};