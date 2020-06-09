var mysql = require('mysql');
var connection = mysql.createConnection({
host     : 'bdqjmttq7nbu1d6l1kbh-mysql.services.clever-cloud.com',
user     : 'u1czxsffks8lxvhc',
password : 'ly2PGM7jus3aghfXqtq9',
database : 'bdqjmttq7nbu1d6l1kbh'
});

function numberOfFiles() {
	
  connection.connect();
  
  return new Promise(function(resolve, reject) {
	  connection.query('select * from Files', (err, rows) => {
		  if(err) {
			return reject(err);
		  }
		  resolve(rows.length);
	  });
	  connection.end();
  });
  
}

module.exports = numberOfFiles;