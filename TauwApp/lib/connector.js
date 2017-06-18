var MongoClient = require('mongodb').MongoClient
var assert = require('assert');

var url = 'mongodb://localhost:27017/tauw';

var findDocuments = function(collection, query, db, callback) {
  // Get the documents collection
  var collection = db.collection(collection);
  // Find some documents
  collection.find( query ).toArray(function(err, docs) {
    assert.equal(err, null);
    // console.log("Found the following records example");
    // console.log(docs)
    callback(docs);
  });
}

var findDocumentsWithField = function(collection, query, field, db, callback) {
  // Get the documents collection
  var collection = db.collection(collection);
  // Find some documents
  collection.find( query,field ).toArray(function(err, docs) {
    assert.equal(err, null);
    // console.log("Found the following records example");
    // console.log(docs)
    callback(docs);
  });
}

var find = {
  findSensors : function (query, callback) {
   MongoClient.connect(url, function(err, db) {
     assert.equal(null, err);
     console.log("Connected successfully to server");

     findDocuments("sensors", query ,db, function(docs) {
       callback(docs);
       db.close();
     });
   });
 },
 findSettings : function (query,field, callback) {
   MongoClient.connect(url, function(err, db) {
     assert.equal(null, err);
     console.log("Connected successfully to server");

     findDocumentsWithField("settings", query, field,db, function(docs) {
       callback(docs);
       db.close();
     });
   });
 }

}

module.exports = {find: find};
