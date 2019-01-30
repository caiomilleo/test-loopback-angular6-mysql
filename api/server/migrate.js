'use strict';
var server = require('./server');
var mysql = server.dataSources.mysql;

var appModels =  Object.keys(server.models);

mysql.isActual(appModels, function(err, actual) {
  if (!actual) {
    mysql.autoupdate(appModels, function(err) {
      if (err) throw (err);
    });
  }
  console.log('migrated');
  return;
});
