var oracledb = require('oracledb');
console.time("dbsave");

oracledb.getConnection(
  {
    user: 'PBB',
    password: 'RAHASIAPBB',
    connectString: '192.168.2.7/sismiop'
  }, 

  function(err, connection) {
    if(err) {console.error(err.message); return}

    connection.execute(
      //"select nm_pegawai from pegawai where nip = :nip",
      //['198404092010011025'],
      "select nm_pegawai from pegawai",
      [],

      function(err, result) {
        if(err) {console.error(err.message); return;}
	console.log(result.rows);
	console.timeEnd("dbsave");
      }
    );
  }
);
