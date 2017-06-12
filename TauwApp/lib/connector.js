var MongoClient = require('mongodb').MongoClient
var assert = require('assert');

var url = 'mongodb://localhost:27017/tauw';

var findDocuments = function(query, db, callback) {
  // Get the documents collection
  var collection = db.collection('sensors');
  // Find some documents
  collection.find( query ).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records example");
    console.log(docs)
    callback(docs);
  });
}

var find = function (query, callback) {
  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    findDocuments(query ,db, function(docs) {
      callback(docs);
      db.close();
    });
  });

}

module.exports = {find: find};
