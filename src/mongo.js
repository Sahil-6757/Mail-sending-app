var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/Lucky_Shop";

MongoClient.connect(url, function(err, db) {
  if (err) throw console.log(err);
  console.log("Database created!");
  db.close();
});