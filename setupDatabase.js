require('dotenv').config();
const { exec } = require('child_process');

const dropDbCommand = `psql -U ${process.env.DB_USER} -c "DROP DATABASE IF EXISTS ${process.env.DB_NAME};"`;
const createDbCommand = `psql -U ${process.env.DB_USER} -c "CREATE DATABASE ${process.env.DB_NAME};"`;

exec(dropDbCommand, (err, stdout, stderr) => {
  if (err) {
    console.error(`Error dropping database: ${err.message}`);
    return;
  }
  console.log(`Database dropped: ${stdout}`);

  exec(createDbCommand, (err, stdout, stderr) => {
    if (err) {
      console.error(`Error creating database: ${err.message}`);
      return;
    }
    console.log(`Database created: ${stdout}`);
  });
});
