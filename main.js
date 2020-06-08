function numberOfFiles() {
  var numOfFiles = 0;
  var mysql      = require('mysql');
  var connection = mysql.createConnection({
    host     : 'bdqjmttq7nbu1d6l1kbh-mysql.services.clever-cloud.com',
    user     : 'u1czxsffks8lxvhc',
    password : 'ly2PGM7jus3aghfXqtq9',
    database : 'bdqjmttq7nbu1d6l1kbh'
  });
  connection.connect();
  connection.query('SELECT * from Files', (err, rows) => {
    if (!err){
      numOfFiles = rows.length;
    }
    else
      console.log('Error while performing Query.');
  });
  connection.end(); 
  return numOfFiles;
}

module.exports = numberOfFiles;