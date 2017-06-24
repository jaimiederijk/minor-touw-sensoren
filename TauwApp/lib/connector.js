var MongoClient = require('mongodb').MongoClient
var assert = require('assert');

var url = 'mongodb://localhost:27017/tauw';

var findDocuments = function(collection, query, db, callback) {
  // Get the documents collection
  var collection = db.collection(collection);
  // Find some documents
  collection.find( query ).toArray(function(err, docs) {
    assert.equal(err, null);
    callback(docs);
  });
}

var findDocumentsWithField = function(collection, query, field, db, callback) {
  // Get the documents collection
  var collection = db.collection(collection);
  // Find some documents
  collection.find( query,field ).toArray(function(err, docs) {
    assert.equal(err, null);

    callback(docs);
  });
}

var createDocument = function(collection, json, db) {
  // Get the documents collection
  var collection = db.collection(collection);
  // Find some documents
  collection.insertOne(json, function(err, r) {
    assert.equal(err, null);
    assert.equal(1, r.insertedCount)

  });
}

var searchText = function(collection, query, db, callback) {
  var collection = db.collection(collection);

  collection.ensureIndex({
      _id: "text",
      name:"text",
      sector:"text",
      branch:"text",
      tags:"text",
      level:"text",
      contact: "text"
    }, function(err, indexName ){

    collection.find( {$text: {$search: query, $caseSensitive:false} }).toArray(function(err, docs) {
      assert.equal(err, null);

      callback(docs);
    });
  })
}

var removeDocument = function(collection, query, db, callback) {
  // Get the documents collection
  var collection = db.collection(collection);
  console.log(query)

  // Remove a single document
  // http://mongodb.github.io/node-mongodb-native/2.2/tutorials/crud/#removing-documents

  collection.find(query ).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log(docs)
  });

    collection.deleteOne(query, function(err, docs) {
      assert.equal(null, err);
      console.log(docs.deletedCount)
     callback(docs);
      });
};

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
 },
 searchText : function (query, callback) {
   MongoClient.connect(url, function(err, db) {
     assert.equal(null,err);

     searchText("sensors", query, db, function(docs) {
       callback(docs);
       db.close();
     });
   })
 },
 createNewSensor : function (json) {
   MongoClient.connect(url, function(err, db){
     assert.equal(null,err);

     createDocument("sensors", json, db);
   })
 },
 removeItem : function (query, callback) {
   MongoClient.connect(url, function(err, db) {
     assert.equal(null, err);
     console.log("Connected successfully to server");

     removeDocument("sensors", query, db, function(docs) {
         callback(docs);
         console.log("Item successfully removed")
       db.close();
     });
 })
 },
}

module.exports = {find: find};
