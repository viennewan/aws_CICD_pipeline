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
      
      console.log('The solution is: ', rows);
      numOfFiles = rows.length;
      console.log("a:"+numOfFiles);
      
    }
    else
      console.log('Error while performing Query.');
  });
  console.log("b: "+numOfFiles);
  connection.end(); 
  return numOfFiles;
}

module.exports = numberOfFiles;