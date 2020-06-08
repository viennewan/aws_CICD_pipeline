var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'bdqjmttq7nbu1d6l1kbh-mysql.services.clever-cloud.com',
  user     : 'u1czxsffks8lxvhc',
  password : 'ly2PGM7jus3aghfXqtq9',
  database : 'bdqjmttq7nbu1d6l1kbh'
});

connection.connect();

connection.query('SELECT * from Files', function(err, rows, fields) {
  if (!err)
    console.log('The solution is: ', rows);
  else
    console.log('Error while performing Query.');
});

connection.end(); 


function sum(a,b) {
  return a+b+1;
}

module.exports = sum;