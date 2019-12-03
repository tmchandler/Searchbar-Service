const Promise = require('bluebird');
const db = require('./index.js');

module.exports.getAll = () => new Promise((resolve, reject) => {
  const sqlString = 'SELECT * FROM products;';
  const options = [];

  db.query(sqlString, options, (err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  });
});