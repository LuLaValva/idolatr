// Adapted from https://itnext.io/how-to-share-a-single-database-connection-in-a-node-js-express-js-app-fcad4cbcb1e

import MongoClient from "mongodb";
const assert = require("assert");

let _db: MongoClient.Db;

function initDB(database: string, callback: Function) {
  if (_db) {
    console.warn("Already connected to database");
    return callback(null, _db);
  }

  MongoClient.connect(
    "mongodb://127.0.0.1/27017",
    {
      useUnifiedTopology: true,
    },
    (err, client) => {
      if (err) {
        return callback(err);
      }
      console.log("connected to database");
      _db = client.db(database);
      return callback(null, _db);
    }
  );
}

function getDB() {
  assert.ok(_db, "DB not initialized");
  return _db;
}

export { initDB, getDB };
