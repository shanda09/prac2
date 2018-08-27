var pgp = require('pg-promise')({});
var connectionString = 'postgres://localhost/notes';
var db =pgp(connectionString)

module.exports =db;